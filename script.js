
let keys = document.querySelectorAll('.key');

keys.forEach(key => {
 key.addEventListener('click', playNote);
});

function playNote(e) {
 let key = e.target;
 let note = document.getElementById(key.dataset.note);
 key.classList.add('active');
 note.currentTime = 0;
 note.play();
 note.addEventListener('ended',() => {
  key.classList.remove('active');
 });
}






   document.addEventListener('click', function (event) {

    // игнорирование событий, которые произошли не на данной кнопке
    if (!event.target.hasAttribute('data-toggle-fullscreen')) return;
 
    // если элемент уже в полноэкранном режиме, выйти из него
    // В противном случае войти в полный экран
    if (document.fullscreenElement) {
     document.exitFullscreen();
    } else {
     document.documentElement.requestFullscreen();
    }
 
   }, false);