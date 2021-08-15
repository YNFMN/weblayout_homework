window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('burger__list-active');
    document.querySelector('#burger').classList.toggle('burger__button-active')
  })
})
