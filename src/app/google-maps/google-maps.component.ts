import { Component } from '@angular/core';

export let lat = 0;
export let lon = 0;

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent{

  origen = {lat:23.353201, lng:-101.876046};
  zoom = 4.8;
  display?: google.maps.LatLngLiteral;
  Latitud = 0;
  Longitud = 0;

  markerOptions: google.maps.MarkerOptions = {draggable: true};
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.pop();
    this.markerPositions.push(event.latLng.toJSON());
    this.Latitud = event.latLng.lat();
    this.Longitud = event.latLng.lng();
    lat = event.latLng.lat();
    lon = event.latLng.lng();
  }
  actCoords(event: google.maps.MapMouseEvent){
    this.Latitud = event.latLng.lat();
    this.Longitud = event.latLng.lng();
    lat = event.latLng.lat();
    lon = event.latLng.lng();
  }

  constructor(){
  }
}
