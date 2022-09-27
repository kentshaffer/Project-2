const addTd = document.querySelector('#addTd');

function addNewtodo() {
  const tdCard = document.querySelector('#tdCard');
  const section = document.createElement('section');
  section.setAttribute('class', 'card');
  const cardBody = document.createElement('div');
  cardBody.setAttribute('class', 'card-body');
  const textArea = document.createElement('input');
  textArea.setAttribute(
    'class',
    'd-grid gap-2 d-md-flex justify-content-between'
  );
  textArea.setAttribute('id', 'textId');
  cardBody.appendChild(textArea);
  section.appendChild(cardBody);
  tdCard.appendChild(section);
}
addTd.addEventListener('click', addNewtodo);
const updatebtn = document.querySelector('#updateTodo');

async function updateGoal() {
  let allTodos = document.querySelectorAll('#textId');
  let todoArray = [];
  for (let i = 0; i < allTodos.length; i++) {
    todoArray.push(allTodos[i].value.trim());
  }
  console.log(todoArray);
  let url = window.location.href;
  let goal_id = url.charAt(url.length - 1);
  console.log(goal_id);
  const response = await fetch('/api/todo/updateTodos', {
    method: 'POST',
    body: JSON.stringify({ goal: goal_id, todos: todoArray }),
    headers: { 'Content-Type': 'application/json', },
  });
  if (response.ok) {
    location.reload();
  } else{
    alert('failed to update goal');
  }
}
updatebtn.addEventListener('click', updateGoal);
