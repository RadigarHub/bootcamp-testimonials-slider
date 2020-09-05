window.onload = () => {

    const slider = document.querySelector(".slider")
    const slides = document.querySelectorAll(".slide")
    const leftButtons = document.querySelectorAll(".prev")
    const rigthButtons = document.querySelectorAll(".next")
    let index = 0

    const moveToSlide = (index) => {
        let x = index * (-100)
        slider.style.transform = `translateX(${x}%)`
    }

    const prevSlide = () => {
        index--
        if (index < 0) {
            index = slides.length - 1
        }
        moveToSlide(index)
    }

    const nextSlide = () => {
        index++
        if (index >= slides.length) {
            index = 0
        }
        moveToSlide(index)
    }

    const addListenerButtons = (() => {
        leftButtons.forEach(button => button.onclick = prevSlide)
        rigthButtons.forEach(button => button.onclick = nextSlide)

        // Keyboard
        document.onkeyup = (e) => {
            // Left arrow
            if (e.keyCode == 37) {
                prevSlide()
            }
            // Right arrow
            if (e.keyCode == 39) {
                nextSlide()
            }
        }
    })()

}