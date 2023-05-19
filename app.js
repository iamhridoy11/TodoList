const input = document.querySelector("#list");
const todoList = document.querySelector("#todo-list");





const form = document.querySelector("#add-list");
form.addEventListener("submit", function(e){
    // Preventing page refresh
    e.preventDefault();


    // Create new li and buttion element

    const newTodo = document.createElement("li");
    const removeButton = document.createElement("button");



    // Saving latest todo item in the localstorage.
    let todosInput = newTodo.innerText = input.value;
    let str = JSON.stringify(todosInput);


    localStorage.setItem("todos", str);



    removeButton.innerText = "Remove";


    

    newTodo.appendChild(removeButton)
    todoList.appendChild(newTodo);
    input.value = "";
});


// Event delegation
todoList.addEventListener("click", function(e){
    if (e.target.tagName === "BUTTON"){
        
        e.target.parentElement.remove();
    }
    else if (e.target.tagName === "LI"){
        e.target.classList.add("cross-todo")
    };
});



// Dark theme Code


const butn = document.querySelector("#btn")
const btnText = document.querySelector("#btnText");
const btnIcon = document.querySelector("#btnIcon");

butn.addEventListener("click", function(e){
    document.body.classList.toggle("dark-theme");

    // Check the current theme

    if(document.body.classList.contains("dark-theme")){
        btnIcon.src = "images/sun.png";
        btnText.innerHTML = "Light";
    }
    else{
        btnIcon.src = "images/moon.png";
        btnText.innerHTML = "Dark";
    }
})






