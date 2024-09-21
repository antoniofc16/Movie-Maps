export interface IListMovies {
    movies: IMovie[];
    genres: string[];
}

export interface IMovie{
    id: number;
    title: string;
    description: string;
    genre: string;
    coordinates : ICinemaCoordinates;
}

export interface ICinemaCoordinates {
    lat: number;
    lng: number;
}

