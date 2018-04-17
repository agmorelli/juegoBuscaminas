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

          this.miJuego=new Juego("augusto");



  
}

Saludar()
{
  alert("hola");
}
 
 
}
