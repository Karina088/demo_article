'use strict';

const nameEl = document.getElementsByClassName('faq__title');

for (let i = 0; i < nameEl.length; i++) {
    nameEl[i].addEventListener("pointerdown", function () {
        this.classList.toggle("faq-active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
}

