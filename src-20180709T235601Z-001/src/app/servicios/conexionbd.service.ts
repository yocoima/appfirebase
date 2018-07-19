import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Tareas } from '../models/tareas';

// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';

@Injectable()
export class ConexionbdService {

    tareaList: AngularFireList<any>;
    selectedTarea: Tareas = new Tareas();
    constructor(private firebase: AngularFireDatabase){}

// metodo obtener las tareas de la base de datos
    getTareas(){
      return this.tareaList = this.firebase.list('tareas');
    }

    insertTarea(tareas: Tareas){
      this.tareaList.push({
        clasificacion: tareas.clasificacion,
        tarea: tareas.tarea,
        importancia: tareas.importancia,
        periodo:tareas.periodo
      });
    }
    updateTarea(tareas: Tareas){
      this.tareaList.update(tareas.$key,{
        clasificacion: tareas.clasificacion,
        tarea: tareas.tarea,
        importancia: tareas.importancia,
        perido:tareas.periodo
      });
    }

    deleteTarea($id_tarea: string){
      this.tareaList.remove($id_tarea);

    }

    // loginGoogle(){
    //   return this.afAuth.auth.signInWithPopup (new firebase.auth.GoogleAuthProvider())
    // }

  //   getAuth(){
  //   return this.afAuth.authState.map(auth => auth);
  // }

    // logout(){
    //   return this.afAuth.auth.signOut();
    // }


}
