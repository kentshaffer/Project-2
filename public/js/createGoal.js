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
  const response = fetch('/api/goals', {
    method: 'POST',
    body: JSON.stringify({ goal_name, goal_category }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    alert('Failed to create goal');
  }
};

const postTodo = async () => {
  for (var i = 2; i < goalsArray.length; i++) {
    let todo_name = goalsArray[i];
    const response = await fetch('/api/todo', {
      method: 'POST',
      body: JSON.stringify({ todo_name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      goalsArray = [];
      alert('Failed to create goal');
    }
  }
};

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
  // console.log(goalsArray[i]);
  // for (var i = 2; i < goalsArray.length; i++) {
  //     console.log(goalsArray[i]);
  // }
  postGoal;
  postTodo;
  // document.location.replace('/dashboard');
}

console.log(addNewToDo(), deleteToDo(), submitGoal());
