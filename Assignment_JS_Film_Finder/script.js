const moviesLC = movies.map((movie) => {
    movie.title = movie.title.toLowerCase()
    return movie;
});

if (document.querySelector('input[name="film-filter"]')) {
    document.querySelectorAll('input[name="film-filter"]')
        .forEach((movie) => {
            movie.addEventListener('change', function (event) {
                const item = event.target.value;
                if (item === 'all') {
                    const allMovies = moviesLC.filter((movie) => movie.title);
                    const allMoviesImdbId = allMovies.map((movie) => movie.imdbID);
                    const allMoviesPoster = allMovies.map((movie) => movie.poster);
                    addMoviesToDom(allMoviesImdbId, allMoviesPoster);
                } else if (item === 'latest') {
                    const latest = moviesLC.filter((movie) => movie.year >= 2014);
                    const latestImdbId = latest.map((movie) => movie.imdbID);
                    const latestPoster = latest.map((movie) => movie.poster);
                    addMoviesToDom(latestImdbId, latestPoster);
                } else if (item === 'avengers') {
                    const avengers = moviesLC.filter((movie) => movie.title.includes('avengers'));
                    const avengersImdbId = avengers.map((movie) => movie.imdbID);
                    const avengersPoster = avengers.map((movie) => movie.poster);
                    addMoviesToDom(avengersImdbId, avengersPoster);
                } else if (item === 'xmen') {
                    const xmen = moviesLC.filter((movie) => movie.title.includes('x-men'));
                    const xmenImdbId = xmen.map((movie) => movie.imdbID);
                    const xmenPoster = xmen.map((movie) => movie.poster);
                    addMoviesToDom(xmenImdbId, xmenPoster);
                } else if (item === 'princess') {
                    const princess = moviesLC.filter((movie) => movie.title.includes('princess'));
                    const princessImdbId = princess.map((movie) => movie.imdbID);
                    const princessPoster = princess.map((movie) => movie.poster);
                    addMoviesToDom(princessImdbId, princessPoster);
                } else if (item === 'batman') {
                    const batman = moviesLC.filter((movie) => movie.title.includes('batman'));
                    const batmanImdbId = batman.map((movie) => movie.imdbID);
                    const batmanPoster = batman.map((movie) => movie.poster);
                    addMoviesToDom(batmanImdbId, batmanPoster);
                }
            });
        });
}

const addMoviesToDom = (id, url) => {
    const ul = document.getElementById('selectedMovies');
    ul.innerHTML = '';
    for (let index = 0; index < id.length; index++) {
        const newLi = document.createElement("li");
        const newA = document.createElement("a");
        const newImg = document.createElement("img");

        newLi.appendChild(newA);
        newA.appendChild(newImg);
        ul.appendChild(newLi);

        let link = "https://www.imdb.com/title/";
        let linkHref = link + id[index];

        newA.setAttribute("href", linkHref);
        newA.target = "_blank";
        newImg.setAttribute('width', 200);
        newImg.src = url[index];
    }
};