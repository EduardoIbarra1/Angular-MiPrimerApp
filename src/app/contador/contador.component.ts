import { Component } from "@angular/core"

@Component({
    selector:'app-contador',
    template: `
    <h1>{{title}}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>
    <button (click)="contador(base)">+ {{base}}</button>
    <span>{{numero}}</span>
    <button (click)="contador(-base)">- {{base}}</button>
    `
})

export class ContadorComponent {
    title:string = 'Contador App';
    numero:number = 10;
    base:number = 5
  
    contador = (num:number)=> this.numero = this.numero + num;
    
}