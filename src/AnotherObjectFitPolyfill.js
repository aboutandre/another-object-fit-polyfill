'use strict';

export class AnotherObjectFitPolyfill {
    constructor(els, styleClass) {
        this.els = els;
        this.styleClass = styleClass;
    }

    init() {
        if (document.documentMode || /Edge/.test(navigator.userAgent)) {
            const elements = document.querySelectorAll(this.els);
            elements.forEach(e => {
                const imageEl = e.querySelector('img');
                if (imageEl.src.length > 0) {
                    const polyElNode = document.createElement('div');
                    polyElNode.classList.add(this.styleClass);
                    polyElNode.style.backgroundImage = `url('${imageEl.src}')`;
                    imageEl.parentNode.appendChild(polyElNode);
                    imageEl.style.display = 'none';
                }
            });
        }
    }
}
