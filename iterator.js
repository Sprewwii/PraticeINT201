//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//array iterator method ทุกตัว

//forEach1 เอาค่าใน array1 มาแสดงผล
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element)); // a b c

//forEach2 เอาตัวที่ผ่านมานับจำนวน
let scores = [82, 75, 48, 64, 36];
let passedCount = 0;
scores.forEach((score) => {
    if(score >= 50) passedCount++;
});
console.log(passedCount); //3

//-------------------------------------------------------------

//map1 เปลี่ยนค่าทั้งหมดให้เป็นอีกค่า
const array2 = [1, 4, 9, 16];
const map1 = array2.map(x => x * 2);
console.log(map1); //[2,8,18,32]

//map2
let passFailScores = scores.map((score) => {
    if(score >= 50) {
        return "passed"
    } return "failed"
});
console.log(passFailScores); //[ 'passed', 'passed', 'failed', 'passed', 'failed' ]

//-------------------------------------------------------------

//filter1 เอาแค่บางค่าที่ต้องการ
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result); //[ 'exuberant', 'destruction', 'present' ]

//filter2
let passScore = scores.filter((score) => {
    if(score >= 50) return score;
})
console.log(passScore); //[ 82, 75, 64 ]

//-------------------------------------------------------------

//find1 หาตัวที่ตรงเงื่อนไขแต่เอามาแค่ 1 ตัวเท่านั้น + findIndex(เอาช่อง index ของข้อมูลมาแทน)
let failedScore = scores.find((score) => {
    return score < 50
})
console.log(failedScore); //เอา 48 มา เพราะเป็นตัวแรกสุดที่ตรงกรณี

let failedScoreIndex = scores.findIndex((score) => {
    return score < 50
})
console.log(failedScoreIndex); //48 อยู่ใน index ช่องที่ 2

//find2
const array3 = [5, 12, 8, 130, 44];
const found = array3.find(element => element > 10);
console.log(found); //12
const foundIndex = array3.findIndex(element => element > 10);
console.log(foundIndex); //1

//-------------------------------------------------------------

//every1 ถ้าทุกข้อมูลตรงตามเงื่อนไขจะแสดงผลออกมาเป็น true
const isBelowThreshold = (currentValue) => currentValue < 40;
const array4 = [1, 30, 39, 29, 10, 13];
console.log(array4.every(isBelowThreshold)); //true

//every2
let everyonePassed = scores.every((score) => {
    return score >= 50
})
console.log(everyonePassed); //false

//-------------------------------------------------------------

//some1 มีแค่บางคนที่ตรงตามเงื่อนไขก็ true
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even)); //true

//some2
let someonePassed = scores.every((score) => {
    return score >= 50
})
console.log(someonePassed); //false

//-------------------------------------------------------------

//reduce1 เอาค่าทั้งหมดมารวมกัน (ค่าที่รวมกันในแต่ละรอบ, parameterที่เอาค่ามาเก็บ)
const array5 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(array5.reduce(reducer)); //10
console.log(array5.reduce(reducer, 5)); //15

//reduce2
let sumScore = scores.reduce((sum, score) => {
    return sum + score;
})
console.log(sumScore) //305

