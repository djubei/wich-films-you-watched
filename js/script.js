"use strict"

const numberOfFilms = +prompt('сколько фильмов вы посмотрели', '0')
console.log(`numberOfFilms`, numberOfFilms)
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}
console.log(`personalMovieDB`, personalMovieDB)
const lastFilmNameFirst = prompt('один из последних фильмов который вы посмотрели', '')
const ratingOfFilmFirst = +prompt('на сколько его оцените', '0')
const lastFilmNameSecond = prompt('один из последних фильмов который вы посмотрели', '')
const ratingOfFilmSecond = +prompt('на сколько его оцените', '0')

personalMovieDB.movies[lastFilmNameFirst] = ratingOfFilmFirst
personalMovieDB.movies[lastFilmNameSecond] = ratingOfFilmSecond

console.log(`personalMovieDB`, personalMovieDB)