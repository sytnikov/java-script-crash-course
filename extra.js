// an array with objects as its elements
const toDo = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meet with boss",
        isCompleted: true
    },
    {
        id: 3,
        text: "Dentist appointment",
        isCompleted: false
    },
]

// for (let i = 0; i < toDo.length; i++) {
//     console.log(toDo[i].text);
// }

// for (let x of toDo) {
//     console.log(x.text);
// }

// toDo.forEach(function(todo) {
//     console.log(todo.text);
// });

toDo.forEach((todo) => console.log(todo.text)); // using arrow function


const toDoText = toDo.map(function(element) {
    return element.text;
})
console.log(toDoText);

const toDoCompleted = toDo.filter(function(element) {
    return element.isCompleted === true;
}).map(function(element) {
    return element.text;
})
console.log(toDoCompleted);

// Constructor function
function Person (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // in-built function within a constructor function
    this.getBirthYear = () => this.dob.getFullYear(); // adding a method for an object
    this.getFullName = () => `${this.firstName} ${this.lastName}`;
}

// Prototyping function: instead of having it in the object directly
Person.prototype.getLastNameAndIntitals = function () {
    return `${this.lastName} ${this.firstName[0]}.`;
}

// Instead of creating a constructor function and prototyping, we can create class
class Person_class {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    } 

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    } 

    getLastNameAndIntitals() {
        return `${this.lastName} ${this.firstName[0]}.`;
    }
}


//Instantiate person (an object)
const person1 = new Person_class("Mary", "Smith", "04/06/1991");

console.log(person1);
console.log(person1.getLastNameAndIntitals());