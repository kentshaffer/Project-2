$('.signup-show').click(function () {
  $('.registration-form').show();
  $('.login-form').hide();
});

$('.login-show').click(function () {
  $('.login-form').show();
  $('.registration-form').hide();
});

$('#loginbtn').click(async function (event) {
  event.preventDefault();
  const email = $('#loginEmail').val();
  const password = $('#loginPassword').val();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      // If successful, redirect the browser to the homepage
      document.location.replace('/');
    } else {
      const result = await response.json();
      alert(result.message);
      // alert(response.statusText);
    }
  }
});

$('#signupbtn2').click(async function (event) {
  event.preventDefault();
  const firstName = $('#firstName').val();
  const lastName = $('#lastName').val();
  const email = $('#signUpEmail').val();
  const password = $('#signUpPassword').val();

  if (firstName && lastName && email && password) {
    const name = firstName + ' ' + lastName;
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
});
