import {html} from 'lit-html';
import {LitElement, css} from 'lit-element';

window.customElements.define('tm-page-layout', class extends LitElement {
    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            title: {
                type: String
            },
            drawer: {
                type: Boolean
            }
        };
    }

    constructor() {
        super();
        this.title = '';
        this.drawer = false;
    }

    notifyResize() {
        this.shadowRoot.getElementById('header-layout').notifyResize();
    } // noinspection JSUnusedGlobalSymbols


    static get styles() {
        // slot[name=slot1]  ~ .siblingB
        // slot[name=slot2]::slotted(.selectMeA)
        // slot[name=slot2]::slotted(.selectMeC[name=myName])
        // language=CSS  noinspection CssInvalidHtmlTagReference
        return css`
            :host {
                display: inline-block;
                width:100%;
                height: 100%;
              
                --max-width: 1200px;
                --toolbar-height: 60px;
                --header-height: 30vh;
                --header-image: none;
                --header-color: darkgray;

                -webkit-touch-callout: none; /* iOS Safari */
                -webkit-user-select: none; /* Safari */
                -khtml-user-select: none; /* Konqueror HTML */
                -moz-user-select: none; /* Old versions of Firefox */
                -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
            }

            app-drawer-layout {
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                /*border: solid green 4px;*/
            }

            app-drawer {
                display: inline-block;
                padding: 2vmin;
            }

            slot[name=drawer] {
                padding: 2vmin;
                box-sizing: border-box;
                //border: solid green 4px;
            }

            app-header-layout {
                overflow: hidden;
                width: 100%;
                height: 100%;
                box-sizing: border-box;
            }

            app-header {
                width: 100%;
                /*noinspection CssUnresolvedCustomProperty,CssInvalidFunction*/
                height: var(--tm-page-layout-header-height, --header-height);
                box-sizing: border-box;
                overflow: hidden;
                /*noinspection CssUnresolvedCustomProperty,CssInvalidFunction*/
                color: var(--tm-page-layout-header-color, --header-color);
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
                padding: 2vmin;
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
                display: flex;
                flex-direction: column;
                min-height: calc(100vh - 30vmin);
                padding: 2vmin;
                box-sizing: border-box;
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

            app-header > img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: -1;
                /*noinspection CssUnresolvedCustomProperty,CssInvalidFunction*/
                content: var(--tm-page-layout-header-image, --header-image);
            }

            app-toolbar > h1 {
            / / color: var(--tm-page-layout-header-color, --header-color);
            }

            slot[name=toolbar] {
                color: white;
            }

            /*noinspection CssUnusedSymbol*/
            div.toolbar {
                display: inline-block;
                box-sizing: border-box;

            }
            mwc-icon.menu {
                margin-right: 10px;
            }
        `;
    } // noinspection JSUnusedGlobalSymbols


    render() {
        console.log('app-header-layout: ', window.customElements.get('app-header-layout') !== undefined);
        console.log('app-header: ', window.customElements.get('app-header') !== undefined);
        console.log('app-toolbar: ', window.customElements.get('app-toolbar') !== undefined);
        console.log('app-drawer-layout: ', window.customElements.get('app-drawer-layout') !== undefined);
        console.log('app-drawer: ', window.customElements.get('app-drawer') !== undefined);
        return html`
            <app-drawer-layout force-narrow>
                ${this.drawer ? html`
                    <app-drawer id="drawer" slot="drawer" swipe-open >
                        <slot name="drawer"></slot>
                    </app-drawer>
                ` : html``}
 
                <app-header-layout id="header-layout" has-scrolling-region responsive-width="1280px">
                    <app-header slot="header" condenses reveals effects="waterfall">
                        <app-toolbar>
                            ${this.drawer ? html`
                                <mwc-icon class="menu" @click="${e => this.openDrawer()}">menu</mwc-icon>
                            ` : html``}
                            <h1 main-title>${this.title}</h1>
                            <div class="toolbar"><slot name="toolbar"></slot></div>
                        </app-toolbar>
                        <section>
                            <header><slot name="header-top"></slot></header>
                            <main><slot name="header-middle"></slot></main>
                            <footer><slot name="header-bottom"></slot></footer>                        
                        </section>
                        <img alt="Banner Image"/>
                    </app-header>
                    <section>
                        <header><slot name="main-top"></slot></header>
                        <main><slot name="main-middle"></slot></main>
                        <footer><slot name="main-bottom"></slot></footer>                        
                    </section>
                </app-header-layout>
            </app-drawer-layout>      
        `;
    }

    closeDrawer() {
        this.shadowRoot.getElementById('drawer').close();
    }

    openDrawer() {
        this.shadowRoot.getElementById('drawer').open();
    }

});

