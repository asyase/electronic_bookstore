document.addEventListener('DOMContentLoaded', function () {
    const user = localStorage.getItem('name');
    if (user != null) {
        document.getElementById('helloName').textContent = `Welcome back, ${user}!`;
    }
})