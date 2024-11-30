document.addEventListener('DOMContentLoaded', function () {
	const registerBtn = document.getElementById('register-btn')
	const googleBtn = document.getElementById('google-btn')
	const loginLink = document.getElementById('login-link')
	const emailInput = document.getElementById('email')
	const passwordInput = document.getElementById('password')
	const confirmPasswordInput = document.getElementById('confirm-password')

	registerBtn.addEventListener('click', function () {
		const email = emailInput.value
		const password = passwordInput.value
		const confirmPassword = confirmPasswordInput.value

		if (!email || !password || !confirmPassword) {
			alert('Пожалуйста, заполните все поля')
			return
		}

		if (password !== confirmPassword) {
			alert('Пароли не совпадают')
			return
		}

		// Add your registration logic here
		console.log('Registration attempt:', { email, password })
	})

	googleBtn.addEventListener('click', function () {
		// Add Google OAuth integration here
		console.log('Google sign-in clicked')
	})

	loginLink.addEventListener('click', function () {
		window.location.href = 'login.html'
	})
})
