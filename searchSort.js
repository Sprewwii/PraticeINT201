//searching and sorting method

//indexOf() เอาค่า index
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));//1
//เริ่มจาก index2
console.log(beasts.indexOf('bison', 2)); //4
console.log(beasts.indexOf('giraffe')); //-1


//include() ดูว่ามีตัวนั้นใน array มั้ย
const array1 = [1, 2, 3];
console.log(array1.includes(2)); //true

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); //true
console.log(pets.includes('at')); //false


//sort() เรียงลำดับตามค่าหน้าสุด
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); //["Dec", "Feb", "Jan", "March"]

const array3 = [1, 30, 4, 21, 100000, 100001, 2000];
array3.sort();
console.log(array3); //[1, 100000, 21, 30, 4]


//reverse()
const array2 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(array2.reduce(reducer)); //10 (1+2+3+4)
console.log(array2.reduce(reducer, 5)); //15 (5+1+2+3+4)