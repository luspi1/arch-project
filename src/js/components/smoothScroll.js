//плавная прокрутка

const menuLinks = document.querySelectorAll('.main-menu__navigation a')

menuLinks.forEach(link => {
	link.addEventListener('click', function (e) {
		e.preventDefault()

		const href = this.getAttribute('href').substring(1)

		const scrollTarget = document.getElementById(href)
		const elementPosition = scrollTarget.getBoundingClientRect().top

		window.scrollBy({
			top: elementPosition,
			behavior: 'smooth',
		})
	})
})

//Прокрутка вверх

const scrollBtn = document.querySelector('#scrollTop')

window.addEventListener('scroll', e => {
	e.preventDefault()
	if (scrollBtn) {
		if (window.scrollY > 600) {
			scrollBtn.classList.remove('_hide')
		} else {
			scrollBtn.classList.add('_hide')
		}
	}
})

if (scrollBtn) {
	scrollBtn.addEventListener('click', e => {
		e.preventDefault()
		window.scrollBy({
			top: -99999,
			behavior: 'smooth',
		})
	})
}
