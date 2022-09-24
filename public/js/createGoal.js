function maxTodo() {
  let parentDiv = document.querySelector('#newRow');
  if (parentDiv.childElementCount === 10) {
    parentDiv.removeChild(parentDiv.lastElementChild);
    alert('You may only have 10 to dos');
  }
}

function addNewToDo() {
  let rowOfToDo = document.querySelector('#newRow');
  let rowDiv = document.createElement('div');
  rowDiv.setAttribute('class', 'row d-flex justify-content-end');
  let largeDiv = document.createElement('div');
  largeDiv.setAttribute('class', 'form-floating col');
  largeDiv.setAttribute('style', 'padding: 10px;');
  let textArea = document.createElement('input');
  textArea.setAttribute('class', 'form-control');
  textArea.setAttribute('id', 'goalText');
  textArea.setAttribute('style', 'text-align: center;');
  textArea.setAttribute('placeholder', 'To Do');
  let label = document.createElement('label');
  label.setAttribute('for', 'goalText');
  label.textContent = 'To Do';
  largeDiv.appendChild(textArea);
  largeDiv.appendChild(label);
  rowDiv.appendChild(largeDiv);
  rowOfToDo.appendChild(rowDiv);
  maxTodo();
}

function deleteToDo() {
  let parentDiv = document.querySelector('#newRow');
  if (parentDiv.childElementCount === 0) {
    return;
  } else {
    parentDiv.removeChild(parentDiv.lastElementChild);
  }
}

function ifEmpty() {
  let emptyDiv = document.querySelector('#ifEmpty');
  let warning = document.createElement('h3');
  warning.setAttribute('style', 'text-align: center;');
  warning.textContent = 'Please fill out all areas';
  emptyDiv.appendChild(warning);
}
let goalsArray = [];


const postGoal = async () => {
  let goal_name = goalsArray[0];
  let goal_category = goalsArray[1];
  let todo_list = [];
  for (var i = 2; i < goalsArray.length; i++) {
    todo_list.push(goalsArray[i]);
  }
  const response = await fetch('/api/goals/', {
    method: 'POST',
    body: JSON.stringify({ goal:{
      goal_name,
      goal_category
    },todos: todo_list }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    alert('Failed to create goal');
  }
};

// const postTodo = async () => {
//   //do get request of newly created goal to get goal id, then pass into post request of todos for table linkage
//   // const oneGoal = await Goal.findOne({
//   //   where: {
//   //     goal_name: goalsArray[0],
//   //   }
//   // });
//   let todo_list = [];
//   for (var i = 2; i < goalsArray.length; i++) {
//     todo_list.push(goalsArray[i]);
//   }
//   let goal_id = oneGoal.id;
//   for (var j = 2; i < goalsArray.length; j++) {
//     let todo_name = goalsArray[j];
//     const response = await fetch('/api/todo', {
//       method: 'POST',
//       body: JSON.stringify({ todo_name, goal_id }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     if (!response.ok) {
//       goalsArray = [];
//       alert('Failed to create goal');
//     }
//   }
// };

// const postToDo1Table = async () => {
//   let todo_list = [];
//   for (var i = 2; i < goalsArray.length; i++) {
//     todo_list.push(goalsArray[i]);
//   }
//   let todo_name = todo_list.toString();
//   const response = await fetch('/api/todo', {
//     method: 'POST',
//     body: JSON.stringify({ todo_name }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   if (!response.ok) {
//     goalsArray = [];
//     alert('Failed to create todos');
//   }
// };

function submitGoal() {
  let allGoals = document.querySelectorAll('#goalText');
  // console.log(allGoals.length);
  for (var i = 0; i < allGoals.length; i++) {
    if (!allGoals[i].value) {
      ifEmpty();
      goalsArray = [];
      return;
    }
    goalsArray.push(allGoals[i].value.trim());
  }
  goalsArray;
  // console.log(goalsArray[i]);
  // for (var i = 2; i < goalsArray.length; i++) {
  //     console.log(goalsArray[i]);
  // }
  postGoal(goalsArray);
  // postTodo(goalsArray);
  document.location.replace('login');
}

// console.log(addNewToDo, deleteToDo, submitGoal);

let newToDo = document.querySelector('#addNewToDo');
newToDo.addEventListener('click', addNewToDo);

let submit = document.querySelector('#createGoal');
submit.addEventListener('click', submitGoal);


let deleteTodo = document.querySelector('#deleteLastToDo');
deleteTodo.addEventListener('click', deleteToDo);
