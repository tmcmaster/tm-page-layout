import {html} from 'lit-html';
import {LitElement, css} from 'lit-element';

//import '@wonkytech/polymer-elements';

// console.log('DOM-MODULE', window.customElements.get('dom-module'));
// console.log('APP-DRAWER', window.customElements.get('app-drawer'));
//
// if (window.customElements.get('app-drawer') === undefined) {
//     console.log('Loading Polymer Elements');
//     import('@wonkytech/polymer-elements').then(() => {
//         console.log('APP-DRAWER', window.customElements.get('app-drawer'));
//     });
// }

window.customElements.define('tm-page-layout', class extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            heading: {type: String}
        }
    }

    constructor() {
        super();
        this.heading = 'Hello World!';
    }

    static get styles() {
        // language=CSS
        return css `
            :host {
              display: inline-block;
            }
            h2 {
                color: gray;
            }
        `;
    }

    // noinspection JSUnusedGlobalSymbols
    render() {
        return html`
          <h2>${this.heading}</h2>
          <paper-input label="Paper Input" value="value...."></paper-input>
        `;
    }
});
