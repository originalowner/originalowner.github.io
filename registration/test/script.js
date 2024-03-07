sessionStorage.setItem('username', '');
if (!sessionStorage.getItem('username')) {
  sessionStorage.setItem('msg', 'You must log in first');
  window.location.href = 'login.php';
}
if (window.location.search.includes('logout')) {
  sessionStorage.clear();
  window.location.href = 'login.php';
}

document.addEventListener('DOMContentLoaded', function() {
  var header = document.createElement('div');
  header.className = 'header';
  var headerText = document.createElement('h2');
  headerText.textContent = 'Home Page';
  header.appendChild(headerText);
  document.body.appendChild(header);

  var content = document.createElement('div');
  content.className = 'content';
  document.body.appendChild(content);

  if (sessionStorage.getItem('success')) {
    var successDiv = document.createElement('div');
    successDiv.className = 'error success';
    var successText = document.createElement('h3');
    successText.textContent = sessionStorage.getItem('success');
    successDiv.appendChild(successText);
    content.appendChild(successDiv);
    sessionStorage.removeItem('success');
  }

  if (sessionStorage.getItem('username')) {
    var welcomeText = document.createElement('p');
    welcomeText.innerHTML = 'Welcome <strong>' + sessionStorage.getItem('username') + '</strong>';
    content.appendChild(welcomeText);

    var logoutLink = document.createElement('p');
    var logoutAnchor = document.createElement('a');
    logoutAnchor.href = 'index.php?logout=1';
    logoutAnchor.style.color = 'red';
    logoutAnchor.textContent = 'logout';
    logoutLink.appendChild(logoutAnchor);
    content.appendChild(logoutLink);
  }
});
