import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.css']
})
export class ClaseComponent implements OnInit {

  title = 'Pipes';
  nombre = 'Alondra';
  saldo = 1234567.45;
  dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  articulos = [
    {
      clave: 1,
      descripcion: 'Aceite',
      precio: 31
    },
    {
      clave: 2,
      descripcion: 'Huevo',
      precio: 80
    }
  ];
  diaDeHoy = new Date ();

  vector = [1, 2, 3, 4, 5, 6, 7];

  precio = 25;
  tasaCambio = 12.5;

  constructor() { }

  ngOnInit(): void {
  }

}
