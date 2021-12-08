//stack and queue method

//push เอามาต่อตัวท้ายสุด
let fruits = ["apple", "banana", "carrot"];
fruits.push("watermelon")
console.log(fruits) //[ 'apple', 'banana', 'carrot', 'watermelon' ]

//pop เอาตัวท้ายสุด
fruits.pop()
console.log(fruits) //[ 'apple', 'banana', 'carrot' ]

//unshift ใส่ข้อมูลในตำแหน่งแรกสุด
fruits.unshift("berry")
console.log(fruits) //[ 'berry', 'apple', 'banana', 'carrot' ]

//shift เอาข้อมูลตัวแรกสุดออก
fruits.shift()
console.log(fruits) //[ 'apple', 'banana', 'carrot' ]