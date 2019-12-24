// Elements Accordion Functionality
const categories = document.querySelectorAll('.category');
categories.forEach((category) => {
    category.addEventListener('click', (e) => {

        let content = e.target.nextElementSibling;
        e.target.classList.toggle('is-open');

        if (content.style.maxHeight ) {
            // Category is open, close it.
            content.style.maxHeight = null;
        } else {
            // Category is closed
            content.style.maxHeight = content.scrollHeight + "px";
            // scrollHeight = the height required for the content
        }
    })
});
// END OF Elements Accordion Functionality