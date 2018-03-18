const $left = document.querySelector('#left-arrow')
const $right = document.querySelector('#right-arrow')
const $textContainer = document.querySelector('.text-container')
const $imgContainer = document.querySelector('.img-container')
const $gallery = document.querySelector('#gallery')
const $slide = document.querySelector('#slide')
const $dots = document.querySelectorAll('.dot')

const $arrows = [$left, $right]
let id = 1
$dots[0].classList.add('active')

const carousel = () => {
  switch(id) {
    case 1:
      for(let value in positions) {
        $imgContainer.style.left = positions[0].imgLeft
        $imgContainer.style.top = positions[0].imgTop
        $imgContainer.style.backgroundColor = positions[0].imgBackground
        $textContainer.style.left = positions[0].textLeft
        $textContainer.style.top = positions[0].textTop
        $textContainer.style.background = positions[0].background
        $gallery.setAttribute('src', positions[0].url)
      }
      $dots[0].classList.add('active')
      $dots[4].classList.remove('active')
      $arrows.forEach(arrow => {
        arrow.style.backgroundColor = positions[0].imgBackground
      })
      break
    case 2:
      for(let value in positions) {
        $imgContainer.style.left = positions[1].imgLeft
        $imgContainer.style.top = positions[1].imgTop
        $imgContainer.style.backgroundColor = positions[1].imgBackground
        $textContainer.style.left = positions[1].textLeft
        $textContainer.style.top = positions[1].textTop
        $textContainer.style.background = positions[1].background
        $gallery.setAttribute('src', positions[1].url)
      }
      $dots[1].classList.add('active')
      $dots[0].classList.remove('active')
      $arrows.forEach(arrow => {
        arrow.style.backgroundColor = positions[1].imgBackground
      })
      break
    case 3:
      for(let value in positions) {
        $imgContainer.style.left = positions[2].imgLeft
        $imgContainer.style.top = positions[2].imgTop
        $imgContainer.style.backgroundColor = positions[2].imgBackground
        $textContainer.style.left = positions[2].textLeft
        $textContainer.style.top = positions[2].textTop
        $textContainer.style.background = positions[2].background
        $gallery.setAttribute('src', positions[2].url)
      }
      $dots[2].classList.add('active')
      $dots[1].classList.remove('active')
      $arrows.forEach(arrow => {
        arrow.style.backgroundColor = positions[2].imgBackground
      })
      break
    case 4:
      for(let value in positions) {
        $imgContainer.style.left = positions[3].imgLeft
        $imgContainer.style.top = positions[3].imgTop
        $imgContainer.style.backgroundColor = positions[3].imgBackground
        $textContainer.style.left = positions[3].textLeft
        $textContainer.style.top = positions[3].textTop
        $textContainer.style.background = positions[3].background
        $gallery.setAttribute('src', positions[3].url)
      }
      $dots[3].classList.add('active')
      $dots[2].classList.remove('active')
      $arrows.forEach(arrow => {
        arrow.style.backgroundColor = positions[3].imgBackground
      })
      break
    case 5:
      for(let value in positions) {
        $imgContainer.style.left = positions[4].imgLeft
        $imgContainer.style.top = positions[4].imgTop
        $imgContainer.style.backgroundColor = positions[4].imgBackground
        $textContainer.style.left = positions[4].textLeft
        $textContainer.style.top = positions[4].textTop
        $textContainer.style.background = positions[4].background
        $gallery.setAttribute('src', positions[4].url)
      }
      $dots[4].classList.add('active')
      $dots[3].classList.remove('active')
      $arrows.forEach(arrow => {
        arrow.style.backgroundColor = positions[4].imgBackground
      })
      break
  }
}

const carouselMobile = () => {
  switch(id) {
    case 1:
      for(let value in positions) {
        $imgContainer.style.backgroundColor = positions[0].imgBackground
        $textContainer.style.background = positions[0].background
        $gallery.setAttribute('src', positions[0].url)
      }
      $dots[0].classList.add('active')
      $dots[4].classList.remove('active')
      $arrows.forEach(arrow => {
        arrow.style.backgroundColor = positions[0].imgBackground
      })
      break
    case 2:
      for(let value in positions) {
        $imgContainer.style.backgroundColor = positions[1].imgBackground
        $textContainer.style.background = positions[1].background
        $gallery.setAttribute('src', positions[1].url)
      }
      $dots[1].classList.add('active')
      $dots[0].classList.remove('active')
      $arrows.forEach(arrow => {
        arrow.style.backgroundColor = positions[1].imgBackground
      })
      break
    case 3:
      for(let value in positions) {
        $imgContainer.style.backgroundColor = positions[2].imgBackground
        $textContainer.style.background = positions[2].background
        $gallery.setAttribute('src', positions[2].url)
      }
      $dots[2].classList.add('active')
      $dots[1].classList.remove('active')
      $arrows.forEach(arrow => {
        arrow.style.backgroundColor = positions[2].imgBackground
      })
      break
    case 4:
      for(let value in positions) {
        $imgContainer.style.backgroundColor = positions[3].imgBackground
        $textContainer.style.background = positions[3].background
        $gallery.setAttribute('src', positions[3].url)
      }
      $dots[3].classList.add('active')
      $dots[2].classList.remove('active')
      $arrows.forEach(arrow => {
        arrow.style.backgroundColor = positions[3].imgBackground
      })
      break
    case 5:
      for(let value in positions) {
        $imgContainer.style.backgroundColor = positions[4].imgBackground
        $textContainer.style.background = positions[4].background
        $gallery.setAttribute('src', positions[4].url)
      }
      $dots[4].classList.add('active')
      $dots[3].classList.remove('active')
      $arrows.forEach(arrow => {
        arrow.style.backgroundColor = positions[4].imgBackground
      })
      break
  }
}

$arrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    arrow.getAttribute('id') === 'right-arrow' ? id > 4 ? id = 1 : id++ : null
    arrow.getAttribute('id') === 'left-arrow' ? id > 1 ? id-- : id = 5 : null
    window.innerWidth > 768 ? carousel() : carouselMobile()
  })
})

let slide = false

$slide.addEventListener('click', () => {
  if(!slide) {
    positions.id = setInterval(function() {
      (id < 5) ? id++ : id = 1
      window.innerWidth > 768 ? carousel() : carouselMobile()
    }, 1500)
    $slide.innerHTML = 'STOP'
    slide = true
  }
  else {
    clearInterval(positions.id)
    $slide.innerHTML = 'SLIDE'
    slide = false
  }
})
