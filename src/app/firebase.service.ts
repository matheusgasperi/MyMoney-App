/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  collectionName = 'my-money';

  constructor(
  private firestore: AngularFirestore
  ) { }

 getTrans() {
   return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  add_Trans(data){
   return this.firestore.collection(this.collectionName).add(data);
  }

  delete_trans(id) {
  return this.firestore.doc(this.collectionName + '/' + id).delete();
  }

  get_single_transaction(id){
    return this.firestore.collection(this.collectionName).doc(id).valueChanges();
  }
  update_trans(id,data){
    return this.firestore.doc(this.collectionName + '/' + id).update(data);
  }

}
