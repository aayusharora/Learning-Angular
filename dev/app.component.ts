import {Component} from 'angular2/core';
import {MainComponent} from './main.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <main></main>
    `,
    directives: [ MainComponent]
})
export class AppComponent {

}
