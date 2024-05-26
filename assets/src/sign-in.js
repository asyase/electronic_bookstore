function checkPassword() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password_len = password.length;
    const mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email_result = false;
    let password_result = false;

    document.getElementById('message').innerHTML = "";

    if (email == '' || !email.match(mailformat)) {
        document.getElementById("message").innerHTML += "Please enter a valid email!<br>";
    } else {
        email_result = true;
    }
    if (password == '' || password_len >= 20 || password_len < 5) {
        document.getElementById("message").innerHTML += "Password must be between 5 and 20 characters!<br>";
    } else {
        password_result = true;
    }

    if (email_result == true && password_result == true) {
        window.location.href = "profile.html";
    }

}