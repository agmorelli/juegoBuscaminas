import { Component } from '@angular/core';
import { Juego } from './clases/juego';
import { NgIf } from '@angular/common';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

miJuego:Juego;


Jugar()
{
  do {
          this.miJuego=new Juego("augusto");

  } while (this.miJuego.BuscaMinas.estado=true);

  
}

Saludar()
{
  alert("hola");
}
 
 
}
