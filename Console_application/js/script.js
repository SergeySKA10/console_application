'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

if (personalMovieDB.count < 10) {
	alert('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	alert('Вы классческий зритель');
} else if (personalMovieDB.count >= 30) {
	alert('Вы киноман');
} else {
	alert('Произошла ошибка');
}


for (let i = 0; i < 2; i++) {
	let quastionMovie = prompt('Один из последних просмотренных фильмов?', '');
	let questionGrade = prompt('На сколько оцените его?', '');

	if (quastionMovie === '' || quastionMovie === null || quastionMovie.length > 50 
		|| questionGrade === '' || questionGrade === null || questionGrade.length > 50) {
		i--;
	} else {
		personalMovieDB.movies[quastionMovie] = questionGrade;
	}
}


