var arr = Array ("main-list", "perform-list", "done-list", "li", "input",
 "label", "button", "createNewTaskElement" , "addTask", "editTask", "deleteTask",
 "taskCompleted", "taskIncomplete", "bindTaskEvents");
taskInput=document.getElementById("main-list");
addButton=document.getElementsByTagName("button")[0];
incompleteTaskHolder=document.getElementById("perform-list");
completedTasksHolder=document.getElementById("done-list");
console.log("TODOLIST");
     createNewTaskElement=function(taskString){
     listItem=document.createElement("li");
     checkBox=document.createElement("input");
     label=document.createElement("label");
     editInput=document.createElement("input");
     editButton=document.createElement("button");
     deleteButton=document.createElement("button");

    label.innerText=taskString;
    checkBox.type="checkbox";
    editInput.type="text";
    editButton.innerText="Edit";
    editButton.className="edit";
    deleteButton.innerText="Delete";
    deleteButton.className="delete";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}
    addTask=function(){
    console.log("Add...");
    var listItem=createNewTaskElement(taskInput.value);
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value="";
    console.log("Added word -", label.innerText);
}
    editTask=function(){
    console.log("Edit Task...");
    console.log("Change 'edit' to 'save'");

    var listItem=this.parentNode;

    var editInput=listItem.querySelector('input[type=text]');
    var label=listItem.querySelector("label");
    var containsClass=listItem.classList.contains("editMode");
    if(containsClass){
        label.innerText=editInput.value;
    }else{
        editInput.value=label.innerText;
    }
    listItem.classList.toggle("editMode");
    console.log("...change",label.innerText);
}
    deleteTask=function(){
    console.log("Delete Task...");

    var listItem=this.parentNode;
    var ul=listItem.parentNode;
    ul.removeChild(listItem);
        console.log(label.innerText);
}
     taskCompleted=function(){
    console.log("Complete Task..." , label.innerText);
    var listItem=this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);

}
     taskIncomplete=function(){
    console.log("Incomplete Task...", label.innerText);
    var listItem=this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted);
}
                addButton.onclick=addTask;
    bindTaskEvents=function(taskListItem,checkBoxEventHandler){
    console.log("bind list item events");
    var checkBox=taskListItem.querySelector("input[type=checkbox]");
    var editButton=taskListItem.querySelector("button.edit");
    var deleteButton=taskListItem.querySelector("button.delete");
    editButton.onclick=editTask;
    deleteButton.onclick=deleteTask;
    checkBox.onchange=checkBoxEventHandler;
}
console.log(Array);