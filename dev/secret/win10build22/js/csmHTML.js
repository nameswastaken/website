"use strict";

class WindowElem extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        this.container = document.createElement('div');
        this.container.setAttribute('id', 'windowdev');
        const style = document.createElement('style');
        
        style.textContent = `
            #windowdev {
                padding: 0px;
                background-color: #f1f1f1;
                width: 400px;
                height: 300px;
                display: flex;
                flex-direction: column;
                position: absolute;
                resize: both;
                overflow: hidden;
            }
            button {
                font-family: 'Segoe Icon';
                color: black;
                border: none;
                outline: none;
                width: 35px;
                height: 35px;
                font-size: 11px;
            }
            .windowbuttons {
                display: flex;
                justify-content: right;
            }
            .titlebar {
                display: flex;
                flex-direction: row;
                font-size: 8px;
                font-family: 'Segoe UI Light';
                white-space: nowrap;
                flex-shrink: 0;
                height: 35px;
                width: 100%;
                justify-content: space-between;
                align-items: center;
            }
            .titlebar h1 {
                margin-left: 10px;
            }
            #internal-iframe {
                width: 100%;
                flex-grow: 1;
                outline: none;
                border: none;
            }
        `;
        shadow.appendChild(style);
        shadow.appendChild(this.container);
    }
    connectedCallback() {
        const ifrsrc = this.getAttribute('iframe-source') || 'did not catch';
        const title = this.getAttribute('window-name') || 'did not catch';
        const width = this.getAttribute('window-width') || '';
        const height = this.getAttribute('window-height') || '';
        const type = this.getAttribute('window-type') || '';
    this.container.innerHTML = `
        <div class="titlebar">
            <h1 id="win-title"></h1>
            <div class="windowbuttons">
                <button id="min" class="win-btn">&#xE921;</button>
                <button id="max" class="win-btn">&#xE922;</button>
                <button id="close" class="win-btn">&#xE8BB;</button>
            </div>
        </div>
        <iframe id="internal-iframe" src='${ifrsrc}'></iframe>
        `;
        this.container.querySelector('#close').addEventListener('click', () => {
            this.remove();
        }); // i hate this script so much but i had to use it here
    this.updateAttributes();
    
    draggable(this.container);
}
attributeChangedCallback(name, prev, current) {
    if (this.isConnected && prev !== current) {
        this.updateAttributes();
    }
}
updateAttributes() {
    const wintitle = this.container.querySelector('#win-title');
    if (wintitle) {
        wintitle.textContent = this.getAttribute('window-name') || 'error';
    }
}
}
WindowElem.observedAttributes = ['iframe-source', 'window-width', 'window-height', 'window-type', 'window-name'];
customElements.define('window-elem', WindowElem);