'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert('Просмотрено мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		alert('Вы классческий зритель');
	} else if (personalMovieDB.count >= 30) {
		alert('Вы киноман');
	} else {
		alert('Произошла ошибка');
	}
}

detectPersonalLevel();

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		let quastionMovie = prompt('Один из последних просмотренных фильмов?', '');
		let questionGrade = +prompt('На сколько оцените его по шкале от 1 - 10?', '');
	
		if (quastionMovie === '' || quastionMovie === null || quastionMovie.length > 50 
			|| questionGrade === '' || questionGrade === null || isNaN(questionGrade) || questionGrade > 10 ) {
			i--;
		} else {
			personalMovieDB.movies[quastionMovie] = questionGrade;
		}
	}
}

rememberMyFilms();

function showMyDB(privat) {
	if (!privat) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <=3; i++) {
		const quastionGenre = prompt(`Ваш любимый жанр под номером ${i}`, 'Введите жанр');
		if (quastionGenre != '' && quastionGenre != null && quastionGenre != 'Введите жанр' && quastionGenre.length < 50 ) {
			let genre = quastionGenre.replace('Введите жанр', '');
			personalMovieDB.genres[i-1] = genre;
		} else {
			i--;
		}
	}
}

writeYourGenres();


  
