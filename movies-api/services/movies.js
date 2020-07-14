const MongoLib = require('../lib/mongo')
class MoviesService{
    constructor(){
        this.collection = 'movies';
        this.mongoDB= new MongoLib();
    }
    async getMovies(){
        const movies = await Promise.resolve(moviesMock);
        return movies || []
    }

    async getMovie(){
        const movie = await Promise.resolve(moviesMock[0])
        return movie || {}
    }

    async createMovie(){
        const createMovieId = await Promise.resolve(moviesMock[0].id)
        return createMovieId
    }
    async updateMovie(){
        const updatedMovieId = await Promise.resolve(moviesMock[0].id)
        return updatedMovieId
    }
    async deleteMovie(){
        const deletedMovieId = await Promise.resolve(moviesMock[0].id)
        return deletedMovieId
    }
    async updateMoviePatch(){
      const updateMoviePatch = await Promise.resolve(moviesMock[0].id)
      return updateMoviePatch;
    }
}
module.exports = MoviesService;
