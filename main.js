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

for (let i = 0; i < toDo.length; i++) {
    console.log(toDo[i].text);
}

for (let x of toDo) {
    console.log(x.text);
}

toDo.forEach(function(todo) {
    console.log(todo.text);
});

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