const translateRightBoxes = document.querySelectorAll('.translate-right-box')
const translateLeftBoxes = document.querySelectorAll('.translate-left-box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
	const triggerBottom = (window.innerHeight / 4) * 3
	translateRightBoxes.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top
		if (boxTop < triggerBottom) {
			box.classList.add('show')
		} else {
			box.classList.remove('show')
		}
	})
	translateLeftBoxes.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top
		if (boxTop < triggerBottom) {
			box.classList.add('show')
		} else {
			box.classList.remove('show')
		}
	})
}

window.addEventListener('scroll', checkPosition)
const projectsTitle = document.querySelector('.project-screen h1')
console.log(projectsTitle)
function checkPosition() {
	console.log(projectsTitle.getBoundingClientRect().top)
}
