import { AfterViewInit, Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { AppModule } from '../../../../app.module';
import { IMovie } from '../../../../core/services/maps/interfaces/list-movies.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DropdownListComponent, IDropdownListItem } from '../../atoms/dropdown-list/dropdown-list.component';
import { SearchFieldComponent } from '../../atoms/search-field/search-field.component';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../../../../app-material.module';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailModalComponent } from '../movie-detail-modal/movie-detail-modal.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'mm-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss'],
  standalone: true,
  imports: [AppMaterialModule, CommonModule, DropdownListComponent, SearchFieldComponent, MovieDetailModalComponent]
})
export class MoviesGridComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  @Input() movies: IMovie[] = [];
  @Input() genres: IDropdownListItem[] = [];
  filterMovies: IMovie[] = [];
  displayedColumns: string[] = ['id', 'title', 'description', 'genre', 'details'];
  dataSource = new MatTableDataSource<IMovie>([]);
  search: string = '';
  genreSelection: string[] = [];
  collectionSize = 0;
  readonly dialog = inject(MatDialog);

  constructor() { }

  ngAfterViewInit() {
    this.filterMovies = this.movies;
    this.fetchData();
  }

  onDropdownChange(event: any){
    this.genreSelection = event;
    this.filterData();
  }

  onChangeSearch(event: any){
    this.search = event;
    this.filterData();
  }

  fetchData(){
    this.dataSource = new MatTableDataSource<IMovie>(this.filterMovies);
    this.collectionSize = this.filterMovies.length;
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  filterData(){
    this.filterMovies = this.movies.filter((movie) =>
      (this.search == null || this.search == undefined || this.search.length == 0 ? true : movie.title.toLowerCase().includes(this.search.toLowerCase()) || movie.description.toLowerCase().includes(this.search.toLowerCase())) &&
      (this.genreSelection.length == 0 ? true : this.genreSelection.includes(movie.genre))
    );
    this.fetchData();
  }

  openDetail(id: number){
    var movie = this.movies.find(x => x.id == id);
    const dialogRef = this.dialog.open(MovieDetailModalComponent, {
      data: {movie: movie},
      width: '80vh',
      height: '80vh'
    });
  }
}
