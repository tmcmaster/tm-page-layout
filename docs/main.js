import {html, render} from "./web_modules/lit-html.js";

let sites = {
    'src': 'https://github.com/tmcmaster/tm-page-layout',
    'pika': 'https://www.pika.dev/npm/@wonkytech/tm-page-layout',
    'npm': 'https://www.npmjs.com/package/@wonkytech/tm-page-layout',
    'docs': 'https://github.com/tmcmaster/tm-page-layout#readme'
};

render(html`
    <style>
        body {
          padding: 0;
          margin: 0;
        } 
        tm-page-layout {
            height: 80vh;
        }
    </style>
    <tm-examples heading="Page Layout" .sites="${sites}">
        <section title="With Drawer">
            <style>
                html {
                    //--tm-page-layout-max-width: 1000px;
                    --tm-page-layout-header-height: 30vh;
                    --tm-page-layout-header-image: url('images/Beach-Banner.jpg');
                    --tm-page-layout-header-color: white;
                }
                span.main {
                    height: 1000px;
                    display:inline-block;
                }
            </style>
            <tm-page-layout title="TITLE" drawer>
                <div slot="drawer">DRAWER MENU</div>
                <div slot="toolbar">TOOLBAR MENU</div>
                <div slot="header-top">HEADER TOP</div>
                <div slot="header-middle">HEADER MIDDLE</div>
                <div slot="header-bottom">HEADER BOTTOM</div>
                <div slot="main-top">MAIN TOP</div>
                <div slot="main-middle">
                    <span class="main">MAIN MIDDLE</span>
                </div>
                <div slot="main-bottom">MAIN BOTTOM</div>
            </tm-page-layout>
        </section>
        <section title="Without Drawer">
            <style>
                html {
                    //--tm-page-layout-max-width: 1000px;
                    --tm-page-layout-header-height: 30vh;
                    --tm-page-layout-header-image: url('images/Beach-Banner.jpg');
                    --tm-page-layout-header-color: white;
                }
                span.main {
                    height: 1000px;
                    display:inline-block;
                }
            </style>
            <tm-page-layout title="TITLE">
                <div slot="drawer">DRAWER MENU</div>
                <div slot="toolbar">TOOLBAR MENU</div>
                <div slot="header-top">HEADER TOP</div>
                <div slot="header-middle">HEADER MIDDLE</div>
                <div slot="header-bottom">HEADER BOTTOM</div>
                <div slot="main-top">MAIN TOP</div>
                <div slot="main-middle">
                    <span class="main">MAIN MIDDLE</span>
                </div>
                <div slot="main-bottom">MAIN BOTTOM</div>
            </tm-page-layout>
        </section>
    </tm-examples>
`, document.querySelector('body'));