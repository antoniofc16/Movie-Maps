import { EventEmitter, Injectable } from '@angular/core';
import { IGoogleMapsCoordinate, ItemPolygon } from '../interfaces/map.interface';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
	map: any;
	directionsService: any;
	directionsRenderer: any;

	transparentIcon = {
		url: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E', // Imagen SVG transparente
		size: new google.maps.Size(1, 1), // Tamaño de la imagen (1x1 píxel)
		anchor: new google.maps.Point(0.5, 1) // Punto de anclaje del icono (centro inferior)
	};

	constructor() {
		this.directionsService = new google.maps.DirectionsService();
		this.directionsRenderer = new google.maps.DirectionsRenderer();
	}
	/**Método para icnicializar el Mapa */
	initMap(mapElement: any): void {
		this.map = mapElement.googleMap;
	}

  //Metodo para cambiar la posicion en el mapa
  changePositionMap(lat: number, lng: number): void {
    this.map.setCenter({ lat: lat, lng: lng });
  }

	//Método para agregar un Marcador (Pointer) en el mapa
	addMarker(position: any, title: string): void {
		new google.maps.Marker({
			position: position,
			map: this.map,
			title: title
		});
	}

	// Función para borrar todos los marcadores dibujados en el mapa
	clearDrawnMarkers(): void {
	}
}
