const burgerMenuBtn = document.querySelector('.burger-btn')
const burgerMenu = document.querySelector('.main-menu__burger-menu')

if (burgerMenuBtn) {
	burgerMenuBtn.addEventListener('click', () => {
		burgerMenuBtn.classList.toggle('_active')
		burgerMenu.classList.toggle('_active')
		document.body.classList.toggle('_lock')
	})

	const burgerMenuLinks = burgerMenu.querySelectorAll('li')

	burgerMenuLinks.forEach(link => {
		link.addEventListener('click', () => {
			burgerMenuBtn.classList.remove('_active')
			burgerMenu.classList.remove('_active')
			document.body.classList.remove('_lock')
		})
	})
}
