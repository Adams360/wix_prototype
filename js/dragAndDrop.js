// Drag and Drop Functionality
const elements = document.querySelectorAll('.element');
const stage = document.querySelector('.stage');

let element = null;

// Elements Listener
elements.forEach((element) => {
    element.addEventListener('dragstart', dragStart);
    element.addEventListener('dragend', dragEnd);
    element.addEventListener('ondrag', drag);
});

// Stage Listeners
stage.addEventListener('dragover', dragOver);
stage.addEventListener('dragenter', dragEnter);
stage.addEventListener('dragleave', dragleave);
// stage.addEventListener('drop', dragDrop);

// Drag Functions
function dragStart() {
    console.log('START');
    this.className += ' hold';
 
}
function dragEnd() {
    console.log('END');
    this.className = 'element';
    stage.className = 'stage';
}

function dragOver(e) {
    e.preventDefault();
}


function dragEnter(e) {
    e.preventDefault();
    this.className += ' hover';
}

function dragleave(e) {
    e.preventDefault();
    this.className = 'stage';
}
function drag(e) {
    e.preventDefault();
    alert(123);
}

