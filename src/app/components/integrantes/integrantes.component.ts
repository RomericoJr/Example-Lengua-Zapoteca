import { Component } from '@angular/core';
import { integrante } from 'src/app/interface';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})



export class IntegrantesComponent {
  integrantes:integrante[]= [
    {
      nombre: 'OROZCO VASQUEZ ROMERICO JUNIOR',
      puesto: 'lider del equipo',
      imagen: 'https://i.imgur.com/0Z1Q2Z8.jpg'
    },
    {
      nombre: 'GARCIA GARCIA JESUS',
      puesto: 'Tester',
      imagen: 'https://i.imgur.com/0Z1Q2Z8.jpg'
    },
    {
      nombre: 'MIJANGOS HERNANDEZ EDUARDO',
      puesto: 'Analista',
      imagen: 'https://i.imgur.com/0Z1Q2Z8.jpg'
    },
    {
      nombre: 'MATEOS QUERO JORGE LUIS',
      puesto: 'Desarrollador',
      imagen: 'https://i.imgur.com/0Z1Q2Z8.jpg'
    },
    {
      nombre: 'MONTES ANTONIO RODRIGO URIEL',
      puesto: 'Diseñador',
      imagen: 'https://i.imgur.com/0Z1Q2Z8.jpg'
    }
  ];

}
