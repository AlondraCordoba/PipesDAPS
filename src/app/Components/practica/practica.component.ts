import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css']
})
export class PracticaComponent implements OnInit {

  valor = 123456789;
  cantidadDecimalInput = '';
  cantidadDecimalInput1 = '';
  cantidadDecimalInput2 = '';
  cantidadDecimalInput3 = '';

  // cantidad = numero decimal a convertir.
  cantidadDecimal = 200;
  cantidadDecimalDos = 10;
  millones = 0;
  miles = 0;
  resto = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
