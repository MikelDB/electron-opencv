class VideoViewer extends HTMLElement {
    constructor() {
	super();
        this.src = '';
	this.text = '';
    }

    connectedCallback() {
        this.src = this.getAttribute('src') || this.src;
        this.text = this.getAttribute('text') || this.text;
        this.innerHTML = `<h1>${this.text}</h1><img src="${this.src}">`;
    }
}

window.customElements.define('video-viewer', VideoViewer);
