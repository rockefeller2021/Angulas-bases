import { Component } from "@angular/core";

/*Decorador del componente*/

@Component({
  selector: 'app-counter',
  template: `<h1>Hola Counter</h1>
  <h2>Segundo componente</h2>
  <h4>Counter: {{counter}}</h4>
  <button (click)="incrementa(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="incrementa(-1)">-1</button>

  `
})

/*Declaracion de la clase*/
export class CounterComponet{

  public counter: number = 10;
  incrementa(value: number):void{
    this.counter += value;
 }

 reset():void{
   this.counter = 10;
 }




}
