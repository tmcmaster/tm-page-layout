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
    </style>
    <tm-examples heading="tm-page-layout" .sites="${sites}">
        <section title="Example">
            <tm-page-layout></tm-page-layout>
        </section>
    </tm-examples>
`, document.querySelector('body'));