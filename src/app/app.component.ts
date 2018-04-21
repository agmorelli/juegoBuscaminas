import { Component } from '@angular/core';
import { BuscaMinas } from './clases/busca-minas';
import { NgIf } from '@angular/common';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

miJuego:BuscaMinas;
nivel=5;


public Jugar()
{
  this.miJuego=new BuscaMinas(this.nivel)

}



 
 
}
