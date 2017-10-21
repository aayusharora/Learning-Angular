/**
 * Created by aayusharora on 10/21/17.
 */

import {Component,Input} from '@angular/core'
import {Hero} from './hero.component'

@Component({
  selector: 'herodetail',
  template: `<div *ngIf="selectedHero">
    <h2>{{selectedHero.name}} details!</h2>
    <div><label>id: </label>{{selectedHero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedHero.name" placeholder="name"/>
    </div>
  </div>`
})

export class HerodetailComponent {
   @Input() selectedHero: Hero;

}
