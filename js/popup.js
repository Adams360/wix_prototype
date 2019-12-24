// The Elements Icons, the modal that pops and the close button on the modal.
const refs = document.querySelectorAll('.element');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');




refs.forEach((ref) => {
    ref.addEventListener('click', () => {
        modal.classList.add('fade-in');

        // popper.js functionality
        let popper = new Popper(ref, modal, {
            placement: 'bottom-end',
            onCreate: function(data) {
              console.log(data)
      },
            modifiers: {
              offset: {
                enabled: true,
                offset: '0,8'
              },
              arrow: {
                enabled: true,
                order: 1000
              },
              flip: {
                enabled: false
              },
              preventOverflow: {
                boundariesElement: panel,
            },
            }
          })

          closeBtn.addEventListener('click', () => {
            modal.classList.remove('fade-in');
        })
        
  

    });
});
