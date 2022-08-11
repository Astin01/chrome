const toDoForm = document.getElementById("todo-form");

const toDoInput = document.querySelector("#todo-form input");
// todoForm.queryselector("input")도 가능 , getelement는 아이디만 가능 주의
const toDoList = document.getElementById("todo-list");


function deleteToDo(event){
    const li = event.target.parentElement;
    // 대문자,소문자 주의
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    const button = document.createElement("button");
    button.innerText = "x"
    button.addEventListener("click",deleteToDo);
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);
