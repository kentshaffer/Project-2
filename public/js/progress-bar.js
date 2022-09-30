const todo = document.querySelectorAll('#todo-btn');
const checkmark = document.querySelectorAll('.checkmark');
let numOfChecks = checkmark.length - todo.length;
let totalTodo = checkmark.length;
let percent = document.querySelector('.goalProgressGreenBar');

function percentOfGoalComplete() {
  if (numOfChecks === 0) {
    percent.setAttribute('style', 'width: 0');
    percent.textContent = '0%';
  } else {
    percent.setAttribute(
      'style',
      `width: ${Math.round((numOfChecks / totalTodo) * 100)}%`
    );
    percent.textContent = `${Math.round((numOfChecks / totalTodo) * 100)}%`;
  }
}
console.log(todo);
console.log(checkmark);
percentOfGoalComplete();
