var task_list=[];
var task_count=0;
function showPrompt(){
    event.preventDefault();
    addTask();
    const container=document.getElementById("prompt");
    const content=document.createElement('div');
    content.innerHTML=`
    <h3> New Task Added! </h3>
    `;
    container.appendChild(content);
    document.getElementById("prompt").style.visibility="visible";        
}
function showTasks(){
    event.preventDefault();
    var cc=document.getElementById("task")
    document.getElementById("main1").replaceWith(cc)
    // document.getElementById("main1").style.visibility="hidden";
    // document.getElementById("prompt").style.visibility="hidden";
    document.getElementById("task").style.visibility="visible";
}
function addTask(){
    var tasks=document.getElementById("newTask").value;
    var date=document.getElementById("day").value;
    if(task_list.some(t=>t[0]==date)){
        var ind=task_list.findIndex(task => task[0] === date);
        task_list[ind].push(tasks);
     }
     else{
         task_list.push([date,tasks]);
     }
     task_count=task_count+1;
    task_list.sort((a,b)=>{
     return a[0].localeCompare(b[0])
     });
    var container=document.getElementById("task");
    container.innerHTML=`<h3 id="count"> Planned tasks: ${task_count}</h3>`;
    task_list.forEach(task=>{
        var content=document.createElement('div');
    content.innerHTML=`
    <div class="task_entry">
    <h2> ${task[0]}</h2>    <ul>
${task.slice(1).map(t => `
                    
                        <label for="${t}" id="label-${t}">${t}</label>
                        <input type="checkbox" id="${t}" onclick="completeTask('${t}')">
                        <ion-icon name="trash" size="large"></ion-icon>
                        <ion-icon name="create" size="large"></ion-icon>
                    <br>`).join('')}
</ul>
    </div>`;
    container.appendChild(content);
    })   
}
function completeTask(t_id) {
    var checkbox = document.getElementById(t_id);
    var label = document.getElementById("label-" + t_id);
    var count=document.getElementById("count");
    if (checkbox.checked) {
        label.style.textDecoration = "line-through";
        label.style.backgroundColor = "green";
        task_count=task_count-1;
    }
     else {
        label.style.textDecoration = "none";
        label.style.backgroundColor = "";   
        task_count=task_count+1;
    }
    count.innerHTML=`<h3 id="count"> Planned tasks: ${task_count}</h3>`;
}
