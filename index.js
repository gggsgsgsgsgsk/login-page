function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if (username === 'admin' && password === 'codydorkrulez') {
    window.location.href = 'https://rblxmodmenuv4.wordpress.com';
  } else {
    alert('Invalid username or password. Please try again.');
  }
}
