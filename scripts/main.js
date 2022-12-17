let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
    return numberOfFilms;
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    private: false,
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
        const resultOfFilm = prompt('На сколько Вы его оцените?');
    
        if (lastFilm != null && resultOfFilm != null && lastFilm != '' && resultOfFilm != '' && lastFilm.length <= 50) {
            personalMovieDB.movie[lastFilm] = resultOfFilm;
        } else {
            i--;
        }
    } 
    
    /* 
    let i = 0
    while (i < 2) {
        const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
        const resultOfFilm = prompt('На сколько Вы его оцените?');
    
        if (lastFilm != null && resultOfFilm != null && lastFilm != '' && resultOfFilm != '' && lastFilm.length <= 50) {
            personalMovieDB.movie[lastFilm] = resultOfFilm;
        } else {
            i--;
        }
        i++;
    } 
    */
    
    /* 
    let i = 0
    do {
        const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
        const resultOfFilm = prompt('На сколько Вы его оцените?');
    
        if (lastFilm != null && resultOfFilm != null && lastFilm != '' && resultOfFilm != '' && lastFilm.length <= 50) {
            personalMovieDB.movie[lastFilm] = resultOfFilm;
        } else {
            i--;
        }
        i++
    } while (i < 2);
    */
}

rememberMyFilms()


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Ваш любимый жанр номер ${i}`);
        if (genre != null && genre != '') {
            personalMovieDB.genres[i - 1] = genre;
        } else {
            i--;
        }
    }
}

writeYourGenres();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('вы посмотрели довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('вы киноман');
    } else {
        console.log('произошла ошибка');
    }
}

detectPersonalLevel()


function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB); 
    }
}

showMyDB()


