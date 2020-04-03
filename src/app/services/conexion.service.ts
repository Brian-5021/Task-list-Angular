import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Tareas { name: string; }

@Injectable({
  providedIn: 'root'
})


export class ConexionService {

  private itemsCollection: AngularFirestoreCollection<Tareas>;
  items: Observable<Tareas[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Tareas>('tareas');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Tareas;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listaitems() {
 return this.items;
  }
}
