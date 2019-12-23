// Switch between menus
const addElementsBtn = document.getElementById('addElementsBtn');
const mainMenuWrapper = document.getElementById('mainMenuWrapper');
const panel = document.getElementById('panel');
const returnBtn = document.querySelector('.returnBtn');
const hideControlsBtn = document.querySelector('.hideControlsBtn');
const leftBar = document.querySelector('.leftbar');
const menuItems = document.querySelectorAll('.main-menu__item');


addElementsBtn.addEventListener('click', () => {
  mainMenuWrapper.classList.add('move-out');
  panel.classList.add('move-in');

      menuItems.forEach((menuItem) => {
        menuItem.classList.add('clipped');
      })

});

returnBtn.addEventListener('click', () => {
    mainMenuWrapper.classList.remove('move-out');
    panel.classList.remove('move-in');

   menuItems.forEach((menuItem) => {
       leftBar.addEventListener('transitionend', removedTransition);
       menuItem.classList.remove('clipped');
      })
});

function removedTransition(e) {
  if(e.propertyName !== 'transform') return;
  console.log(this);
}

hideControlsBtn.addEventListener('click', () => {


  stage.classList.toggle('hidden');
  leftBar.classList.toggle('move-out');

  setTimeout(() => {
    stage.classList.remove('hidden');
    leftBar.classList.remove('move-out');
  }, 1000);



})






