/**
 * Created by aayusharora on 10/19/17.
 */

import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component ({
    selector: 'quiz',
    template: `
               <input type="text" #name (keyup) = "0">
               <p>{{name.value}} is playing</p>
               <section
                 [ngClass]= "{
                   solved: sec1name.value == input1 && sec2name.value == input2 && sec3name.value == input3 && sec4name.value == input4
                 }"
               >
               <h4> Here goes your quiz | {{sec1name.value == input1 && sec2name.value == input2 && sec3name.value == input3 && sec4name.value == input4 ? "You win": "Give it a Try!!"}}</h4>
               <input type="text" #sec1name (keyup) = "0">
               <input type="text" #sec2name (keyup) = "0">
               <input type="text" #sec3name (keyup) = "0">
               <input type="text" #sec4name (keyup) = "0">
               </section>  
    `,

   styleUrls: ['src/css/app.css']


})

export class QuizComponent implements OnInit{
    input1: number;
    input2: number;
    input3: number;
    input4: number;

    ngOnInit() {
      this.input1 = Math.round(Math.random());
      this.input2 = Math.round(Math.random());
      this.input3 = Math.round(Math.random());
      this.input4 = Math.round(Math.random());

      console.log(this.input1, this.input2, this.input3, this.input4);
    }

}
