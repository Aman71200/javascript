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

// Day 2 of javaScript 30 Days Challenge

// Q1. Multiply all numbers by 2 and print them

const counting = [2, 4, 6, 8];
let totalCount = 0;  
counting.forEach(counting => {
    totalCount = counting * 2;
    console.log(totalCount);
})

//  Q2. Print names of all students

const collegeStudents = [
  { name: "Amit", class: 10 },
  { name: "Priya", class: 12 },
  { name: "Ravi", class: 11 }
];
collegeStudents.forEach(collegeStudents => {
    console.log(`Name : ${collegeStudents.name}`);
})

//  Q3. Print only even numbers using forEach

const nums = [3, 6, 7, 2, 9, 12];
const evenNumber = nums => nums % 2 === 0; 
nums.forEach(nums => {
    if(evenNumber(nums)){
        console.log(nums);
    }
})

// Traditional Loops — While & Do...While

// Example 1: while loop basic

// let i = 0;

// while (i < 5) {
//   console.log("i is: ", i);
//   i++;
// }

// Example 2: Print even numbers using while

// let n = 2;

// while (n <= 10) {
//   if (n % 2 === 0) {
//     console.log(n);
//   }
//   n++;
// }

// Example 3: do...while runs at least once

// let x = 10;

// do {
//   console.log("Running once at least, x is:", x);
//   x++;
// } while (x < 5);

// Q1. Print numbers from 1 to 5 using while loop

let count = 0;
while(count < 5){
    console.log(count);
    count++;
}
// Q2. Print square of numbers from 1 to 4 using while loop
// (Hint: use i * i)

let squareNum = 0;

while(squareNum < 5){
    console.log(squareNum * squareNum);
    squareNum++;
}

// Q3. do...while se ek baar toh "Login Attempted" print karna hai chahe isLoggedIn = false ho

let isLoggedIn = false;

do {
  console.log("Login Attempted");
} while (isLoggedIn);

// WHILE LOOP PRACTICE (Q1–Q6)

// Q1. Print numbers from 5 to 1 (reverse)

let numm = 5;
while(numm >= 1){
    console.log(`numbers in reversed ${numm}`);
    numm--;
}

// Q2. Print first 5 odd numbers

let nunn = 0;

while(nunn < 10){
    if(nunn % 2 !== 0){
        console.log(nunn);
    }
    nunn++;
}

// Q3. Sum of numbers from 1 to 10 using while

let sum = 0; 

while(sum < 10){
    console.log(sum + sum);
    sum++;
}

// Q4. Count digits of a number (e.g., 1234 → 4)

let countDigits = 0;

while(countDigits < 10){
    console.log(countDigits.length);
    countDigits++;
}

// Q5. Print table of 7 (7, 14, 21...70)

let tableSeven = 7; 
let numSeven = 1;

while(numSeven <= 10){
       let result = tableSeven * numSeven;
       console.log(`${result}`);
    numSeven++;
}

// solve by googling understanding the logic how to write the code i want then i will try myself

// Q6. Loop through array and print only string values

let items = [1, "pen", true, "book", null];
let check = 0;

while(check < items.length){
    if(typeof items[check] === 'string'){
        console.log(items[check]);
    }
    check++;
}

// solve by googling understanding the logic how to write the code i want then i will try myself

// DO...WHILE PRACTICE (Q7–Q10)

// Q7. Print “Processing…” 3 times

let print = 0;

do{
    console.log("Processing...");
    print++;
} while(print < 3);

// Q8. Ask for password until it’s correct
// (Hint: set let input = "", and run loop until input === "admin" – simulate with fixed string for now)

let input = ""; // user input simulation
let correctPassword = "admin"; // correct one
let attempts = 0; // count attempts

do { 
    console.log("Login Attempet " + (attempts + 1));
    input = "wrong";
    attempts++;

    if(attempts === 3){
        input = "admin";
    }

} while (input !== correctPassword);

console.log("Access Granted!");

// i dont understand the question if i undertad but i dont able to make code thats why i skiped it buddy when you teach me how to solve it then i will solve it by myself

// Q9. Decrease a number from 10 to 1 using do...while

let decrease = 10;

do{
    console.log(`number in decreasing order ${decrease}`);
    decrease--;
} while(decrease >= 1);

// Q10. Print numbers from 1 to 5 using do...while

let pnum = 1;

do{
    console.log(pnum);
    pnum++;
} while (pnum <= 5);

//  Let's Start — Array.prototype.map() Method

// Step 1: map() – 10 Practice Questions

// Example code
let products = [
  { name: "Shirt", price: 500 },
  { name: "Pant", price: 800 },
  { name: "Socks", price: 100 }
];

// 1. Discounted price (map)
let discounted = products.map(p => ({ ...p, price: p.price * 0.9 }));
console.log(discounted, "price after discount");

// 2. Only products above 200 (filter)
let premium = discounted.filter(p => p.price > 200);
console.log(premium, "produts above 200");

// 3. Total bill (reduce)
let total = premium.reduce((acc, item) => acc + item.price, 0);
console.log(total, "ypur total price");

// Q1. Multiply all numbers by 2

let numArr = [1,2,3,4,5];
let multipleArr = numArr.map(num => num * 2);
console.log(multipleArr);

// Q2. Convert array of numbers to their squares

let convertArr = numArr.map(num => num * num);
console.log(convertArr);

// Q3. Convert array of strings to uppercase

let strArr = ["aman", "sumit", "sameer", "amaan"];
let convertStr = strArr.map(x => x.toUpperCase());
console.log(convertStr);

// Q4. Add “Hello ” before each name

strArr.map(strArr => {
    console.log("Hello ", strArr);
})

// Q5. Extract names from array of objects`

let extName = [{ name: "Aman" }, { name: "Abdul" }];

let getName = extName.map(p => p.name);
console.log(getName);

// Q6. Return string lengths from array

// ["pen", "book", "laptop"] → [3, 4, 6]

let orgStr = ["pen", "book", "laptop"];
let conStr = [];

conStr = orgStr.map(orgStr => orgStr.length,);
console.log(conStr);

// Q7. Return full names from object array

let getname = [{ f: "Aman", l: "Khan" }] 

// ["Aman Khan"]

let getFullName = getname.map(p => p.f + p.l);
console.log(getFullName);

// Q8. Add 5 bonus marks to all students' scores

let userScore = [{ name: "A", score: 90 }];

// [{ name: "A", score: 95 }]

let finalScore = userScore.map(p => ({...p, name: p.name, score: p.score + 5}));
console.log(finalScore);

// Q9. Convert prices to rupees (multiply by 80)

let multiByEighty = [10, 20, 50];

// [800, 1600, 4000]

let multiplyResult = multiByEighty.map(x => x * 80);
console.log(multiplyResult);

// Q10. Create HTML list items

let createHtml= ["One", "Two"];

// ["<li>One</li>", "<li>Two</li>"]

let getHtml = createHtml.map(createHtml => `<i>${createHtml}<i>`);
console.log(getHtml);

// Step 2: filter() – 10 Practice Questions

// Q1. Filter even numbers from array

let ifEven = [1,2,3,4,5,6];

let getEven = ifEven.filter(num => num % 2 === 0);
console.log(getEven);

// Q2. Filter numbers > 10

let filerNum = [1,5,15,20,78];

let filteredNum = filerNum.filter(num => num > 10);
console.log(filteredNum);

// Q3. Filter strings longer than 4 characters

let strString = ["Amna", "Sumit", "Aashish", "Umar"];

let filterStr = strString.filter(str => str.length > 4);
console.log(filterStr);

// Q4. Filter truthy values from mixed array

let mixedArr = [0, "hello", false, 5, null]

// ["hello", 5];

let findThruthy = mixedArr.filter(Boolean); 
console.log(findThruthy);

// Q5. Filter students with marks > 90

let studentMarks = [50,60,70,95,98,99];

let resMark = studentMarks.filter(mark => mark > 90);
console.log(resMark);

// Q6. Filter names starting with "A"

let namesWithA = ["Aman", "Amaan", "Sumit", "Arham"];

let nameA = namesWithA.filter(namesWithA => namesWithA.startsWith("A"));
console.log(nameA);

// Q7. Filter adults (age >= 18) from array

let mixedAge = [{ name: "A", age: 16 },{ name: "B", age: 20 }];

let findAdult = mixedAge.filter(val => val.age >= 18);
console.log("Adult =", findAdult);

// Q8. Filter negative numbers

const mixedNum = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let findNegetiveNum = mixedNum.filter(num => num > 1);
console.log(findNegetiveNum);

// Q9. Filter usernames that include "admin"

let adminNames = [{uersname: "Admin"}, {uersname: "Aman"}, {uersname: "Admin"}];

let findAdmin = adminNames.filter(name => name, adminNames.includes("Admin"));
console.log(findAdmin);

// Q10. Filter unique values (bonus logic)
// (Use indexOf or Set, up to you)

//  i dont know yet what i need to do to solve this Question that's why i skiped this

// Step 3: reduce() – 10 Practice Questions

// Q1. Sum of all numbers

let findSum = [10,20,30,40];
let getOfSum = findSum.reduce(sum => sum + sum);
console.log(getOfSum);