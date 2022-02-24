let name = "Evelyn";
let age = 19; 

name = 100; 
name = "Eve";

const class_name = "source";

// Notes
// == doesn't compare types; converts one to another type
// === compares types 
// != doesn't compare types and converts to one type 
// !== compares types
// control / comments out multiple things at once 

if(age >= 21 && name === "Eve"){
    console.log("legal!");
} else if (age < 19 || name === "Eve") {
    console.log("teen");
} else {
    console.log("child!");
}

// Ternary operator 
let over21 = age === 19 ? "you are 19": false;
console.log(over21);

// Functions
function add(num1, num2){
    return num1 + num2;
};
console.log(add(11,10));

// Variable Function
let subtract = function(num1, num2) {
    return num1-num2;
};
console.log(subtract(10,5));

// Arrow Function Syntax
let multiply = (num1, num2) =>{
    let result = num1 * num2;
    return multiply;
};
console.log(multiply(2,3));

let remainder = (num1, num2) => num1 % num2;
console.log(10, 3);

// Object
let person = {
    name: "Evelyn",
    age: 19
};
console.log(person);
console.log(person.age);
person.year = 2;
console.log(person.year);
console.log(person);

// Arrays
let classes = [];
classes.push("Source");
classes.push("Algorithm");
classes.push("Macroeconomics");
console.log(classes);
classes.push("Statistics");
console.log(classes.length);
console.log(classes[2]);
classes.push({clubs: "Active Minds"});
console.log(classes);
console.log(classes[4].clubs);
classes.pop();
console.log(classes);
classes.unshift("new first item");
console.log(classes);
classes.shift();
console.log(classes);

// For Loop
for (let i = 0; i < classes.length; i++){
    console.log(classes[i]);
}

// ForEach
classes.forEach((element) => console.log(element));
