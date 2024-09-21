import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListMovies } from '../interfaces/list-movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieMapsService {

constructor(private _client: HttpClient) { }

getMovies(){
  var headers = new HttpHeaders();
  headers = headers.append('Content-Type','application/json');
  headers = headers.append('Access-Control-Allow-Origin','http://localhost:4200/');
  var apiUrl = "https://upcstorage2022.blob.core.windows.net/public/movies_with_coordinates.json"
  return this._client.get<IListMovies>(apiUrl, { headers: headers });
}

}
