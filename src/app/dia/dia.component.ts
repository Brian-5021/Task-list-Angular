import { Component, OnInit } from '@angular/core';
import { ConexionService } from './../services/conexion.service';


@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css']
})
export class DiaComponent implements OnInit {

  listaTareas: any;

  constructor(private conexion: ConexionService) {
    this.listaTareas = conexion.listaitems();
   }

  ngOnInit(): void {
  }

}
