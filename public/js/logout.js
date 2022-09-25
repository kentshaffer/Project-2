const logOutBtn = document.getElementById('log-out');

async function logout() {
  const response = await fetch('api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert(response.statusText);
  }
}

logOutBtn.addEventListener('click', logout);