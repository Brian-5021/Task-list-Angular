import { Component, OnInit } from '@angular/core';
import { ConexionService } from './../services/conexion.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css']
})
export class DiaComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];
  listaTareas: any;
  tareas: any = {
    nombre: ''
  };
  editarlista: any = {
  nombre: ''
  };
  config: any;
  collection = { count: 60, data: [] };

  constructor(private conexion: ConexionService) {
    this.listaTareas = conexion.listaitems();
   }

   agregar() {
     this.conexion.agregartareas(this.tareas);
     this.tareas.name = '';
   }

   eliminar(item) {
    this.conexion.eliminartarea(item);
   }

   editar(item) {
    this.editarlista = item;
   }

   agregaritemeditado() {
    this.conexion.editartarea(this.editarlista);
    }

  ngOnInit(): void {
  }

}
