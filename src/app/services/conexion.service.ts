import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

export interface Tareas { name: string; }

@Injectable({
  providedIn: 'root'
})


export class ConexionService {

  private itemsCollection: AngularFirestoreCollection<Tareas>;
  items: Observable<Tareas[]>;
  private itemDoc: AngularFirestoreDocument<Tareas>;

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

  agregartareas(items: Tareas) {
    this.itemsCollection.add(items);
  }

  eliminartarea(items) {
      this.itemDoc = this.afs.doc<Tareas>(`tareas/${items.id}`);
      this.itemDoc.delete();
  }

  editartarea(items) {
    this.itemDoc = this.afs.doc<Tareas>(`tareas/${items.id}`);
    this.itemDoc.update(items);
  }

}
