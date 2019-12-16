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
            title: {type: String}
        }
    }

    constructor() {
        super();
        this.title = '';
    }

    // slot[name=slot1]  ~ .siblingB
    // slot[name=slot2]::slotted(.selectMeA)
    // slot[name=slot2]::slotted(.selectMeC[name=myName])

    static get styles() {
        // language=CSS
        return css `
            :host {
                display: inline-block;
                --max-width: 1200px;
                --min-width: 900px;
                --toolbar-height: 60px;
            }
            app-drawer-layout {
                width: 100vw;
                height: 100vh;
                box-sizing: border-box;
                /*border: solid green 4px;*/
            }

            app-drawer {
                display: inline-block;
                padding: 2vmin;
                //--app-drawer-width: 200px;
            }
            
            slot[name=drawer] {
                padding: 2vmin;
                box-sizing: border-box;
                border: solid green 4px;
            }

            app-header-layout {
                overflow: hidden;
                width:100%;
                height: 100%;
                box-sizing: border-box;
                //border: solid red 2px;
            }

            app-header {
                width: 100%;
                height: 30vmin;
                box-sizing: border-box;
                overflow: hidden;
                color: white;
            }

            app-header > app-toolbar {
                height: 10vmin;
                box-sizing: border-box;
                /*border: solid red 2px;*/
            }
            
            app-header > section {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 20vmin;
                padding:2vmin;
                box-sizing: border-box;
                /*border: solid red 2px;*/
            }
            
            app-header > section > header {
                flex: available;
                box-sizing: border-box;
                /*border: solid red 2px;*/
            }

            app-header > section > main {
                flex: auto;
                width: 100%;
                box-sizing: border-box;
                /*border: solid red 2px;*/
            }
            
            app-header > section > footer {
                flex: available;
                box-sizing: border-box;
                /*border: solid red 2px;*/
            }
            

            app-header-layout > section {
                display: inline-block;
                display:flex;
                flex-direction: column;
                min-height: calc(100vh - 30vmin);
                padding:2vmin;
                box-sizing: border-box;
                //border: solid blue 2px;
            }

            app-header-layout > section > header {
                display: inline-block;
                flex: available;
            } 
            app-header-layout > section > main {
                display: inline-block;
                flex: auto;
            }
            app-header-layout > section > footer {
                display: inline-block;
                flex: available;
            }
            
            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: -1;
            }
            
            app-toolbar > h1 {
                color: white;
            }

            slot[name=toolbar] {
                color: white;
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
            <app-drawer-layout force-narrow>
                <app-drawer slot="drawer" swipe-open >
                    <slot name="drawer"></slot>
                </app-drawer>
                <app-header-layout has-scrolling-region responsive-width="1280px">
                    <app-header slot="header" condenses reveals effects="waterfall">
                        <app-toolbar>
                            <paper-icon-button icon="menu" drawer-toggle></paper-icon-button>
                            <h1 main-title>${this.title}</h1>
                            <slot name="toolbar"></slot>
                        </app-toolbar>
                        <section>
                            <header><slot name="header-top"></slot></header>
                            <main><slot name="header-middle"></slot></main>
                            <footer><slot name="header-bottom"></slot></footer>                        
                        </section>
                        <img src="../docs/images/Beach-Banner.jpg" />
                    </app-header>
                    <section>
                        <header><slot name="main-top"></slot></header>
                        <main><slot name="main-middle"></slot></main>
                        <footer><slot name="main-bottom"></slot></footer>                        
                    </section>
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
