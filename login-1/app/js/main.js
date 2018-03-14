const $login = document.querySelector('#login')
const $register = document.querySelector('#register')

$login.addEventListener('mouseover', () => {
  anime({
    targets: $login,
    translateX: -255,
    translateY: -235,
    scale: 1.2,
    opacity: 1
  })
  anime({
    targets: $register,
    translateX: -150,
    translateY: -135,
    scale: 0.5,
    opacity: 0.2
  })
})

$register.addEventListener('mouseover', () => {
  anime({
    targets: $register,
    translateX: 255,
    translateY: -235,
    scale: 1.2,
    opacity: 1
  })
  anime({
    targets: $login,
    translateX: 150,
    translateY: -135,
    scale: 0.5,
    opacity: 0.2
  })
})
