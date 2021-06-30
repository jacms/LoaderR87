class CandidateImage extends HTMLElement {
  connectedCallback() {
    console.log('Adding a candidate!');

    this.shadow = this.attachShadow({
      mode: 'open'
    });

    // Create an image
    const image = new Image();
    image.src = 'https://miro.medium.com/max/500/1*UznZLDo9mw4Hk3LB7ZE1fg.jpeg';

    // We can use appendChild just like we do the normal document
    this.shadow.appendChild(image);

    // If the status is `winner` then add some text
    if (this.getAttribute('status') === 'winner') {
      this.addWinnerText();
    }

    // Add our styles
    this.createStyles();
  }

  /**
   * Adds text to our image indicating a winner
   */
   addWinnerText() {
    const winnerSpan = document.createElement('span');
    winnerSpan.classList.add('winner');
    winnerSpan.innerText = 'Winner!!!';
    this.shadow.appendChild(winnerSpan);
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
      this.shadow.appendChild(styleTemplate);
    }
}
function alan()
{
    let algo ={


    }
    const suma =`delete ${1+1}`;
}

/**
 * Register our custom element
 */
window.addEventListener('DOMContentLoaded', () => {
  customElements.define('candidate-image', CandidateImage);
});