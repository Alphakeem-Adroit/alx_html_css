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

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const mergeMe = [...array1,...array2];
// console.log(mergeMe);

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3, 4, 5));

// function greet(...names) {
//     console.log("Hello, " + names);
// }

// greet("Tunde", "Akeem", "Busari");

// const person = {
//     name: "Adroit",
//     age: 27,
//     profession: "Software Developer"
// }
// const {name, age, profession} = person;
// console.log(`I am ${name}, a ${age} years old ${profession}.`);

// const nums = [1, 2, 3, 4, 5];
// nums.push(6);
// console.log(nums);
// nums.shift();
// console.log(nums);

// function filterEvenNumbers(...numbers) {
//     const evenNumbers = [];
//     const oddNumbers = [];
//     for (const num of numbers) {
//         if (num % 2 === 0) {
//             evenNumbers.push(num);
//         } else {
//             oddNumbers.push(num);
//         }
//     }
//     return (`Even numbers: ${evenNumbers}, Odd Numbers: ${oddNumbers}`);
// }
// console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// function greet(name) {
//     console.log("Hello, " + name);
// }

// function userInput(callback) {
//     const name = "Abdulhakeem";
//     callback(name);
// }

// userInput(greet);

// function sayHello() {
//     console.log("Hello!");
// }

// function runFunction(callback) {
//     callback();
// };

// runFunction(sayHello);

// function printName(name) {
//     console.log("My name is " + name);
// }

// function getName(callback) {
//     const name = "Alphakeem";
//     callback(name);
// }

// getName(printName);

// function timing(){
//     console.log("Done waiting");
// }

// function waitAndRun(callback) {
//     setTimeout(() => {
//         callback();
//     }, 2000);
// }

// waitAndRun(timing);

// function processNumbers(numbers, callback) {
//     for (let num of numbers) {
//         callback(num);
//     }
// }

// processNumbers([1, 2, 3], function(num){
//     console.log(num * 2);
// })

// function walkDog() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You walk the dog 🐕");
//         }, 1500);
//     });
// }

// function cleanKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You clean the kitchen 🧼")
//         }, 2500)
//     });
// }

// function takeTrash() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You take out the trash 🗑️");
//         }, 500)
//     });
// }

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//     .then(value => {console.log(value); return takeTrash()})
//     .then(value => {console.log(value); console.log("All tasks completed ✅")})

// fetchData().then(
//     data => {
//         console.log(data);
//     }
// ).catch(
//     error => {
//         console.error(`Error: ${error}`);
//     }
// )

// function getBoredActivity() {
//     fetch('https://bored-api.appbrewery.com/activity')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`Network error: ${response.status}`)
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(`Activity: ${data.activity}`);
//         console.log('Full response: ', data);
//     })
//     .catch(error => {
//         console.error(`Fetch failed: ${error}`);
//     })
// };

// async function getBoredActivityAsync() {
//   try {
//     const response = await fetch('https://bored-api.appbrewery.com/activity');
//     if (!response.ok) throw new Error(`HTTP ${response.status}`);
//     const data = await response.json();
//     console.log('Random activity suggestion:', data.activity);
//   } catch (err) {
//     console.error('Fetch failed:', err.message);
//   }
// }

// function getBoredActivity() {
//   fetch('https://bored-api.appbrewery.com/random')
//     .then(response => {
//       if (!response.ok) {
//         // handle non-2xx HTTP responses
//         throw new Error(`Network response was not ok (status ${response.status})`);
//       }
//       return response.json(); // parse JSON body
//     })
//     .then(data => {
//       // The API returns an object with fields like "activity", "type", "participants", etc.
//       console.log('Random activity suggestion:', data.activity);
//       // Optional: log the whole object if you want more info
//       console.log('Full response:', data);
//     })
//     .catch(error => {
//       // handle network or parsing errors
//       console.error('Fetch failed:', error.message);
//     });
// }

// call the function
// getBoredActivity();


// getBoredActivityAsync();


// getBoredActivity();

// async function getBoredActivity(callback) {
//   try {
//     const response = await fetch('https://bored-api.appbrewery.com/random');

//     if (!response.ok) {
//       throw new Error(`Network error: ${response.status}`);
//     }

//     const data = await response.json();

//     // Call the callback with the activity text
//     callback(data.activity);

//   } catch (error) {
//     console.error('Fetch failed:', error.message);
//   }
// }

// // Callback function
// function logActivity(activity) {
//   console.log("Activity from callback:", activity);
// }

// // Call function with callback
// getBoredActivity(logActivity);
