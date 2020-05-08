const moviesUrl = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'

fetch(moviesUrl)
    .then(res => res.json())
    .then(result => {
        const poorRatedMovies = result.filter(movie => movie.rating < 4);
        const badMovies = poorRatedMovies.map(movie => movie.title);
        console.log(badMovies)
        const poorRatedMoviesSince2000 = poorRatedMovies.filter(movie => movie.year >= 2000);
        const badMoviesSince2000 = poorRatedMoviesSince2000.map(movie => movie.title);
        console.log(badMoviesSince2000);
    })