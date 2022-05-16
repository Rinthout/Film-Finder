const addMoviesToDom = movies.map((movie) => movie.poster);
const moviesLowerCase = movies.map((movie) => movie.title.toLowerCase());

if (document.querySelector('input[name="film-filter"]')) {
    document.querySelectorAll('input[name="film-filter"]')
        .forEach((movie) => {
            movie.addEventListener('change', function (event) {
                const item = event.target.value;
                if (item === 'all') {
                    const allMovies = movies.filter((movie) => movie.title);
                    const allMoviesImdbId = allMovies.map((movie) => movie.imdbID);
                    const allMoviesPoster = allMovies.map((movie) => movie.poster);
                    console.log(allMoviesImdbId);
                    console.log(allMoviesPoster);
                } else if (item === 'latest') {
                    const latest = movies.filter((movie) => movie.year >= 2014);
                    const latestImdbId = latest.map((movie) => movie.imdbID);
                    const latestPoster = latest.map((movie) => movie.poster);
                    console.log(latestImdbId);
                    console.log(latestPoster);
                } else if (item === 'avengers') {
                    const avengers = movies.filter((movie) => movie.title.includes('Avengers'));
                    const avengersImdbId = avengers.map((movie) => movie.imdbID);
                    const avengersPoster = avengers.map((movie) => movie.poster);
                    console.log(avengersImdbId);
                    console.log(avengersPoster);
                } else if (item === 'xmen') {
                    const xmen = movies.filter((movie) => movie.title.includes('X-Men'));
                    const xmenImdbId = xmen.map((movie) => movie.imdbID);
                    const xmenPoster = xmen.map((movie) => movie.poster);
                    console.log(xmenImdbId);
                    console.log(xmenPoster);
                } else if (item === 'princess') {
                    const princess = movies.filter((movie) => movie.title.includes('Princess'));
                    const princessImdbId = princess.map((movie) => movie.imdbID);
                    const princessPoster = princess.map((movie) => movie.poster);
                    console.log(princessImdbId);
                    console.log(princessPoster);
                } else if (item === 'batman') {
                    const batman = movies.filter((movie) => movie.title.includes('Batman'));
                    const batmanImdbId = batman.map((movie) => movie.imdbID);
                    const batmanPoster = batman.map((movie) => movie.poster);
                    console.log(batmanImdbId);
                    console.log(batmanPoster);
                } else if (item === 'clear') {
                    const deleteMovieList = () => {
                        const deleteList = document.querySelector('main, ul');
                        deleteList.innerHTML = '';
                    };
                }
            });
        });
}




// addMoviesToDom.forEach((movie) => {
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

















// // alle titles in movie.js op lowerCase zetten
// const moviesLowerCase = movies.map((element) => {
//     element.title = element.title.toLowerCase()
//     return element;
// });

// // Add all movies to Dom
// const addMoviesToDom = movies.map((movie) => {
//     return movie.poster;
// });

// addMoviesToDom.forEach((movie) => {
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

