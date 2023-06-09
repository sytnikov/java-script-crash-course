// // Single element selectors
// const form = document.getElementById("email");
// console.log(form);
// console.log(document.querySelector("#my-form")); // select by id
// console.log(document.querySelector(".container")); // by class
// console.log(document.querySelector("h1")); // by tag


// Multiple element selectors
// console.log(document.getElementsByClassName("item"));
// console.log(document.getElementsByTagName("li"));
// console.log(document.querySelectorAll("h1"));
// console.log(document.querySelectorAll(".item")); // preferred

// const ul = document.querySelector(".items");

// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Alexey';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

const btn = document.querySelector('.btn');

btn.addEventListener('click', (element) => {
    element.preventDefault();
    // changing form background
    document.querySelector('#my-form').style.background = '#ccc';
    // changing a theme to dark by adding a class
    document.querySelector('.container').classList.add('bg-dark');
})