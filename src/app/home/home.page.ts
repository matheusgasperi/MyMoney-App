/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable arrow-body-style */
import { FirebaseService } from './../firebase.service';
/* eslint-disable @typescript-eslint/semi */
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  moneyTrans: any;
  constructor(
    public firebaseService: FirebaseService
  ) {
     this.firebaseService.getTrans().subscribe((res) => {
       this.moneyTrans = res.map(e => {
         return {
           id: e.payload.doc.id,
           tipo: e.payload.doc.data()['tipo'],
           titulo: e.payload.doc.data()['titulo'],
           descricao: e.payload.doc.data()['descricao'],
           valor: e.payload.doc.data()['valor'],
           data: e.payload.doc.data()['data'],
         }
       })
       console.log(this.moneyTrans);
     },(err: any) => {
       console.log(err);
     })
  }

  delete_trans(transId){
   this.firebaseService.delete_trans(transId).then((res: any) => {
     console.log(res)
   })
  }
}
