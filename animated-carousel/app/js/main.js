// make an array of object blocks of directions/positions to create elements
// loop through and assign the value as attributes

// set id for each objects, count up/down with clicking the arrows.
// assign values as attributes for each ID.

const positions = [
  {
    id: 0,
    textTop: '50%',
    imgTop: '50%',
    textLeft: '31%',
    imgLeft: '74%',
    url: 'https://res.cloudinary.com/liquidohr/image/upload/v1521308653/sample1.jpg',
    background: 'linear-gradient(-135deg, #ad0103 20%, #6d0204)',
    imgBackground: '#fc5617'
  },
  {
    id: 1,
    textTop: '60%',
    imgTop: '50%',
    textLeft: '70%',
    imgLeft: '24%',
    url: 'https://res.cloudinary.com/liquidohr/image/upload/v1521316854/sample2.jpg',
    background: 'linear-gradient(-135deg, #1e6161 20%, #081b1b)',
    imgBackground: '#2d9191'
  },
  {
    id: 2,
    textTop: '45%',
    imgTop: '52%',
    textLeft: '70%',
    imgLeft: '26%',
    url: 'https://res.cloudinary.com/liquidohr/image/upload/v1521322158/sample3.jpg',
    background: 'linear-gradient(-135deg, #feb301 20%, #644602)',
    imgBackground: '#ffb206'
  },
  {
    id: 3,
    textTop: '55%',
    imgTop: '48%',
    textLeft: '32%',
    imgLeft: '74%',
    url: 'https://res.cloudinary.com/liquidohr/image/upload/v1521322417/sample4.jpg',
    background: 'linear-gradient(-135deg, #1b7100 20%, #104400)',
    imgBackground: '#37E600'
  },
  {
    id: 4,
    textTop: '40%',
    imgTop: '48%',
    textLeft: '69%',
    imgLeft: '23%',
    url: 'https://res.cloudinary.com/liquidohr/image/upload/v1521322952/sample5.jpg',
    background: 'linear-gradient(-135deg, #346bac 20%, #0d2e59)',
    imgBackground: '#50a3ff'
  }
]

const $left = document.querySelector('#left-arrow')
const $right = document.querySelector('#right-arrow')
const $textContainer = document.querySelector('.text-container')
const $imgContainer = document.querySelector('.img-container')
const $gallery = document.querySelector('#gallery')

const $arrows = [$left, $right]
let id = 1

// const setAttributes = (element, attributes) => {
//   for (let key in attributes) {
//     element.setAttribute(key, attributes[key])
//   }
// }

$arrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    arrow.getAttribute('id') === 'right-arrow' ? id++ : null
    arrow.getAttribute('id') === 'left-arrow' ? id-- : null
    console.log(id);
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

            $arrows.forEach(arrow => {
              arrow.style.backgroundColor = positions[0].imgBackground
            })
          }
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

            $arrows.forEach(arrow => {
              arrow.style.backgroundColor = positions[1].imgBackground
            })
          }
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

            $arrows.forEach(arrow => {
              arrow.style.backgroundColor = positions[2].imgBackground
            })
          }
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

            $arrows.forEach(arrow => {
              arrow.style.backgroundColor = positions[3].imgBackground
            })
          }
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

            $arrows.forEach(arrow => {
              arrow.style.backgroundColor = positions[4].imgBackground
            })
          }
          break
      }
  })
})
