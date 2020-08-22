

function addToDo() {
    const taskInput = $("#txt-task");
    var text = taskInput.val();
    var todo = {
        text: text,
        user: "Ivan"
    };
    if(text.length > 0){
        taskInput.val("");
        displayToDo(todo.text)
    } else {
        alert("You need to enter a task");
    }
    taskInput.focus();
}

function displayToDo(todo){
    var li = `<li>${todo}<button>Done</button></li>`;
    $("#pending-list").append(li);
}
function init() {
    console.log("Init the to do app.");
    $("#btn-add").click(addToDo)

    $("#txt-task").keypress(function(e){
        // console.log(e.key);
        if(e.key === "Enter")
            addToDo();
    });
}

window.onload = init;