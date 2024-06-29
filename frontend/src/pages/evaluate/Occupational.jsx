import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useLocation } from 'react-router-dom';
// import flattenStudentData from '../helpers/flattenStudentData';

const useStyles = createUseStyles({
    registrationForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '1100px',
        margin: 'auto',
        padding: '30px',
        border: '1px solid #e0e0e0',
        borderRadius: '10px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
        },
        '@media (min-width: 600px)': {
            width: '100%',
        },
        '@media (min-width: 900px)': {
            width: '100%',
        },
        '@media (min-width: 1200px)': {
            width: '100%',
        },
    },
    title: {
        fontSize: '40px',
        fontWeight: '600',
        marginBottom: '20px',
        textAlign: 'center',
        color: '#444',
        background: '-webkit-linear-gradient(left, #007BFF, #0056b3)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    label: {
        marginBottom: '25px',
        fontSize: '20px',
        fontWeight: '500',
        color: '#444',
    },
    textInput: {
        padding: '12px',
        marginTop: '5px',
        marginBottom: '20px',
        width: '100%',
        borderRadius: '6px',
        border: '1px solid #ccc',
        fontSize: '15px',
        color: '#333',
        backgroundColor: '#f9f9f9',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        '&:focus': {
            borderColor: '#007BFF',
            outline: 'none',
            boxShadow: '0 0 8px rgba(0, 123, 255, 0.4)',
        },
    },
    button: {
        padding: '12px 25px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        '&:hover': {
            backgroundColor: '#0056b3',
            transform: 'translateY(-3px)',
        },
        '&:active': {
            transform: 'translateY(1px)',
        },
        '&:disabled': {
            backgroundColor: '#cccccc',
            cursor: 'not-allowed',
        },
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
    },
    tableContainer: {
        marginTop: '40px',
    },
    tableTitle: {
        fontSize: '30px',
        fontWeight: '600',
        marginBottom: '20px',
        textAlign: 'center',
        color: '#333',
        background: '-webkit-linear-gradient(left, #28a745, #218838)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    table: {
        width: '100%',
        marginTop: '10px',
        borderCollapse: 'collapse',
    },
    th: {
        border: '1px solid #ddd',
        padding: '14px',
        textAlign: 'left',
        backgroundColor: '#f8f9fa',
        fontWeight: '600',
        fontSize: '20px',
        color: '#333',
    },
    td: {
        border: '1px solid #ddd',
        padding: '14px',
        fontSize: '20px',
        color: '#555',
        backgroundColor: '#fff',
    },
});

const Occupational = () => {
    const classes = useStyles();
    const location = useLocation();
    const { pathname } = location;
    const username = pathname.split("/").pop();
    const [isEditing, setIsEditing] = useState(true);
    const [formData, setFormData] = useState({});
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState("");
    const [newAnswer, setNewAnswer] = useState("");

    useEffect(() => {
        axios.post('http://localhost:4000/getstudentdetails', { username: username }, { withCredentials: true })
            .then(response => {
                const occupationalQA = response.data.data.occupationalQA;
                setQuestions(occupationalQA);
                const initialFormData = {};
                occupationalQA.forEach((question, index) => {
                    initialFormData[`s${index + 1}`] = question.answer;
                });
                setFormData(initialFormData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [username]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleNewQuestionChange = (event) => {
        setNewQuestion(event.target.value);
    };

    const handleNewAnswerChange = (event) => {
        setNewAnswer(event.target.value);
    };

    const handleAddRow = (event) => {
        event.preventDefault();
        if (!newQuestion.trim() || !newAnswer.trim()) {
            return;
        }

        const newEntry = { question: newQuestion, answer: newAnswer };
        const updatedQuestions = [...questions, newEntry];
        setQuestions(updatedQuestions);
        setFormData({
            ...formData,
            [`s${updatedQuestions.length}`]: newAnswer
        });
        setNewQuestion("");
        setNewAnswer("");  
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const submissionData = {
            username: username,
            questions: questions.map((question, index) => ({
                question: question.question,
                answer: formData[`s${index + 1}`] || question.answer
            }))
        };
        console.log('Submitting data:', submissionData);

        await axios.post('http://localhost:4000/submitform', submissionData, { withCredentials: true })
            .then((response) => {
                console.log('Form submitted successfully:', response.data);
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
            });
    };

    return (
        <form className={classes.registrationForm} onSubmit={handleSubmit}>
            <div className={classes.title}>Functional Assessment Checklist For Programming</div>
            <div className={classes.title}>Occupational</div>
            <table className={classes.table}>
                <tbody>
                    {questions.map((question, index) => (
                        <tr key={index}>
                            <td className={classes.td}>{index + 1}</td>
                            <td className={classes.td}>{question.question}</td>
                            <td className={classes.td}>
                                <select
                                    name={`s${index + 1}`}
                                    value={formData[`s${index + 1}`]}
                                    onChange={handleChange}
                                    className={classes.textInput}
                                >
                                    <option value="">Select an option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="NA">NA</option>
                                    <option value="NE">NE</option>
                                    <option value="C-P1">C-P1</option>
                                    <option value="C-P2">C-P2</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td className={classes.td}>{questions.length + 1}</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="newQuestion"
                                value={newQuestion}
                                onChange={handleNewQuestionChange}
                                className={classes.textInput}
                                placeholder="Enter new question"
                            />
                        </td>
                        <td className={classes.td}>
                            <select
                                name="newAnswer"
                                value={newAnswer}
                                onChange={handleNewAnswerChange}
                                className={classes.textInput}
                            >
                                <option value="">Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                <option value="NA">NA</option>
                                <option value="NE">NE</option>
                                <option value="C-P1">C-P1</option>
                                <option value="C-P2">C-P2</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={classes.buttonContainer}>
                <button
                    className={classes.button}
                    onClick={handleAddRow}
                    disabled={!newQuestion.trim() || !newAnswer.trim()}
                >
                    Add row
                </button>
                <button className={classes.button} type="submit">Submit</button>
            </div>
        </form>
    );
};

export default Occupational;
