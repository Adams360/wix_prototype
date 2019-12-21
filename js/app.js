const categories = document.querySelectorAll('.category');

categories.forEach((category) => {
    category.addEventListener('click', (e) => {
        let content = e.target.nextElementSibling;
        e.target.classList.toggle('close');

        if (content.style.maxHeight) {
            // Category is open, close it.
            content.style.maxHeight = null;
        } else {
            // Category is closed
            content.style.maxHeight = content.scrollHeight + "px";
            // scrollHeight = the height required for the content
        }
    })
});


// Popper
var refs = document.querySelectorAll('.icon');
var popup = document.querySelector('.modal');
var closeBtn = document.querySelector('.close');

refs.forEach((ref) => {
  ref.addEventListener('click', () => {
    popup.style.visibility = "visible";
    popup.style.opacity = 1;

    let popper = new Popper(ref, popup, {
      placement: 'bottom',
      onCreate: function(data) {
        console.log(data)
},
      modifiers: {
        offset: {
          enabled: true,
          offset: '0,6'
        },
        arrow: {
          enabled: true,
          order: 1000
        },
        flip: {
          enabled: false
        }
      }
    })
  })
})


// Drag and Drop.
const elements = document.querySelectorAll('.btn');
const stage = document.querySelector('.stage');
let element = null;

console.log('stage', stage)
// Elements Listener
elements.forEach((element) => {
    element.addEventListener('dragstart', dragStart);
    element.addEventListener('dragend', dragEnd);
})

// Stage Listeners
stage.addEventListener('dragover', dragOver);
stage.addEventListener('dragenter', dragEnter);
stage.addEventListener('dragleave', dragleave);
stage.addEventListener('drop', dragDrop);

// Drag Functions
function dragStart(e) {
    console.log('START');
    this.className += ' hold';
    element = e.target;
}
function dragEnd() {
    console.log('END');
    stage.className = 'stage';
    this.className = 'btn';
}

function dragOver(e) {
    e.preventDefault();
    console.log(e.type + " : dragging over the stage");
}
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}
function dragleave(e) {
    this.className = 'stage';
}
function dragDrop(e) {
    console.log(e.type + " : dropped the item to the stage");
    const element_copy = element.cloneNode();
    element_copy.innerText = element.innerText
    stage.append(element_copy);
    element = null;
}