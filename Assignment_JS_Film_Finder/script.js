// alle titles in movie.js op lowerCase zetten
const moviesLowerCase = movies.map((element) => {
    element.title = element.title.toLowerCase()
    return element;
});

// Add all movies to Dom
const addMoviesToDom = movies.map((movie) => {
    return movie.poster;
});

addMoviesToDom.forEach((movie) => {
    const newLi = document.createElement("li");
    const newA = document.createElement("a");
    const newImg = document.createElement('img');
    selectedMovies.appendChild(newLi);
    newLi.appendChild(newA);
    newA.setAttribute('href', ('https://www.imdb.com/title/' + movies.imdbID));
    newA.setAttribute('target', 'blank');
    newA.appendChild(newImg);
    newImg.setAttribute('src', movie);
    newImg.setAttribute('width', 200);
});

// Per radiobutton

// Latest Movies
// const latest = movies.filter((movie) => movie.year >= '2014');
// const latestMovies = latest.map((movie) => {
//     return movie.poster;
// });

// latestMovies.forEach((movie) => {
//     const newLi = document.createElement("li");
//     const newA = document.createElement("a");
//     const newImg = document.createElement('img');
//     selectedMovies.appendChild(newLi);
//     newLi.appendChild(newA);
//     newA.setAttribute('href', ('https://www.imdb.com/title/' + movies.imdbID));
//     newA.setAttribute('target', 'blank');
//     newA.appendChild(newImg);
//     newImg.setAttribute('src', movie);
//     newImg.setAttribute('width', 200);
// });


// // Avengers
// const avengers = movies.filter((movie) => movie.title.includes('avengers'));
// const avengersMovies = avengers.map((movie) => {
//     return movie.poster;
// });

// avengersMovies.forEach((movie) => {
//     const newLi = document.createElement("li");
//     const newA = document.createElement("a");
//     const newImg = document.createElement('img');
//     selectedMovies.appendChild(newLi);
//     newLi.appendChild(newA);
//     newA.setAttribute('href', ('https://www.imdb.com/title/' + movies.imdbID));
//     newA.setAttribute('target', 'blank');
//     newA.appendChild(newImg);
//     newImg.setAttribute('src', movie);
//     newImg.setAttribute('width', 200);
// });

// // X-Men
// const xmen = movies.filter((movie) => movie.title.includes('x-men'));
// const xmenMovies = xmen.map((movie) => {
//     return movie.poster;
// });

// xmenMovies.forEach((movie) => {
//     const newLi = document.createElement("li");
//     const newA = document.createElement("a");
//     const newImg = document.createElement('img');
//     selectedMovies.appendChild(newLi);
//     newLi.appendChild(newA);
//     newA.setAttribute('href', ('https://www.imdb.com/title/' + movies.imdbID));
//     newA.setAttribute('target', 'blank');
//     newA.appendChild(newImg);
//     newImg.setAttribute('src', movie);
//     newImg.setAttribute('width', 200);
// });

// // Princess
// const princess = movies.filter((movie) => movie.title.includes('princess'));
// const princessMovies = princess.map((movie) => {
//     return movie.poster;
// });

// princessMovies.forEach((movie) => {
//     const newLi = document.createElement("li");
//     const newA = document.createElement("a");
//     const newImg = document.createElement('img');
//     selectedMovies.appendChild(newLi);
//     newLi.appendChild(newA);
//     newA.setAttribute('href', ('https://www.imdb.com/title/' + movies.imdbID));
//     newA.setAttribute('target', 'blank');
//     newA.appendChild(newImg);
//     newImg.setAttribute('src', movie);
//     newImg.setAttribute('width', 200);
// });

// // Batmen
// const batman = movies.filter((movie) => movie.title.includes('batman'));
// const batmanMovies = batman.map((movie) => {
//     return movie.poster;
// });

// batmanMovies.forEach((movie) => {
//     const newLi = document.createElement("li");
//     const newA = document.createElement("a");
//     const newImg = document.createElement('img');
//     selectedMovies.appendChild(newLi);
//     newLi.appendChild(newA);
//     newA.setAttribute('href', ('https://www.imdb.com/title/' + movies.imdbID));
//     newA.setAttribute('target', 'blank');
//     newA.appendChild(newImg);
//     newImg.setAttribute('src', movie);
//     newImg.setAttribute('width', 200);
// });

// // Create a evenlistener for each radiobutton>

