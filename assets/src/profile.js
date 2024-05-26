document.addEventListener('DOMContentLoaded', function () {
    const user = localStorage.getItem('name');
    if (user != null) {
        document.getElementById('name').textContent = user;
    }
    const place = localStorage.getItem('location');
    if (place != null) {
        document.getElementById('location').textContent = place;
    }
    const img = localStorage.getItem('ava');
    if (img != null) {
        document.getElementById('avatar').src = img;
    }
})