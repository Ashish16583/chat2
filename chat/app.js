
document.getElementById('login-form').addEventListener('submit', login);
document.getElementById('chat-form').addEventListener('submit', sendMessage);

let currentUser = null;

function login(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    currentUser = { username, password };
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('chat-container').style.display = 'block';
  } else {
    alert('Please enter both username and password.');
  }
}

function sendMessage(event) {
  event.preventDefault();
  const messageText = document.getElementById('message').value;

  if (messageText) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = `${currentUser.username}: ${messageText}`;
    document.getElementById('messages').appendChild(messageElement);

    document.getElementById('message').value = '';
    document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
  }
}
