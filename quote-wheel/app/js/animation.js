const slideIn = anime({
  targets: ['.message-container'],
  translateY: 550,
  duration: 200,
  delay: 300,
  easing: 'easeInOutSine'
})

const colors = [
  '#e6194b',
  '#3cb44b',
  '#ffe119',
  '#0082c8',
  '#f58231',
  '#911eb4',
  '#46f0f0',
  '#f032e6',
  '#d2f53c',
  '#fabebe',
  '#008080',
  '#e6beff',
  '#aa6e28',
  '#fffac8',
  '#800000',
  '#aaffc3',
  '#808000',
  '#ffd8b1',
  '#000080',
  '#808080'
]

$("#refresh").click(function () {
  $(".message-container")
    .fadeOut(100);
  $("#box1")
    .animate({
        top: "-110%"
    }, 10);
  $(".message-container")
    .fadeIn(10);
  $("#box1")
    .promise()
    .done(function() {
      $( this )
        .append( quoteDisplay() )
        .animate({
          top: "-200px"
        }, 300)
      });
});

const drawLine = function() {
  $('.path').attr('class', 'path path-animation');
  $('.path').attr('d', "M 200 300 L 100 100 L 300 100 z");
  $('#line1').attr('stroke', colors[Math.floor(Math.random() * colors.length)]);
  $('#line2').attr('stroke', colors[Math.floor(Math.random() * colors.length)]);
  $('#line3').attr('stroke', colors[Math.floor(Math.random() * colors.length)]);
  setTimeout(function() {
    $('.path').attr('class', 'path');
  }, 600);
}

$(document).ready(drawLine)
$("#refresh").click(drawLine);
