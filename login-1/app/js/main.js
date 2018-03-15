const $login = document.querySelector('#login')
const $register = document.querySelector('#register')

window.onload = anime({
  targets: $login,
  translateX: -255,
  translateY: -235,
  scale: 1.2,
  opacity: 1,
  easing: 'easeInOutQuart',
  duration: 300
})
anime({
  targets: $register,
  translateX: -150,
  translateY: -135,
  scale: 0.5,
  opacity: 0.2,
  easing: 'easeInOutQuart',
  duration: 300
})

$login.addEventListener('mouseover', () => {
  anime({
    targets: $login,
    translateX: -255,
    translateY: -235,
    scale: 1.2,
    opacity: 1,
    easing: 'easeInOutQuart',
    duration: 300
  })
  anime({
    targets: $register,
    translateX: -150,
    translateY: -135,
    scale: 0.5,
    opacity: 0.2,
    easing: 'easeInOutQuart',
    duration: 300
  })
})

$register.addEventListener('mouseover', () => {
  anime({
    targets: $register,
    translateX: 255,
    translateY: -235,
    scale: 1.2,
    opacity: 1,
    easing: 'easeInOutQuart',
    duration: 300
  })
  anime({
    targets: $login,
    translateX: 150,
    translateY: -135,
    scale: 0.5,
    opacity: 0.2,
    easing: 'easeInOutQuart',
    duration: 300
  })
})
