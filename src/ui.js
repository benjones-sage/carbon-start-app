function accordionToggle(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    var accordionContentContainer = target.nextElementSibling;
    accordionContentContainer.classList.toggle('open');
    accordionContentContainer.classList.toggle('closed');
}