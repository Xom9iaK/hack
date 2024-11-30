document.addEventListener('DOMContentLoaded', function () {
	// Login form handling
	const loginForm = document.querySelector('.login-box')
	const loginInput = document.querySelector('input[type="text"]')
	const passwordInput = document.querySelector('input[type="password"]')
	const loginButton = document.querySelector('.login')
	const googleButton = document.querySelector('.google')

	loginButton.addEventListener('click', function () {
		const loginValue = loginInput.value
		const passwordValue = passwordInput.value

		// Add your login validation logic here
		if (loginValue && passwordValue) {
			// Handle successful login
			window.location.href = 'home.html'
		} else {
			// Handle validation errors
			alert('Пожалуйста, заполните все поля')
		}
	})

	googleButton.addEventListener('click', function () {
		// Add Google OAuth integration here
		console.log('Google login clicked')
	})
})
