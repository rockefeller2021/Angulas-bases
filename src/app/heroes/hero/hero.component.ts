import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iroman';
  public age: number = 45;

  get capitalizeName(): string{
    return this.name.toUpperCase();
  }

  HeroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  changeName() :void{
      this.name = 'black adan'
  }

  changeAge() :void{
    this.age = 300;
  }

  reset():void{
    this.name = 'iroman';
    this.age = 45;
  }

}
