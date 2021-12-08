//subArray Methods

let fruits = ["apple", "banana", "carrot"]

//slice(ตำแหน่ง, จำนวนที่จะลบจากตำแหน่ง, ตัวที่จะเพิ่ม)
fruits.splice(1,0,'watermelon');
console.log(fruits) //[ 'apple', 'watermelon', 'banana', 'carrot' ]

//splice(ตำแหน่ง, จำนวนที่ลบจากตำแหน่ง)
fruits.splice(1,1);
console.log(fruits) //[ 'apple', 'banana', 'carrot' ]

//fill
const array6 = [1, 2, 3, 4];
//ใส่เลข 0 ตั้งแต่ตำแหน่งที่ 2 - 4
console.log(array6.fill(0, 2, 4)); //[1,2,0,0]
//ใส่เลข 5 ตั้งแต่ตำแหน่งที่ 1
console.log(array6.fill(5, 1)); //[1,5,5,5]
//ใส่เลข 6 ในทุกตำแหน่ง
console.log(array6.fill(6)); //[6,6,6,6]
