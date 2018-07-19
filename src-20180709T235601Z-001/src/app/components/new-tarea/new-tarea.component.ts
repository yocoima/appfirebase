import { Component, OnInit } from '@angular/core';
import { ConexionbdService } from '../../servicios/conexionbd.service';
import { Tareas } from '../../models/tareas';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-tarea',
  templateUrl: './new-tarea.component.html'
})
export class NewTareaComponent implements OnInit {

  constructor(private conexionbdService: ConexionbdService) { }

  ngOnInit() {
    this.conexionbdService.getTareas();
    this.resetForm()
  }

  guardar(newTarea: NgForm){
    this.conexionbdService.insertTarea(newTarea.value);
    this.resetForm(newTarea);

  }

  resetForm(newTarea?: NgForm){
    if(newTarea != null)
    newTarea.reset();
    this.conexionbdService.selectedTarea = new Tareas();
  }
}
