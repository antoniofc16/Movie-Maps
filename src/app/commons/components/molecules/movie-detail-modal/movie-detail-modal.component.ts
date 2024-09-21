import { Component, Inject, inject, Input, OnInit } from '@angular/core';
import { AppModule } from '../../../../app.module';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../../../../app-material.module';
import { IMovie } from '../../../../core/services/maps/interfaces/list-movies.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GoogleMapComponent } from '../../organisms/google-maps/google-maps.component';
import { GoogleMapsService } from '../../../../core/services/maps/api/google-maps.service';
import { timeout } from 'rxjs';

@Component({
  selector: 'mm-movie-detail-modal',
  templateUrl: './movie-detail-modal.component.html',
  styleUrls: ['./movie-detail-modal.component.scss'],
  standalone: true,
  imports: [AppMaterialModule, GoogleMapComponent, CommonModule]
})
export class MovieDetailModalComponent implements OnInit {
  movie?: IMovie;
	zoomMap = 20;

  constructor(private _mapService: GoogleMapsService, @Inject(MAT_DIALOG_DATA) public data: {movie: IMovie}, public dialogRef: MatDialogRef<MovieDetailModalComponent>) { }

  ngOnInit() {
    setTimeout(() => {
      this.setData();
    },100)
  }

  setData(){
    console.log(this.data)
    if (this.data != null){
      this.movie = this.data?.movie;
      var coordinates = new google.maps.LatLng(this.movie.coordinates.lat, this.movie.coordinates.lng);
      this._mapService.addMarker(coordinates, this.movie.title);
      this._mapService.changePositionMap(this.movie.coordinates.lat, this.movie.coordinates.lng);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
