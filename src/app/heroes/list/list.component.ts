import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    public heroName: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk'];

    public deleteHero?: string;

    removeLastHero():void{
      this.deleteHero = this.heroName.pop();
    }
}
