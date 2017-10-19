import {Component} from 'angular2/core';
import {QuizComponent} from './quiz.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Play this quiz</h1>
        <quiz></quiz>
    `,
    directives: [QuizComponent]
})
export class AppComponent {

}
