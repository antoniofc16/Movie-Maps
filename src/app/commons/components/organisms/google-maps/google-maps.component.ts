import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMapsService } from '../../../../core/services/maps/api/google-maps.service';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule, MapInfoWindow } from "@angular/google-maps";
import { MovieMapsService } from '../../../../core/services/maps/api/movie-maps.service';

@Component({
  selector: 'mm-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
  standalone: true,
  imports: [CommonModule, GoogleMapsModule]
})
export class GoogleMapComponent implements OnInit, AfterViewInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
	@ViewChild('map') mapElement?: ElementRef;
  @Input() height: string = '100%';
  center: google.maps.LatLngLiteral = { lat: 40.3396862, lng: -100.9169296 }; // Center of US
  @Input() zoom = 8;
  markers: any[] = [];

  constructor(private _mapService: GoogleMapsService,
              private _movieMapsService: MovieMapsService) {
  }
  ngAfterViewInit(): void {
    this._mapService.initMap(this.mapElement);
  }

  ngOnInit(): void {
  }


}
