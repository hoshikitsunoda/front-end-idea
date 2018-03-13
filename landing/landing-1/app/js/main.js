const $bar = document.querySelectorAll('.bar')

$bar.forEach(bar => {
  bar.addEventListener('mouseover', () => {
    bar.classList.add('expand')
  })
  bar.addEventListener('mouseout', () => {
    bar.classList.remove('expand')
  })
})
