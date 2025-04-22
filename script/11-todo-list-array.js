
document.querySelector('.js-add-button').addEventListener('click',()=>{
  AddTodolist();

})



const todoList = [
  {
    name: 'wash dish',
    Duedate: '2025-03-17'

  },
  {
    name: 'make dish',
    Duedate: '2025-03-17'

  }
];
renderTodolist();
function renderTodolist() {
  let todoListHTML = '';

todoList.forEach(function(todoobject,index){

  const name = todoobject.name;
  const Duedate = todoobject.Duedate;

  // const('name','Duedate')=todoobject;
  const html = `<div> ${name}</div>
   <div>${Duedate}</div>
<button  class="delete-button js-delete-button"> Delete</button>

`;
  todoListHTML += html;
});

 /* for (let i = 0; i < todoList.length; i++) {
    const todoobject = todoList[i];
    //const {name,dueDate}=todoobject;shortcut
    const name = todoobject.name;
    const Duedate = todoobject.Duedate;

    // const('name','Duedate')=todoobject;
    const html = `<div> ${name}</div>
     <div>${Duedate}</div>
  <button onclick="todoList.splice(${i},1);
   renderTodolist();
  " class="delete-button"> Delete</button>
  
  `;
    todoListHTML += html;
  }*/
  //console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
document.querySelectorAll('.js-delete-button')
.forEach((deleteButton,index)=>{
  deleteButton.addEventListener('click',()=>{
    todoList.splice(index,1);
 renderTodolist();
  })
})


}
function AddTodolist() {
  const inputElement = document.querySelector('.js-input-button');

  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-date-input');
  const Duedate = dateInputElement.value;


  todoList.push(
    {
      //Duedate:Duedate the same property and value so 
      name, Duedate
    });
  //console.log(todoList);
  inputElement.value = '';
  renderTodolist();
}


