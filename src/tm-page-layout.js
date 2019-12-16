import {html} from 'lit-html';
import {LitElement, css} from 'lit-element';

import '@wonkytech/polymer-elements';

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

            app-header-layout {
                overflow: hidden;
                width:100vw;
                height: 100vh;
                box-sizing: border-box;
                border: solid red 2px;
            }

            app-header {
                width: 100%;
            }
            
            app-header > header {
                margin-top: -100px;
            }

            app-toolbar {
                
            }
            article {
                display: flex;
                flex-direction: column;
            }
            header {
                flex:auto;
            }
            nav {
                
            }
            
            main {
                flex: available;
                width: 100%;
                display: inline-block;
                height: 2000px;
                background: lightpink;
            }

            footer {
                flex:auto;
                background: lightcyan;
                height: 100px;
            }

            span.main {
                display: inline-block;
                height: 2000px;
                background: lightpink;
            }

            div.header {
                background: lightblue;
                width: 100%;
                height: 200px;
            }
            
            div.body {
                width: 500px;
                height: 500px;
                background: lightcyan;
            }
            
            app-drawer {
                //--app-drawer-width: 200px;
            }
        `;
    }

    // noinspection JSUnusedGlobalSymbols
    render() {
        console.log('app-header-layout: ', window.customElements.get('app-header-layout'));
        console.log('app-header: ', window.customElements.get('app-header'));
        console.log('app-toolbar: ', window.customElements.get('app-toolbar'));
        console.log('app-drawer-layout: ', window.customElements.get('app-drawer-layout'));
        console.log('app-drawer: ', window.customElements.get('app-drawer'));
        return html`
            <app-drawer-layout>
                <app-drawer slot="drawer" swipe-open>
                    <h3>Menu</h3>
                    <paper-input label="AAA" value="aaa"></paper-input>
                    <slot name="draw"></slot>
                </app-drawer>
                <app-header-layout has-scrolling-region responsive-width="1280px">
                    <app-header slot="header" condenses reveals effects="waterfall">
                        <app-toolbar>
                            <paper-icon-button icon="menu" drawer-toggle></paper-icon-button>
                            <div main-title>App name</div>
                            <slot name="toolbar">
                                <a href="#">One</a>
                                <a href="#">Two</a>
                                <a href="#">Three</a>
                            </slot>
                        </app-toolbar>
                        <header>
                            <slot name="header">
                                <div class="header"></div>
                            </slot> 
                        </header>
                    </app-header>
                    <main>
                        <slot name="main"><span class="main">MAIN</span></slot>
                    </main>
                    <footer>
                        <slot name="footer"><span>FOOTER</span></slot>
                    </footer>
                </app-header-layout>
            </app-drawer-layout>
            
            
            <!--app-header-layout has-scrolling-region>
                <app-header slot="header" condenses effects="waterfall">
                    <app-toolbar>
                        <h4 main-title>Application Name</h4>
                        <nav>
                            <a href="#">One</a>
                            <a href="#">Two</a>
                            <a href="#">Three</a>
                        </nav>
                    </app-toolbar>
                    <main>
                        <slot name="header">
                            <div class="header"></div>
                        </slot> 
                    </main>
                </app-header>
                
                <article>
                    <header>
                        <nav>
                            <slot name="nav">
                                <vaadin-tabs>
                                    <vaadin-tab>One</vaadin-tab>
                                    <vaadin-tab>Two</vaadin-tab>
                                    <vaadin-tab>Three</vaadin-tab>
                                </vaadin-tabs>
                            </slot> 
                        </nav>
                    </header>
                    <main>
                        <slot name="main"><span class="main">MAIN</span></slot>
                    </main>
                    <footer>
                        <slot name="footer"><span>FOOTER</span></slot>
                    </footer>
                </article>
            </app-header-layout-->
            
            
        `;
    }
});
