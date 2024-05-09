import { Component, OnInit } from '@angular/core';
import { MapMarker } from '@angular/google-maps';

interface LatLngLiteral {
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  zoom = 10; 
  center: google.maps.LatLngLiteral = { lat: -27.5969, lng: -48.5495 }; 
  options: google.maps.MapOptions = {
    zoomControl: true, 
    mapTypeControl: true, 
    streetViewControl: true, 
    fullscreenControl: true, 
  };
  
  
  endereco: string[] = [
    'Rua mazzei, 123',
    'Avenida Antonello da Messina, 456',
    'Praça jaçanã, 789',
    'Alameda pêssego, 321',
    'Rua flor de maio, 555',
    'Rua augusta, 777',
    'Travessa Alto Grande, 49',
    'Rua Comendador Antonio Antunes, 180',
    'Beco das Araras, 666',
    'Viela da Lua, 444'
  ];

  markers: MapMarker[] = [];
  centroMapa: LatLngLiteral = { lat: -27.5969, lng: -48.5495 }; 
  constructor() {}

  ngOnInit(): void {
    this.getCoordsForAllAddresses();
  
  }
  

  getCoordsForAllAddresses(): void {
    this.endereco.forEach(endereco => {
      this.getCoordByAddress(endereco);
    });
  }

  getCoordByAddress(endereco: string): void {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: endereco }, (result: any, status: any) => {
      if (status === 'OK' && result) {
        const coordsEndereco = result[0].geometry.location.toJSON();
        console.log(coordsEndereco);
        this.addMarker(coordsEndereco, endereco);
      } else {
        console.error('Erro ao obter coordenadas para o endereço:', endereco);
      }
    });
  }

  addMarker(coords: google.maps.LatLngLiteral, title: string): void {
    const marker = new google.maps.Marker({
      position: coords,
      label: { text: title },
      title: title,
      map: null, 
    });
    this.markers.push(marker as unknown as MapMarker); // Conversão para o tipo MapMarker
  }
  markMyPlace(): void {
    // Implemente a lógica para marcar o local desejado no mapa
    console.log('Marcando meu lugar no mapa!');
  }
}
