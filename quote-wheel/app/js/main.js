async function getData() {
  const response = await fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30')
  return await response.json()
}

const $messageBox = document.querySelector('.message-box')

const decoder = (function() {
  var element = document.createElement('div')
  function decodeHTMLEntities (str) {
    if(str && typeof str === 'string') {
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '')
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '')
      element.innerHTML = str
      str = element.textContent
      element.textContent = ''
    }
    return str
  }
  return decodeHTMLEntities
})()

const quoteDisplay = () => {
  getData()
  .then((data) => {
    console.log(data);
    let randomQuote = data[Math.floor(Math.random() * data.length)]
    $messageBox.innerHTML = decoder(randomQuote.content.slice(3, -5)) + "</br> - " + randomQuote.title
  })
}

quoteDisplay()
