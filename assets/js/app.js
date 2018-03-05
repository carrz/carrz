Array.from(document.getElementsByClassName('letter')).forEach(letter => {
  letter.addEventListener('mouseover', (e) => {
    letter.classList.add('hovered')
  })
  letter.addEventListener('animationend', (e) => {
    letter.classList.remove('hovered')
  })
})

$(document).ready(function(){
  $('.scrollspy').scrollSpy();
  $('.parallax').parallax();

  $('span.text-change').typed({
    strings: ["Code + Coffee = <3"],
    typeSpeed: 60,
    backDelay: 600,
    callback: function () { $(this) }
});
});