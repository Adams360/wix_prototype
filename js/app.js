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
