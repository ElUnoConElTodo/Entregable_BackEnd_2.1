const moviesDb = [{
	id:1,
	title: "Pacific Rim",
    description: "Lorem Ipsum",
    year: 2012,
    director: "Guillermo del Toro"
}]

let movieId = 1

const findAllMovies = async () => {
    return moviesDb
};

const findMovieById = async (id) => {
    const movie = moviesDb.find(movieItem => movieItem.id === id)
    return movie
}

const createMovie = async (movieObj) => {
    const newMovie = {
        id: movieId++,
        title: movieObj.title || 'Untitle',
        description: movieObj.description || 'Undescription',
        year: movieObj.year || 2023,
        director: movieObj.director || 'Anonymous'

    }

    moviesDb.push(newMovie)
    return newMovie
};

module.exports = {
    findAllMovies,
    findMovieById,
    createMovie
}
