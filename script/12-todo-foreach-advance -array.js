const todolist=[
  {name:'make dish',
dueDate:'18-03-2025'},
{
 name:'make food',
 dueDate:'18-03-2025'
}

];

renderTodo();
function renderTodo(){
 let todolistHTML='';

 todolist .forEach((todoobject,index)=> {
   const {name,dueDate}=todoobject;

 const html=`<div> ${name}</div>
  <div> ${dueDate}</div>

   <button onclick="todolist.splice(${index},1);
    renderTodo();
   " class="delete-button"> Delete</button>
   
   `;

 todolistHTML +=html;
 
});




document.querySelector('.js-todo-button').innerHTML=todolistHTML;
console.log( todolistHTML);

}





function SumtodoList(){
const inputElement =document.querySelector('.js-todo-input');
const name=inputElement.value;
const dateInputElement=document.querySelector('.js-date-input');
const dueDate=dateInputElement.value;


todolist.push({name,dueDate});

console.log(todolist);
inputElement.value='';
dateInputElement.value='';

renderTodo();
}



/*
<body>
 <p>Todo List</p>
 <input placeholder="Todo name" class="js-todo-input">
 <input type="date" class="js-date-input">
 <button onclick="SumtodoList();">Add</button>
 <div class="js-todo-button"></div>

 <script>
   const todolist = [
     { name: 'Make dish', dueDate: '2025-03-18' },
     { name: 'Make food', dueDate: '2025-03-18' }
   ];

   function renderTodo() {
     let todolistHTML = '';

     for (let i = 0; i < todolist.length; i++) {
       const todoObject = todolist[i];
       const name = todoObject.name;
       const dueDate = todoObject.dueDate;

       const html = `
         <p>
           ${name} - ${dueDate}
           <button onclick="deleteTodo(${i})">Delete</button>
         </p>`;

       todolistHTML += html;
     }

     document.querySelector('.js-todo-button').innerHTML = todolistHTML;
   }

   function SumtodoList() {
     const inputElement = document.querySelector('.js-todo-input');
     const name = inputElement.value;

     const dateInputElement = document.querySelector('.js-date-input');
     const dueDate = dateInputElement.value;

     if (name === '' || dueDate === '') {
       alert("Please enter both a task and a due date.");
       return;
     }

     todolist.push({ name, dueDate });

     inputElement.value = '';
     dateInputElement.value = '';

     renderTodo();
   }

   function deleteTodo(index) {
     todolist.splice(index, 1);
     renderTodo();
   }

   renderTodo();*/
