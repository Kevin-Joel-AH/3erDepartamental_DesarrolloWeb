import { Component, OnInit } from '@angular/core';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase.service';

@Component({
  selector: 'app-consulta-api',
  templateUrl: './consulta-api.component.html',
  styleUrls: ['./consulta-api.component.css']
})
export class ConsultaApiComponent implements OnInit{
  negocio1: any;
  negocio2: any;
  negocio3: any;
  negocio4: any;
  negocio5: any;
  obj= ["-NZ9P4LJm-CR9vgKPLnc","-NZ9PcC9BITB5XUwVu4V","-NZ9QvpnMAee07VF4fDB","-NZ9Rw2wHRY8X0Ntomom","-NZ9SoNQ_hA0XUFb9Zax"];
  constructor(){ }
  getNegocio1(): void{
    onValue(ref(db, 'negocios/'+this.obj[0]), (snapshot) => {
      const data = snapshot.val();
      this.negocio1 = data;
      console.log(this.negocio1);
    });
  }
  getNegocio2(): void{
    onValue(ref(db, 'negocios/'+this.obj[1]), (snapshot) => {
      const data = snapshot.val();
      this.negocio2 = data;
      console.log(this.negocio2);
    });
  }
  getNegocio3(): void{
    onValue(ref(db, 'negocios/'+this.obj[2]), (snapshot) => {
      const data = snapshot.val();
      this.negocio3 = data;
      console.log(this.negocio3);
    });
  }
  getNegocio4(): void{
    onValue(ref(db, 'negocios/'+this.obj[3]), (snapshot) => {
      const data = snapshot.val();
      this.negocio4 = data;
      console.log(this.negocio4);
    });
  }
  getNegocio5(): void{
    onValue(ref(db, 'negocios/'+this.obj[4]), (snapshot) => {
      const data = snapshot.val();
      this.negocio5 = data;
      console.log(this.negocio5);
    });
  }
  loadNegocios(){
    this.getNegocio1();
    this.getNegocio2();
    this.getNegocio3();
    this.getNegocio4();
    this.getNegocio5();
  }
  ngOnInit(): void {
    this.loadNegocios();
  }
}
