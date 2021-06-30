class CandidateImage extends HTMLElement {
    connectedCallback() {
        this.shadow = this.attachShadow({
            mode: 'open'
        });
        this.setupImage();
        this.addWinnerText();

        // Add our styles
        this.createStyles();
    }

    /**
     * This function is called whenever an attribute we are observing
     * is updated.  We specify which attributes we want to observe
     * in `observedAttributes`
     * 
     * @param {String} name attribute name (i.e. 'type' or 'command')
     * @param {String} oldValue the previous value
     * @param {String} newValue the new value we want
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.shadow) {
            return;
        }
        const span = this.shadow.querySelector('.winner');

        if (name === 'type') {
            this.shadow.removeChild(span);
            this.addWinnerText();
        }
    }

    /**
     * Returns an array of the element attributes we want to observe
     */
    static get observedAttributes() {
        return ['status'];
    }

    /**
     * We create the actual image element and append it to our shadow dom
     */
    setupImage() {
        // Create an image
        const image = new Image();

        // Find the right image for the provided name
        if (this.getAttribute('name') === 'pete') {
            image.src = 'https://miro.medium.com/max/1004/1*UZ59MTMT6uN89D_Z-WwlEg.png';
        } else if (this.getAttribute('name') === 'bernie') {
            image.src = 'https://miro.medium.com/max/1004/1*UZ59MTMT6uN89D_Z-WwlEg.png';
        }

        // We can use appendChild just like we do the normal document
        this.shadow.appendChild(image);
    }

    /**
     * Adds text to our image indicating a winner
     */
    addWinnerText() {
        // If the `status` is winner then add some text
        if (this.getAttribute('status') === 'winner') {
            const winnerSpan = document.createElement('span');
            winnerSpan.classList.add('winner');
            winnerSpan.innerText = 'Winner!!!';
            this.shadow.appendChild(winnerSpan);
        }
    }

    /**
     * Create the styles for our candidates
     * We do this as a normal string rather than using @import
     * since it is not supported in all browsers
     * 
     * (same for new CSSStyleSheet, which is only supported in Chrome)
     */
    createStyles() {
        const styleTemplate = `
      <style>
      .winner {
        position: absolute;
        color: white;
        font-size: 30px;
        top: 10px;
        left: 160px;
        height: 30px;
        font-weight: 800;
        text-transform: uppercase;
      }
      </style>`;
        this.shadow.innerHTML = styleTemplate;
    }
};

/**
 * Register our custom element
 */
window.addEventListener('DOMContentLoaded', () => {
    customElements.define('candidate-image', CandidateImage);
});