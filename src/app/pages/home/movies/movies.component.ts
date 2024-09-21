import { Component, OnInit } from '@angular/core';
import { GoogleMapComponent } from '../../../commons/components/organisms/google-maps/google-maps.component';
import { CommonModule } from '@angular/common';
import { MovieMapsService } from '../../../core/services/maps/api/movie-maps.service';
import { GoogleMapsService } from '../../../core/services/maps/api/google-maps.service';
import { ICinemaCoordinates, IMovie } from '../../../core/services/maps/interfaces/list-movies.interface';
import { IDropdownListItem } from '../../../commons/components/atoms/dropdown-list/dropdown-list.component';
import { MoviesGridComponent } from '../../../commons/components/molecules/movies-grid/movies-grid.component';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  standalone: true,
  imports: [CommonModule, GoogleMapComponent, MoviesGridComponent]
})
export class MoviesComponent implements OnInit {

  constructor(private _movieMapsService: MovieMapsService, private _mapService: GoogleMapsService) { }

	item: any = null;
  movies: IMovie[] = [];
  genres: IDropdownListItem[] = [];

  ngOnInit() {
    this.getMovies();
  }

  ngAfterViewInit(): void {
  }

  getMovies(){
    this._movieMapsService
        .getMovies()
        .subscribe((res) =>{
          this.movies = res.movies;
          this.generateGenresDropdown(res.genres);
        });
  }

  generateGenresDropdown(items: string[]){
    this.genres = [];
    items.forEach((genre) => {
      var item : IDropdownListItem = {
        label: genre,
        value: genre
      };
      this.genres.push(item);
    });
  }
}
