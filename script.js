// Complete 30 days JavaScript Challenge Day 1 was started Basics are skiped 
// Day 1

// Arrow functions

// Let's learn with example
// Basics Arrow function Example Question 

function greet(name){
    return "Hello Buddy!";
} 

// Arrow Version

const greetArrow = () => "Hello Buddy!";

// with parameters

const add = (a,b) => a + b;
console.log(add(10,12))

// with muiltiple codes and line ( needs Return )

const multiply = (a,b) => {
    const result = a * b;
    return result;
}
console.log(multiply(10,50));

// single parameter 

const square = x => x * x;
console.log(square(10));

// Day 1 Practice Questions

// Step 1: Arrow Functions

// convert all these traditional funcitions into arrow functions

// function sayHello(name) {
//   return "Hello " + name;
// }

// function isEven(num) {
//   return num % 2 === 0;
// }

// function double(num) {
//   return num * 2;
// }

// function area(length, width) {
//   return length * width;
// }

// function greetUser(firstName, lastName) {
//   return `Welcome ${firstName} ${lastName}`;
// }

//  Q1.

let sayHello = (name) => {
    return "hello " + name;
}
console.log(sayHello("Aman"));

// Q2.

let isEven = (num) => {
    if (num % 2 === 0){
     console.log("is Even");
    } else {
     console.log("is Odd");
    }
}
console.log(isEven(20));

// Q3.

let double = (num) => {
    return num * num;
}
console.log(double(5, "number after double"));

// Q4. 

let area = (length, width) => {
    return length * width;
}
console.log(area(3, 10, "final area after calculation"));

// Q5.

let greetUser  = (firstName, lastName) => {
    return `welcome ${firstName} ${lastName}`;
}
console.log(greetUser("Aman", "Hussain"));

//  Step 2: forEach() Loop

// Example Question with array

const fruits = ["apple", "banana", "mango"];

fruits.forEach((fruit, index) => {
  console.log(`${index + 1}: ${fruit}`);
});

// with Numbers

const numbers = [1, 2, 3, 4];

numbers.forEach(num => {
  console.log(num * 2);
});

// with object array

const users = [
  { name: "Aman", age: 20 },
  { name: "Zara", age: 22 },
];

users.forEach(user => {
  console.log(user.name);
});


// Practice tasks

// 1. Ek students array banao (5 names)

// 2. forEach() ka use karke sabko console me print karo

// 3. Ek numbers array banao, aur sabhi ka square print karo

// 4. Ek array of objects banao (e.g. { name, score }), aur unka naam aur score print karo

// Q6.

let students = ["Aman", "Sumit", "Sameer", "Aashish", "Amaan"];

// Q6.

students.forEach(students => {
    console.log(students);
})

// Q7.

let digits = [1,2,3,4,5];
digits.forEach(digits => console.log(digits * digits))

// Q8.

let game = [
    { name: "Aman", score: 100 },
    { name: "Sameer", score: 80 }
];
game.forEach(game => {
    console.log(game);
})

//  Step 3: Basic DOM Selection Practice

// HTML and JS Practice Example

const info = document.getElementById("info");

  function changeText() {
    info.textContent = "hello!";
    info.style.color = "red";
    alert("i am Batman");
}