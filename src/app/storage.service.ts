import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes } from "firebase/storage";

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
export const storage = getStorage(app);

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }
}
