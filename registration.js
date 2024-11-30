document.querySelector('.student').addEventListener('click', () => {
	document.querySelector('.student').style.backgroundColor = '#E9E9E9'
	document.querySelector('.teacher').style.backgroundColor = 'white'
})

document.querySelector('.teacher').addEventListener('click', () => {
	document.querySelector('.teacher').style.backgroundColor = '#E9E9E9'
	document.querySelector('.student').style.backgroundColor = 'white'
})

document.querySelector('.back').addEventListener('click', () => {
	window.location.href = 'home.html'
})

document.querySelector('.next').addEventListener('click', () => {
	// Логика для перехода дальше
})

document.querySelector('.login-link').addEventListener('click', () => {
	// Переход на страницу входа
})
//fdslf
