const studentScoresRoom1 = [12, 40, 67, 80, 100, 15, 40, 78, 75, 80]
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100]
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67]
const keyRoom = "Room ";
let countFunc = 0;
let resultScore = [];

const atLeastFive = (score, callback) => {
    const sum = score.filter((check) => check > 70)
    countFunc++
    const result = { 
        roomID : countFunc,
        score : score,
        passScore : sum,
        studentPass : sum.length,
    };
    callback(sum)
    resultScore.push(result)
}

const checkPass = (score) => {
    if(score.length >= 5){
    console.log(`${keyRoom + countFunc} : Passed!`)
    }else console.log(`${keyRoom + countFunc} : Not Passed!`)
}

atLeastFive(studentScoresRoom1, checkPass)
atLeastFive(studentScoresRoom2, checkPass)
atLeastFive(studentScoresRoom3, checkPass)
console.log(resultScore)