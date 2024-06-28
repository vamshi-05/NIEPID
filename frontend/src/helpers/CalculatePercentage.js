


export default calculatePercentage = async(tests)=>{
        let totalyes = 0
        tests.forEach((test)=>{
                if(test.answer == 'YES'){
                    totalyes +=1
                }
        })
        return totalyes/tests.length
}