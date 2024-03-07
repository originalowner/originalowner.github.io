document.addEventListener('DOMContentLoaded', function() {
    // Check if session success message exists and display it
    var successMsg = document.getElementById('successMsg');
    if (successMsg.innerHTML.trim() !== '') {
        successMsg.style.display = 'block';
    } else {
        successMsg.style.display = 'none';
    }

    // Check if logged in user information exists and display it
    var userInfo = document.getElementById('userInfo');
    var username = '<?php echo isset($_SESSION["username"]) ? $_SESSION["username"] : ""; ?>';
    if (username.trim() !== '') {
        userInfo.innerHTML = '<p>Welcome <strong>' + username + '</strong></p><p><a href="#" id="logoutLink" style="color: red;">logout</a></p>';
    } else {
        userInfo.innerHTML = '';
    }

    // Logout functionality
    var logoutLink = document.getElementById('logoutLink');
    if (logoutLink !== null) {
        logoutLink.addEventListener('click', function(event) {
            event.preventDefault();
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        window.location.href = 'login.php';
                    }
                }
            };
            xhr.open('GET', 'index.php?logout=1', true);
            xhr.send();
        });
    }
});
