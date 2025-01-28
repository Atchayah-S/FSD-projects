var task_list=[];
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
    task_list.sort((a,b)=>{
     return a[0].localeCompare(b[0])
     });
    var container=document.getElementById("task");
    container.innerHTML="";
    task_list.forEach(task=>{
        var content=document.createElement('div');
    content.innerHTML=`
    <h3> ${task[0]}</h3>
    <ul>
${task.slice(1).map(t => `<li>${t}</li>`).join('')}
</ul>
    `;
    container.appendChild(content);
    })
}
