function check() {
    const name = document.getElementById('name').value;
    const ava = document.getElementById('url').value;
    const location = document.getElementById("location").value;
    const selectedGenre = document.getElementById("selectGenre");
    const genre = selectedGenre.options[selectedGenre.selectedIndex].value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password_len = password.length;
    const letters = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;
    const mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let name_result = false;
    let email_result = false;
    let password_result = false;
    let location_result = false;

    document.getElementById('message').innerHTML = "";

    if (name == '' || !name.match(letters)) {
        document.getElementById('message').innerHTML += "Please enter a valid name!<br>";
    } else {
        name_result = true;
    }
    if (location == '') {
        document.getElementById("message").innerHTML += "Please enter a valid location!<br>";
    } else {
        location_result = true;
    }
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

    if (name_result == true && email_result == true && password_result == true && location_result == true) {
        if (localStorage.getItem('name') == null) {
            localStorage.setItem('name', name);
        }
        if (localStorage.getItem('location') == null) {
            localStorage.setItem('location', location);
        }
        if (localStorage.getItem('ava') == null) {
            localStorage.setItem('ava', ava);
        }
        if (localStorage.getItem('genre') == null) {
            localStorage.setItem('genre', genre);
        }
        window.location.href = "profile.html";
    }

}