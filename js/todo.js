const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// todoForm.queryselector("input")도 가능 , getelement는 아이디만 가능 주의
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function deleteToDo(event){
    const li = event.target.parentElement;
    // 대문자,소문자 주의
    li.remove();
}

function saveToDo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));   
    // toDos 는 array안에서 string의 형태로 저장x, stringify사용
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    li.appendChild(span);
    const button = document.createElement("button");
    button.innerText = "x"
    button.addEventListener("click",deleteToDo);
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    const newTodoObj={
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDo();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    // 배열의 각 요소를 인자로 함수에 전달 ,함수가 여러번실행x
}