import { Component } from '@angular/core';
import { lat, lon } from '../google-maps/google-maps.component';
import { FirebaseService } from '../firebase.service';
import { StorageService, storage } from '../storage.service';
import { ref, uploadBytes } from 'firebase/storage';

@Component({
  selector: 'app-new-registro',
  templateUrl: './new-registro.component.html',
  styleUrls: ['./new-registro.component.css']
})
export class NewRegistroComponent {
  form = false;
  conttxt = "Menú";
  late = lat;
  long = lon;
  pueblo: string = "Aculco";
  tipo: string = "Restaurante";
  nombre: string = "";
  contenido: string = "";
  logo: string = "";
  logourl: any;
  descripcion: string = "";
  lunes: string = "";
  martes: string = "";
  miercoles: string = "";
  jueves: string = "";
  viernes: string = "";
  sabado: string = "";
  domingo: string = "";
  festivo: string = "";

  actCoords(){
    this.late = lat;
    this.long = lon;
  }

  getPueblo(value:string):void{
    this.pueblo = value;
  }
  getTipo(value:string):void{
    this.tipo = value;
  }
  setCont(){
    if(this.tipo=="Restaurante"){
      this.conttxt = "Menú";
    }else if(this.tipo=="Artesanias" || this.tipo=="Tiendas de ropa"){
      this.conttxt = "Productos";
    }else if(this.tipo=="Hotel" || this.tipo=="Servicios Turisticos"){
      this.conttxt = "Servicios";
    }
  }
  getNombre(value:string):void{
    this.nombre = value;
  }
  getContenido(value:string):void{
    this.contenido = value;
  }
  onFileSelected(event: any){
    const file:File = event.target.files[0];
    if(file){
      this.logo = file.name;
      this.nuevaFoto(file, this.logo);
    }

  }
  getDescripcion(value:string):void{
    this.descripcion = value;
  }
  getLunes(value:string):void{
    this.lunes = value;
  }
  getMartes(value:string):void{
    this.martes = value;
  }
  getMiercoles(value:string):void{
    this.miercoles = value;
  }
  getJueves(value:string):void{
    this.jueves = value;
  }
  getViernes(value:string):void{
    this.viernes = value;
  }
  getSabado(value:string):void{
    this.sabado = value;
  }
  getDomingo(value:string):void{
    this.domingo = value;
  }
  getFestivo(value:string):void{
    this.festivo = value;
  }

  registro(){
    this.firebaseService.newNegocio(this.pueblo,lat,lon,this.tipo,
      this.nombre,this.descripcion,this.contenido,this.logourl,this.lunes,
      this.martes,this.miercoles,this.jueves,this.viernes,this.sabado,
      this.domingo,this.festivo);
      setInterval(this.refresh,2000);
  }

  refresh(): void{
    window.location.reload()
  }

  nuevaFoto(file: any, name: string){
    let storageRef = ref(storage, name);
    uploadBytes(storageRef, file).then((snapshot) =>{
    });
    this.logourl = 'https://firebasestorage.googleapis.com/v0/b/'+storageRef.bucket+'/o/'+storageRef.fullPath+'?alt=media';
  }

  constructor(public firebaseService: FirebaseService){ }
}
