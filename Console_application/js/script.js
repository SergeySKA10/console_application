'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for(let i = 0; i < 2; i++) {
	let quastionMovie = prompt('Один из последних просмотренных фильмов?', '');
	let questionGrade = prompt('На сколько оцените его?', '');
	personalMovieDB.movies[quastionMovie] = questionGrade;
}