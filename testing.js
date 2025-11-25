// const obj = {
//     name: "Abdulhakeem",
//     age: 25,
//     country: "Nigeria",
//     occupation: "Software Engineer"
// }
// console.log(`${obj.name}, ${obj.age}, who lives in ${obj.country} is a ${obj.occupation}`);


// function add(a, b) {
//     return a + b;
// }
// console.log(add(5,10));


// const add = (a,b) => a + b;
// console.log(add(5,19));

// const numbers = [1, 2, 3, 4];
// const [first, second, third, fourth] = numbers 
// console.log(first, second, third, fourth);

// const obj = {
//     name: ["TUnde", "Akeem", "Busari"],
//     age: [20, 25, 19]
// }
// const {name, age} = obj;
// console.log(name[1],age[2]);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergeMe = [...array1,...array2];
console.log(mergeMe);
