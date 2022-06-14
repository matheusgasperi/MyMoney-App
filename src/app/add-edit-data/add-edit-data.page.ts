/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prefer-const */
import { FirebaseService } from './../firebase.service';
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/semi */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-data',
  templateUrl: './add-edit-data.page.html',
  styleUrls: ['./add-edit-data.page.scss'],
})
export class AddEditDataPage implements OnInit {

  isEdit: boolean;
  tipo: string;
  titulo: string;
  descricao: string;
  valor: string;
  data: string;
  id: any;
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firebaseService: FirebaseService
  ) {
    this.route.params.subscribe((data: any) => {
      this.id = data.type;
      if(data.type == 'add'){
        this.isEdit = false;
      }else{
        this.isEdit = true;
        this.firebaseService.get_single_transaction(data.type).subscribe((data: any) => {
          console.log(data);
          this.tipo = data.tipo;
          this.titulo = data.titulo;
          this.descricao = data.descricao;
          this.valor = data.valor;
          this.data = data.data;

        })
      }
    })
   }

  ngOnInit() {

  }

  addTrans() {
    this.loading = true;
    if(this.isEdit) {
      this.updateTrans();
      return;
    }
    let data = {
      tipo: this.tipo,
      titulo: this.titulo,
      descricao: this.descricao,
      valor: this.valor,
      data: this.data,

    }
    this.firebaseService.add_Trans(data).then((res: any) => {
      console.log(res);
      this.loading = false;
      this.router.navigateByUrl('/home')
    })
  }

  updateTrans() {
    let data = {
      tipo: this.tipo,
      titulo: this.titulo,
      descricao: this.descricao,
      valor: this.valor,
      data: this.data,
    }
  this.firebaseService.update_trans(this.id, data).then((res: any) => {
    console.log(res);
    this.router.navigateByUrl('/home');
  })
}
}
