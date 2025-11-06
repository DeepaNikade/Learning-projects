const inputBox = document.getElementById("inputBox");
const listConatiner = document.getElementById("list-container");
const button = document.getElementById("addtask");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listConatiner.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
button.addEventListener("click",addTask);

listConatiner.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// local storage

function saveData(){
    localStorage.setItem("data",listConatiner.innerHTML);

}

function showTask(){
    listConatiner.innerHTML = localStorage.getItem("data");
}

showTask();