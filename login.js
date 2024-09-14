document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username exists and password matches
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        // Redirect to home page
        window.location.href = 'home.html'; // Update to your correct path
    } else {
        // Show error message
        document.getElementById('login-error-message').textContent = 'Incorrect username or password.';
    }
});
