let url = window.location.href;
let createGoal = url.includes('creategoal');
let login = url.includes('login');
let textArea = document.querySelector('#currentPage');

if (createGoal) {
  textArea.textContent = 'Create a Goal';
} else if (login) {
  textArea.textContent = '';
} else {
  textArea.textContent = 'Dashboard';
}