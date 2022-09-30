let date = new Date();
let formatDate = date.toISOString();
let dateOnly = formatDate.split('T')[0];

const completeGoal = async () => {
  const goalId = window.location.href.charAt(window.location.href.length - 1);
  const response = await fetch(`/api/goals/${goalId}`, {
    method: 'PUT',
    body: JSON.stringify({
      id: goalId,
      goal_open: false,
      date_completed: dateOnly,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed to close goal');
  }
};

let completeGoalBtn = document.querySelector('#complete-goal-btn');
completeGoalBtn.addEventListener('click', completeGoal);
