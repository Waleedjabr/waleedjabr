document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Check if username already exists
    if (localStorage.getItem(newUsername)) {
        document.getElementById('register-error-message').textContent = 'Username already exists.';
        return;
    }

    // Save user data to localStorage
    localStorage.setItem(newUsername, newPassword);
    window.location.href = 'index.html'; // Redirect to login page
});
