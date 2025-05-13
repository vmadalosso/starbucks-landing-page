document.querySelectorAll('.thumb img').forEach(img => {
  img.addEventListener('click', () => {
    const newImg = img.getAttribute('data-img')
    const newColor = img.getAttribute('data-color')

    document.querySelector('.starbucks').src = newImg

    const circle = document.querySelector('.circle')
    circle.style.transition = "background 0.4s ease-in-out"
    circle.style.background = newColor
  })
})

// Menu hamburger
const menuToggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('nav')

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active')
})
