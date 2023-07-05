import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, onValue,  } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCzOTVlwkKOmu31NeRY7IUeeeOYKQZ9_pM",
  authDomain: "erdeptdesarrolloweb15601.firebaseapp.com",
  projectId: "erdeptdesarrolloweb15601",
  storageBucket: "erdeptdesarrolloweb15601.appspot.com",
  messagingSenderId: "610506133309",
  appId: "1:610506133309:web:f0326ef2401ad661487f54",
  measurementId: "G-30ZMKQYHGN",
  databaseURL: "https://erdeptdesarrolloweb15601-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService{
  constructor(){ }
  newNegocio(pueblo: string, lat: number, lon: number, tipo: string,
      nombre: string, desc: string, contenido: string, foto: any,
      lun: string, mar: string, mie: string, jue: string, vie: string,
      sab: string, dom: string, fes: string) {
    const db = getDatabase();
    push(ref(db, 'negocios/'), {
      pueblo: pueblo,
      coord: {lat,lon},
      tipo: tipo,
      nombre: nombre,
      desc: desc,
      cont: contenido,
      logo: foto,
      horario: {lun,mar,mie,jue,vie,sab,dom,fes}
    });
  }
}
