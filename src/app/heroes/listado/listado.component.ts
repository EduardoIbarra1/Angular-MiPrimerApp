import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
    heroes:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Black Panter'];
    heroDelete:string = '';

    borrarHeroe() {
      console.log('borrando...');
      this.heroDelete  = this.heroes.pop() || ''    
    }
  }
