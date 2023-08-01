const content =`
<h1 class="heading">
    To-do List:
</h1>

    <label id = "label">Please enter some text below:
        <input type="text" id="to-do" name="To-do" placeholder="Homework, Workout, etc." required></label>
        <button type="submit" onclick="getData()">Submit</button>
        <ul id="toDoList"><ul/>
`;





const main = document.querySelector(".mainContent")
const newArticle = document.createElement("article")
newArticle.classList.add("mainArticle")
newArticle.innerHTML = content
main.append(newArticle)


// const script = `function getData(){\n
//     var toDo = document.getElementById("to-do").value.trim();
//         document.getElementsByClassName("mainContent").innerHTML = toDo;
//         document.querySelector(".mainContent").append(toDo);

// }`;

const script =` 
function getData(){
    let toDo = document.getElementById("to-do").value.trim();
    const taskList = document.getElementById("toDoList");
    const taskItem = document.createElement("li");
    const taskLabel =  document.createElement("label");
    taskLabel.innerText = toDo;
    const deleteButton = document.createElement("button");
    deleteButton.textContent='Delete';
    deleteButton.onclick = ()=>{
        taskList.removeChild(taskItem);
        window.prompt("Task Done!");
    };

    taskItem.appendChild(taskLabel);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    toDo = "";



}`;


const newScript = document.createElement("script")
newScript.innerHTML = script;
main.append(newScript);


