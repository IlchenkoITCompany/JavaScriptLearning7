const numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    private: false,
};

const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
const resultOfFilm = prompt('На сколько Вы его оцените?');

personalMovieDB.movie[lastFilm] = resultOfFilm;

console.log(personalMovieDB);