let man_laptop = document.querySelector('.parallax_man_laptop');
let about_line = document.querySelector('.parallax_about_line');
let about_line_two = document.querySelector('.parallax_about_line_two');
let notebook = document.querySelector('.parallax_notebook');

window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    man_laptop.style.transform = 'translate( -' + x * 15 + 'px, -' + y * 30 + 'px)';
    about_line.style.transform = 'translate(+' + x * 2 + 'px, +' + y * 30 + 'px)';
    about_line_two.style.transform = 'translate(+' + x * 2 + 'px, +' + y * 30 + 'px)';
    notebook.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 50 + 'px)';
});


document.querySelector('.footer-scrollUp').onclick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
document.getElementById('im').onclick = () => {
    window.scrollTo({top: getTopElement('.about-text_block-title'), behavior: 'smooth'});
}
document.getElementById('skills').onclick = () => {
    window.scrollTo({top: getTopElement('.skills'), behavior: 'smooth'});
}
document.getElementById('experience').onclick = () => {
    window.scrollTo({top: getTopElement('.experience-work__title'), behavior: 'smooth'});
}


function getTopElement(elementName) {
    let element = document.querySelector(elementName);
    var bodyRect = document.body.getBoundingClientRect(),
        elemRect = element.getBoundingClientRect();
    return elemRect.top - bodyRect.top;
}
