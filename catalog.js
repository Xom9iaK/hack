document.addEventListener('DOMContentLoaded', function () {
	// Navigation links highlighting
	const navLinks = document.querySelectorAll('.nav-link')
	navLinks.forEach(link => {
		link.addEventListener('click', function () {
			navLinks.forEach(l => l.classList.remove('active'))
			this.classList.add('active')
		})
	})

	// Options selection
	const options = document.querySelectorAll('.option')
	options.forEach(option => {
		option.addEventListener('click', function () {
			this.classList.toggle('selected')
		})
	})

	// Details buttons interaction
	const detailsButtons = document.querySelectorAll('.details-btn')
	detailsButtons.forEach(button => {
		button.addEventListener('click', function () {
			const courseId = this.closest('.content-box').dataset.id
			// Here you can add navigation to course details
			console.log(`Navigating to course ${courseId}`)
		})
	})

	// Profile circle click handler
	const profileCircle = document.querySelector('.profile-circle')
	profileCircle.addEventListener('click', function () {
		// Add profile menu toggle logic
		console.log('Profile menu toggled')
	})
})
