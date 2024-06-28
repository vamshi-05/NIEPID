import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useLocation, useNavigate } from 'react-router-dom';
import flattenStudentData from '../helpers/flattenStudentData'
const useStyles = createUseStyles({
    registrationForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '900px',
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


function Profile(params) {
    const location = useLocation();
    const navigate = useNavigate();
    const { hash, pathname, search } = location;
    const username = pathname.split("/")[pathname.split("/").length - 1];
    const [isEditing, setIsEditing] = useState(true);

    // async function getStudentDetails() {
    //     await axios.post('http://localhost:4000/getstudentdetails', { username: username }, { withCredentials: true }).then((response) => {
    //         setFormData(flattenStudentData(response.data.data));
    //     })
    // }

    // useEffect(async () => {
    //     await getStudentDetails();
    // }, [])

    const classes = useStyles();
    const [formData, setFormData] = useState({
        username: '',
        date: '',
        dob: '',
        name: '',
        sex: '',
        informant: '',
        education: '',
        referedby: '',
        occupation: '',
        aadhar: '',
        paymenttype: '',
        mobile: '',
        purposeVisit: '',
        previousConsultations: false,
        natureOfConsultations: '',
        treatmentUndergone: false,
        typeOfTreatment: '',
        therapeutic: '',
        presentCondition: [{ description: '' }],
        hasDysmorphicFeatures: '',
        smallSizedHead: '',
        ableToWalkAndRun: '',
        noAgeAppropriateComprehensionAndSpeechDevelopment: '',
        reachesGraspsAndManipulatesObjects: '',
        emotionallyAttachedToParents: '',
        hasAdequateEyeContactAndSocialSmile: '',
        eatsSelf: '',
        indicatesToiletNeeds: '',
        chromosomalAberrations: '',
        rhIncompatibility: '',
        geneticAberrations: '',
        consanguinity: '',
        threatenedAbortion: '',
        harmfulMedication: '',
        antenatalCheckUps: '',
        significantAccidents: '',
        infections: '',
        pregnancy: '',
        attemptedAbortion: '',
        nutrition: '',
        psychologicalTrauma: '',
        amnioticFluid: '',
        irradiation: '',
        nicotine: '',
        alcohol: '',
        ageAtConception: '',
        hypertension: '',
        diabetes: '',
        jaundice: '',
        fetalMovements: '',
        bleedingLatePregnancy: '',
        labourDuration: '',
        prolapsedCord: '',
        cordAroundNeck: '',
        multiplePregnancies: '',
        feedingProblems: '',
        convulsions: '',
        colorOfTheBaby: '',
        significantInjury: '',
        deliveryPlace: '',
        term: '',
        deliveryType: '',
        abnormalPresentation: '',
        respiratoryDistress: '',
        jaundice: '',
        deliveryConductedBy: '',
        labourInduction: '',
        birthCry: '',
        infections: '',
        seperationFromMother: '',
        jaundice: '',
        thyroidDysfunctions: '',
        nutritionalDisorders: '',
        convulsions: '',
        infections: '',
        significantHeadInjury: '',
        typeOfFamily: '',
        mentalRetardation: '',
        genogran: '',
        consanguinity: '',
        seizuresOrConvulsions: '',
        hearingProblems: '',
        speechProblems: '',
        mentalIllness: '',
        autismOrSpectrumDisorder: '',
        visualProblems: '',
        locomotorProblem: '',
        anyFamilyHistory: '',
        learningDisabilities: '',
        familyInvolvement: '',
        positiveIssues: '',
        neighbourhoodParticipation: '',
        personalNeedsOfTheClient: '',
        visitsToTheFamilyByOthers: '',
        familyVisitOutside: '',
        playAndLeisureTimeActivities: '',
        educationalActivities: '',
        supportOfExtendedFamily: '',
        negativeIssuesWithNeighbour: '',
        discontinuedSchool: '',
        educationalHistory: '',
        teacherReport: '',
        overallPerformance: '',
        typeOfSchooling: '',
        ReasonForDiscontinuingSchooling: '',
        ageOfAdmission: '',
        involvementInPlay: '',
        observesOthersPlaying: '',
        playBehaviour: '',
        periodicity: '',
        ageofAttainmentOfMenarche: '',
        menstrualHistory: '',
        anySignificantDetails: '',
        vocationalTraining: '',
        occupationalHistory: '',
        employment: '',
        headControl: '',
        rolling: '',
        independentSitting: '',
        crawling: '',
        walking: '',
        bilateralHoldingOfToys: '',
        holdingSmallItems: '',
        scribblingWithCrayon: '',
        babbling: '',
        firstWords: '',
        twoWordsPhrases: '',
        sentences: '',
        smilesAtOthers: '',
        respondsToName: '',
        feedSelf: '',
        cognitive: '',
        motor: '',
        speechAndLanguage: '',
        social: '',
        significantMedicalIllness: '',
        negativeReactionToMedication: '',

    });

    const teachers = ["A", "B", "C"];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleConditionChange = (index, e) => {
        const { name, value } = e.target;
        const newConditions = formData.presentCondition.slice();
        newConditions[index] = { ...newConditions[index], [name]: value };
        setFormData({
            ...formData,
            presentCondition: newConditions,
        });
    };

    const addConditionRow = () => {
        setFormData({
            ...formData,
            presentCondition: [...formData.presentCondition, { description: '' }],
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        await axios.post('http://localhost:4000/updatestudentdetails', { formData }, {
            withCredentials: true
        })
            .then((res) => {
                console.log("success")
                console.log(formData)
                navigate("/admin");
            })
            .error((err) => { console.log(formData) })

    };

    return (
        <form onSubmit={handleSubmit} className={classes.registrationForm}>
            <div className={classes.title}>Student Details Form</div>
            <label className={classes.label}>
                User Name:
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={classes.textInput}
                />
            </label>
            <label className={classes.label}>
                Date:
                <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={classes.textInput}
                />
            </label>
            <label className={classes.label}>
                DOB:
                <input
                    type="text"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className={classes.textInput}
                />
            </label>
            <label className={classes.label}>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={classes.textInput}
                />
            </label>
            <label className={classes.label}>
                Sex:
                <input
                    type="text"
                    name="sex"
                    value={formData.sex}
                    onChange={handleChange}
                    className={classes.textInput}
                />
            </label>
            <label className={classes.label}>
                Informant:
                <input
                    type="text"
                    name="informant"
                    value={formData.informant}
                    onChange={handleChange}
                    className={classes.textInput}
                />
            </label>
            <label className={classes.label}>
                Education:
                <input
                    type="text"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className={classes.textInput}
                />
            </label>
            <label className={classes.label}>
                Refered by:
                <input
                    type="text"
                    name="referedby"
                    value={formData.referedby}
                    onChange={handleChange}
                    className={classes.textInput}
                />
            </label>
            <label className={classes.label}>
                Occupation:
                <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className={classes.textInput}
                />
            </label>
            <label className={classes.label}>
                Aadhar no:
                <input
                    type="text"
                    name="aadhar"
                    value={formData.aadhar}
                    onChange={handleChange}
                    className={classes.textInput}
                />
            </label>
            <label className={classes.label}>
                Payment Type:
                <input
                    type="text"
                    name="paymenttype"
                    value={formData.paymenttype}
                    onChange={handleChange}
                    className={classes.textInput}
                />
            </label>
            <label className={classes.label}>
                Mobile no:
                <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={classes.textInput}
                />
            </label>
            <label className={classes.label}>
                Purpose Visit:
                <input
                    type="text"
                    name="purposeVisit"
                    value={formData.purposeVisit}
                    onChange={handleChange}
                    className={classes.textInput}
                />
            </label>
            <label className={classes.label}>
                Previous Consultations and Treatment:
                <input
                    type="checkbox"
                    name="previousConsultations"
                    checked={formData.previousConsultations}
                    onChange={handleChange}
                    className={classes.checkboxInput}
                />
            </label>
            <label className={classes.label}>
                Nature of Consultations:
                <input
                    type="text"
                    name="natureOfConsultations"
                    value={formData.natureOfConsultations}
                    onChange={handleChange}
                    className={classes.textInput}
                />
            </label>
            <label className={classes.label}>
                Treatment Undergone:
                <input
                    type="checkbox"
                    name="treatmentUndergone"
                    checked={formData.treatmentUndergone}
                    onChange={handleChange}
                    className={classes.checkboxInput}
                />
            </label>
            <label className={classes.label}>
                Type of Treatment:
                <input
                    type="text"
                    name="typeOfTreatment"
                    value={formData.typeOfTreatment}
                    onChange={handleChange}
                    className={classes.textInput}
                />
            </label>
            <label className={classes.label}>
                Therapeutic:
                <input
                    type="text"
                    name="therapeutic"
                    value={formData.therapeutic}
                    onChange={handleChange}
                    className={classes.textInput}
                />
            </label>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>S.No</th>
                        <th className={classes.th}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.presentCondition.map((condition, index) => (
                        <tr key={index}>
                            <td className={classes.td}>{index + 1}</td>
                            <td className={classes.td}>
                                <input
                                    type="text"
                                    name="description"
                                    value={condition.description}
                                    onChange={(e) => handleConditionChange(index, e)}
                                    className={classes.textInput}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="button" onClick={addConditionRow} className={classes.addButton}>Add Row</button>
            <button type="submit" className={classes.button}>Submit</button>

            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>Record Verbatim</th>
                        <th className={classes.th}>On Set</th>
                        <th className={classes.th}>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.td}>Has dysmorphic features</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="hasDysmorphicFeatures"
                                value={formData.hasDysmorphicFeatures}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="hasDysmorphicFeaturesDuration"
                                value={formData.hasDysmorphicFeaturesDuration}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Small sized head</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="smallSizedHead"
                                value={formData.smallSizedHead}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="smallSizedHeadDuration"
                                value={formData.smallSizedHeadDuration}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Able to walk and run</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="ableToWalkAndRun"
                                value={formData.ableToWalkAndRun}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="ableToWalkAndRunDuration"
                                value={formData.ableToWalkAndRunDuration}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>No age appropriate comprehension and speech development</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="noAgeAppropriateComprehensionAndSpeechDevelopment"
                                value={formData.noAgeAppropriateComprehensionAndSpeechDevelopment}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="noAgeAppropriateComprehensionAndSpeechDevelopmentDuration"
                                value={formData.noAgeAppropriateComprehensionAndSpeechDevelopmentDuration}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Reaches, grasps and manipulates objects</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="reachesGraspsAndManipulatesObjects"
                                value={formData.reachesGraspsAndManipulatesObjects}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="reachesGraspsAndManipulatesObjectsDuration"
                                value={formData.reachesGraspsAndManipulatesObjectsDuration}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Emotionally attached to parents</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="emotionallyAttachedToParents"
                                value={formData.emotionallyAttachedToParents}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="emotionallyAttachedToParentsDuration"
                                value={formData.emotionallyAttachedToParentsDuration}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Has adequate eye contact and social smile</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="hasAdequateEyeContactAndSocialSmile"
                                value={formData.hasAdequateEyeContactAndSocialSmile}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="hasAdequateEyeContactAndSocialSmileDuration"
                                value={formData.hasAdequateEyeContactAndSocialSmileDuration}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Eats self</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="eatsSelf"
                                value={formData.eatsSelf}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="eatsSelfDuration"
                                value={formData.eatsSelfDuration}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Indicates toilet needs</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="indicatesToiletNeeds"
                                value={formData.indicatesToiletNeeds}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="indicatesToiletNeedsDuration"
                                value={formData.indicatesToiletNeedsDuration}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>S.No</th>
                        <th className={classes.th}>Sub Profile Name</th>
                        <th className={classes.th}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.td}>1</td>
                        <td className={classes.td}>Chromosomal Aberrations</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="chromosomalAberrations"
                                value={formData.chromosomalAberrations}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>2</td>
                        <td className={classes.td}>Rh incompatibility</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="rhIncompatibility"
                                value={formData.rhIncompatibility}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>3</td>
                        <td className={classes.td}>Genetic Aberrations</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="geneticAberrations"
                                value={formData.geneticAberrations}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>4</td>
                        <td className={classes.td}>Consanguinity</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="consanguinity"
                                value={formData.consanguinity}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>S.No</th>
                        <th className={classes.th}>Sub Profile Name</th>
                        <th className={classes.th}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.td}>1</td>
                        <td className={classes.td}>Threatened abortion</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="threatenedAbortion"
                                value={formData.threatenedAbortion}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>2</td>
                        <td className={classes.td}>Potentially harmful medication</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="harmfulMedication"
                                value={formData.harmfulMedication}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>3</td>
                        <td className={classes.td}>Antenatal Check Ups</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="antenatalCheckUps"
                                value={formData.antenatalCheckUps}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>4</td>
                        <td className={classes.td}>Significant Accidents/Injury</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="significantAccidents"
                                value={formData.significantAccidents}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>5</td>
                        <td className={classes.td}>Infections</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="infections"
                                value={formData.infections}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>6</td>
                        <td className={classes.td}>Pregnancy</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="pregnancy"
                                value={formData.pregnancy}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>7</td>
                        <td className={classes.td}>Attempted abortion</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="attemptedAbortion"
                                value={formData.attemptedAbortion}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>8</td>
                        <td className={classes.td}>Nutrition</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="nutrition"
                                value={formData.nutrition}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>9</td>
                        <td className={classes.td}>Psychological Trauma</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="psychologicalTrauma"
                                value={formData.psychologicalTrauma}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>10</td>
                        <td className={classes.td}>Amniotic Fluid</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="amnioticFluid"
                                value={formData.amnioticFluid}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>11</td>
                        <td className={classes.td}>Irradiation</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="irradiation"
                                value={formData.irradiation}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>12</td>
                        <td className={classes.td}>Nicotine</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="nicotine"
                                value={formData.nicotine}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>13</td>
                        <td className={classes.td}>Alcohol</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="alcohol"
                                value={formData.alcohol}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>14</td>
                        <td className={classes.td}>Age at conception</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="ageAtConception"
                                value={formData.ageAtConception}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>15</td>
                        <td className={classes.td}>Hypertension</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="hypertension"
                                value={formData.hypertension}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>16</td>
                        <td className={classes.td}>Diabetes</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="diabetes"
                                value={formData.diabetes}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>17</td>
                        <td className={classes.td}>Jaundice</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="jaundice"
                                value={formData.jaundice}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>18</td>
                        <td className={classes.td}>Fetal movements</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="fetalMovements"
                                value={formData.fetalMovements}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>19</td>
                        <td className={classes.td}>Bleeding during late Pregnancy</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="bleedingLatePregnancy"
                                value={formData.bleedingLatePregnancy}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>S.No</th>
                        <th className={classes.th}>Sub Profile Name</th>
                        <th className={classes.th}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.td}>1</td>
                        <td className={classes.td}>Labour Duration</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="labourDuration"
                                value={formData.labourDuration}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>2</td>
                        <td className={classes.td}>Prolapsed cord</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="prolapsedCord"
                                value={formData.prolapsedCord}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>3</td>
                        <td className={classes.td}>Cord Around Neck</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="cordAroundNeck"
                                value={formData.cordAroundNeck}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>4</td>
                        <td className={classes.td}>Multiple Pregnancies</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="multiplePregnancies"
                                value={formData.multiplePregnancies}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>5</td>
                        <td className={classes.td}>Feeding problems</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="feedingProblems"
                                value={formData.feedingProblems}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>6</td>
                        <td className={classes.td}>Convulsions</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="convulsions"
                                value={formData.convulsions}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>7</td>
                        <td className={classes.td}>Color of the baby</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="colorOfTheBaby"
                                value={formData.colorOfTheBaby}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>8</td>
                        <td className={classes.td}>Significant Injury</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="significantInjury"
                                value={formData.significantInjury}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>9</td>
                        <td className={classes.td}>Delivery place</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="deliveryPlace"
                                value={formData.deliveryPlace}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>10</td>
                        <td className={classes.td}>Term</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="term"
                                value={formData.term}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>11</td>
                        <td className={classes.td}>Delivery type</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="deliveryType"
                                value={formData.deliveryType}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>12</td>
                        <td className={classes.td}>Abnormal Presentation</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="abnormalPresentation"
                                value={formData.abnormalPresentation}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>13</td>
                        <td className={classes.td}>Respiratory distress</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="respiratoryDistress"
                                value={formData.respiratoryDistress}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>14</td>
                        <td className={classes.td}>Jaundice</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="jaundice"
                                value={formData.jaundice}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>15</td>
                        <td className={classes.td}>Delivery Conducted By</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="deliveryConductedBy"
                                value={formData.deliveryConductedBy}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>16</td>
                        <td className={classes.td}>Labour induction</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="labourInduction"
                                value={formData.labourInduction}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>17</td>
                        <td className={classes.td}>Birth cry</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="birthCry"
                                value={formData.birthCry}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>18</td>
                        <td className={classes.td}>Infections</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="infections"
                                value={formData.infections}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>19</td>
                        <td className={classes.td}>Seperation from Mother immediately after delivery</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="seperationFromMother"
                                value={formData.seperationFromMother}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>S.No</th>
                        <th className={classes.th}>Sub Profile Name</th>
                        <th className={classes.th}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.td}>1</td>
                        <td className={classes.td}>Jaundice</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="jaundice"
                                value={formData.jaundice}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>2</td>
                        <td className={classes.td}>Thyroid Dysfunctions</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="thyroidDysfunctions"
                                value={formData.thyroidDysfunctions}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>3</td>
                        <td className={classes.td}>Nutritional disorders</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="nutritionalDisorders"
                                value={formData.nutritionalDisorders}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>4</td>
                        <td className={classes.td}>Convulsions</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="convulsions"
                                value={formData.convulsions}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>5</td>
                        <td className={classes.td}>Infections</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="infections"
                                value={formData.infections}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>6</td>
                        <td className={classes.td}>Significant head injury</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="significantHeadInjury"
                                value={formData.significantHeadInjury}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>S.No</th>
                        <th className={classes.th}>Sub Profile Name</th>
                        <th className={classes.th}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.td}>1</td>
                        <td className={classes.td}>Type of Family</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="typeOfFamily"
                                value={formData.typeOfFamily}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>2</td>
                        <td className={classes.td}>Mental retardation</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="mentalRetardation"
                                value={formData.mentalRetardation}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>3</td>
                        <td className={classes.td}>Genogram</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="genogran"
                                value={formData.genogran}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>4</td>
                        <td className={classes.td}>Consanguinity</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="consanguinity"
                                value={formData.consanguinity}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>5</td>
                        <td className={classes.td}>Seizures Or Convulsions</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="seizuresOrConvulsions"
                                value={formData.seizuresOrConvulsions}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>6</td>
                        <td className={classes.td}>Hearing problems</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="hearingProblems"
                                value={formData.hearingProblems}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>7</td>
                        <td className={classes.td}>Speech problems</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="speechProblems"
                                value={formData.speechProblems}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>8</td>
                        <td className={classes.td}>Mental Illness</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="mentalIllness"
                                value={formData.mentalIllness}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>9</td>
                        <td className={classes.td}>Autism Or Spectrum Disorder</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="autismOrSpectrumDisorder"
                                value={formData.autismOrSpectrumDisorder}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>10</td>
                        <td className={classes.td}>Visual problems</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="visualProblems"
                                value={formData.visualProblems}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>11</td>
                        <td className={classes.td}>Locomotor problem</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="locomotorProblem"
                                value={formData.locomotorProblem}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>12</td>
                        <td className={classes.td}>Any Family history of delay/disability/disorder/disease/deficiency</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="anyFamilyHistory"
                                value={formData.anyFamilyHistory}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>13</td>
                        <td className={classes.td}>Learning disabilities</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="learningDisabilities"
                                value={formData.learningDisabilities}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>S.No</th>
                        <th className={classes.th}>Sub Profile Name</th>
                        <th className={classes.th}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.td}>1</td>
                        <td className={classes.td}>Family Involvement in</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="familyInvolvement"
                                value={formData.familyInvolvement}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>2</td>
                        <td className={classes.td}>Positive Issues with neighborhood because of the client</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="positiveIssues"
                                value={formData.positiveIssues}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>3</td>
                        <td className={classes.td}>Neighbourhood Participation</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="neighbourhoodParticipation"
                                value={formData.neighbourhoodParticipation}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>4</td>
                        <td className={classes.td}>Personal needs of the client</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="personalNeedsOfTheClient"
                                value={formData.personalNeedsOfTheClient}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>5</td>
                        <td className={classes.td}>Visits to the family by others</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="visitsToTheFamilyByOthers"
                                value={formData.visitsToTheFamilyByOthers}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>6</td>
                        <td className={classes.td}>Family's visits outside</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="familyVisitOutside"
                                value={formData.familyVisitOutside}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>7</td>
                        <td className={classes.td}>Play and Leisure Time Activities</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="playAndLeisureTimeActivities"
                                value={formData.playAndLeisureTimeActivities}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>8</td>
                        <td className={classes.td}>Educational activities</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="educationalActivities"
                                value={formData.educationalActivities}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>9</td>
                        <td className={classes.td}>Support of extended family</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="supportOfExtendedFamily"
                                value={formData.supportOfExtendedFamily}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>10</td>
                        <td className={classes.td}>Negative Issues with neighbourhood because of the client</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="negativeIssuesWithNeighbour"
                                value={formData.negativeIssuesWithNeighbour}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>S.No</th>
                        <th className={classes.th}>Sub Profile Name</th>
                        <th className={classes.th}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.td}>1</td>
                        <td className={classes.td}>Discontinued School</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="discontinuedSchool"
                                value={formData.discontinuedSchool}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>2</td>
                        <td className={classes.td}>Educational History</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="educationalHistory"
                                value={formData.educationalHistory}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>3</td>
                        <td className={classes.td}>Teachers report/School report(in case of non avail)</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="teacherReport"
                                value={formData.teacherReport}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>4</td>
                        <td className={classes.td}>Overall Performance</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="overallPerformance"
                                value={formData.overallPerformance}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>5</td>
                        <td className={classes.td}>Type of Schooling</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="typeOfSchooling"
                                value={formData.typeOfSchooling}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>6</td>
                        <td className={classes.td}>If Yes Reason for discontinuing Schooling</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="ReasonForDiscontinuingSchooling "
                                value={formData.ReasonForDiscontinuingSchooling}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>7</td>
                        <td className={classes.td}>Age Of Admission into school(in Years)</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="ageOfAdmission"
                                value={formData.ageOfAdmission}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>S.No</th>
                        <th className={classes.th}>Sub Profile Name</th>
                        <th className={classes.th}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.td}>1</td>
                        <td className={classes.td}>Involvement in Play</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="involvementInPlay"
                                value={formData.involvementInPlay}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>2</td>
                        <td className={classes.td}>Observes others playing</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="observesOthersPlaying"
                                value={formData.observesOthersPlaying}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>3</td>
                        <td className={classes.td}>Play Behaviour</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="playBehaviour"
                                value={formData.playBehaviour}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>S.No</th>
                        <th className={classes.th}>Sub Profile Name</th>
                        <th className={classes.th}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.td}>1</td>
                        <td className={classes.td}>Periodicity</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="periodicity"
                                value={formData.periodicity}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>2</td>
                        <td className={classes.td}>Age of Attainment of menarche</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="ageofAttainmentOfMenarche"
                                value={formData.ageofAttainmentOfMenarche}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>3</td>
                        <td className={classes.td}>Attained Menarche</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="attainedMenarche"
                                value={formData.attainedMenarche}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>4</td>
                        <td className={classes.td}>Menstrual History</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="menstrualHistory"
                                value={formData.menstrualHistory}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>5</td>
                        <td className={classes.td}>Any Significant Details</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="anySignificantDetails"
                                value={formData.anySignificantDetails}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>S.No</th>
                        <th className={classes.th}>Sub Profile Name</th>
                        <th className={classes.th}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.td}>1</td>
                        <td className={classes.td}>Vocational training</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="vocationalTraining"
                                value={formData.vocationalTraining}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>2</td>
                        <td className={classes.td}>Occupational History(Client)</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="occupationalHistory"
                                value={formData.occupationalHistory}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>3</td>
                        <td className={classes.td}>Employment</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="employment"
                                value={formData.employment}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>S.No</th>
                        <th className={classes.th}>Sub Profile Name</th>
                        <th className={classes.th}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.td}>1</td>
                        <td className={classes.td}>Head Control:(3-5 Months)</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="headControl"
                                value={formData.headControl}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>2</td>
                        <td className={classes.td}>Rolling:(3-5 Months)</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="rolling"
                                value={formData.rolling}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>3</td>
                        <td className={classes.td}>Independent Sitting:(6-8 Months)</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="independentSitting"
                                value={formData.independentSitting}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>4</td>
                        <td className={classes.td}>Crawling:(6-8 Months)</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="crawling"
                                value={formData.crawling}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>5</td>
                        <td className={classes.td}>Walking:(11-14 Months)</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="walking"
                                value={formData.walking}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>S.No</th>
                        <th className={classes.th}>Sub Profile Name</th>
                        <th className={classes.th}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.td}>1</td>
                        <td className={classes.td}>Bilateral Holding Of Toys(3-6 Months)</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="bilateralHoldingOfToys"
                                value={formData.bilateralHoldingOfToys}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>2</td>
                        <td className={classes.td}>Holding small items with finger and thumb(6-9 Months)</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="holdingSmallItems"
                                value={formData.holdingSmallItems}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>3</td>
                        <td className={classes.td}>Scribbling with a crayon(12-18 Months)</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="scribblingWithCrayon"
                                value={formData.scribblingWithCrayon}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>S.No</th>
                        <th className={classes.th}>Sub Profile Name</th>
                        <th className={classes.th}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.td}>1</td>
                        <td className={classes.td}>Babbling(4-8 Months)</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="babbling"
                                value={formData.babbling}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>2</td>
                        <td className={classes.td}>First Words(11-12 Months)</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="firstWords"
                                value={formData.firstWords}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>3</td>
                        <td className={classes.td}>Two words phrases(18-24 Months)</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="twoWordsPhrases"
                                value={formData.twoWordsPhrases}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>4</td>
                        <td className={classes.td}>Sentences(2yrs 6 months-3 years)</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="sentences"
                                value={formData.sentences}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>S.No</th>
                        <th className={classes.th}>Sub Profile Name</th>
                        <th className={classes.th}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.td}>1</td>
                        <td className={classes.td}>Smiles at others(2-4 Months)</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="smilesAtOthers"
                                value={formData.smilesAtOthers}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>2</td>
                        <td className={classes.td}>Responds to Name(7-12 Months)</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="respondsToName"
                                value={formData.respondsToName}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>3</td>
                        <td className={classes.td}>Feeds Self(3-4 years)</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="feedSelf"
                                value={formData.feedSelf}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>S.No</th>
                        <th className={classes.th}>Sub Profile Name</th>
                        <th className={classes.th}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.td}>1</td>
                        <td className={classes.td}>Cognitive</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="cognitive"
                                value={formData.cognitive}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>2</td>
                        <td className={classes.td}>Motor</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="motor"
                                value={formData.motor}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>3</td>
                        <td className={classes.td}>Speech And Language</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="speechAndLanguage"
                                value={formData.speechAndLanguage}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>4</td>
                        <td className={classes.td}>Social</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="social"
                                value={formData.social}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>5</td>
                        <td className={classes.td}>Significant Medical illness</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="significantMedicalIllness"
                                value={formData.significantMedicalIllness}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>6</td>
                        <td className={classes.td}>Significant Surgical illness</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="significantSurgicalIllness"
                                value={formData.significantSurgicalIllness}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>7</td>
                        <td className={classes.td}>Significant Psycological illness</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="significantPsycologicalIllness"
                                value={formData.significantPsycologicalIllness}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>8</td>
                        <td className={classes.td}>Any negative reactions/allergy to medication?</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="negativeReactionToMedication"
                                value={formData.negativeReactionToMedication}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>9</td>
                        <td className={classes.td}>Autism Or Spectrum Disorder</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="autismOrSpectrumDisorder"
                                value={formData.autismOrSpectrumDisorder}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>10</td>
                        <td className={classes.td}>Visual problems</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="visualProblems"
                                value={formData.visualProblems}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>11</td>
                        <td className={classes.td}>Locomotor problem</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="locomotorProblem"
                                value={formData.locomotorProblem}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>12</td>
                        <td className={classes.td}>Any Family history of delay/disability/disorder/disease/deficiency</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="anyFamilyHistory"
                                value={formData.anyFamilyHistory}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.td}>13</td>
                        <td className={classes.td}>Learning disabilities</td>
                        <td className={classes.td}>
                            <input
                                type="text"
                                name="learningDisabilities"
                                value={formData.learningDisabilities}
                                onChange={handleChange}
                                className={classes.textInput}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={classes.tableContainer}>
                <div className={classes.tableTitle}>Educational Details</div>
                <table className={classes.table}>
                    <tbody>
                        <tr>
                            <td className={classes.th}>Year</td>
                            <td>
                                <input
                                    className={classes.textInput}
                                    type="text"
                                    name="year"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.th}>Term</td>
                            <td>
                                <input
                                    className={classes.textInput}
                                    type="text"
                                    name="term"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.th}>Section</td>
                            <td>
                                <input
                                    className={classes.textInput}
                                    type="text"
                                    name="section"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <td className={classes.th}>Allocate Teacher</td>
                        <td>
                            <select
                                className={classes.selectInput}
                                name="teacher"
                                value={formData.teacher}
                                onChange={handleChange}
                            >
                                <option value="">Select Teacher</option>
                                {teachers.map((teacher, index) => (
                                    <option key={index} value={teacher}>{teacher}</option>
                                ))}
                            </select>
                        </td>
                    </tbody>
                </table>
            </div>
            <br></br>
            <div>
                <button className={classes.button} type="submit">save</button>
            </div>
        </form>
    );
};

export default Profile;
