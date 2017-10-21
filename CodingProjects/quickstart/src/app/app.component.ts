import {Component} from '@angular/core';
import {Hero} from './hero.component'


const heroes: Hero[] =  [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }

];

@Component({
   selector: 'app',
   template: `
     <ul class="container">
       <li class = "heroes" *ngFor="let x of hero" (click) = 'onSelect(x)' [class.selected] = "x === selectedHero">{{x.name}}</li>
     </ul>
     <herodetail [selectedHero]="selectedHero"></herodetail>
      `,
   styles: [`
      .container {
        padding: 40px;
        margin: 40px;
      }
      .heroes {
        width: 200px;
        height: 200px;
        padding: 20px;
        margin: 10px;
        display: inline-block;
        border: 1px dashed black;
        
      }
      .selected {
        font-weight: 500;
        background-color: #0f7595;
      }
     
   `]
})

export class AppComponent {
  hero: Hero[] = heroes;
  selectedHero: Hero;

  onSelect(x: Hero) : void{
    this.selectedHero = x;
  }
}
