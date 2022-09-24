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
  const loginEmail = $('#loginEmail').val();
  const loginPassword = $('#loginPassword').val();

  if (loginEmail && loginPassword) {
    const response = await fetch('', {
      method: 'POST',
      body: JSON.stringify({ loginEmail, loginPassword }),
      headers: {
        'Content-Type':
        'application/json'
      },
    });
    if (response.ok) {
    // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
});

$('#signupbtn2').click(async function(event){

  event.preventDefault();
  const firstName =$('#firstName').val();
  const lastName =$('#lastName').val();
  const email =$('#signUpEmail').val();
  const password =$('#signUpPassword').val();

  if (firstName && lastName && email && password) {
    const name = firstName+' '+lastName;
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
});