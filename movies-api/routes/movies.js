const express = require('express');
const MoviesService = require('../services/movies');

const {
    movieIdSchema,
    createMovieSchema, 
    updateMovieSchema
} = require('../utils/schemas/movies');

const validationHandler = require('../utils/middleware/validationHandler')


//crear una funcion donde le pasamos por parametro la aplicacion de express, lo que nos permite es ser dinamicos y saber que aplicacion
//va a consumir nuestra ruta 
function moviesApi(app){
    const router = express.Router();
    app.use('/api/movies', router);

    const movieService = new MoviesService()

    router.get('/', async (req,res,next) => {
        const {tags} = req.query;
        try {
            const movies = await movieService.getMovies({tags})
           // throw new Error('Error getting movies')
            res.status(200).json({
                data: movies,
                message:'movies listed'
            })
        }catch(err){
            next(err)
        }
    })
    router.get('/:movieId', validationHandler({movieId: movieIdSchema}, 'params') ,  async (req,res,next) => {
    
        const {movieId}= req.params;
        
        try {
            const movies = await movieService.getMovie({movieId})
            
            res.status(200).json({
                data: movies,
                message:'movies retrieved'
            })
        }catch(err){
            next(err)
        }
    })
    router.post('/', validationHandler(createMovieSchema),  async (req,res,next) => {
        const {body: movie} = req;
        try {
            const createMovieId = await movieService.createMovie({movie})

            res.status(201).json({
                data: createMovieId,
                message:'movie created'
            })
        }catch(err){
            next(err)
        }
    })
    router.put('/:movieId',  validationHandler({movieId: movieIdSchema}, 'params'),  validationHandler(updateMovieSchema), async (req,res,next) => {
        const {body: movie} = req;
        const {movieId}= req.params;

        try {
            const updatedMovieId = await movieService.updateMovie({movieId, movie})
            
            res.status(200).json({
                data: updatedMovieId,
                message:'movie updated'
            })
        }catch(err){
            next(err)
        }
    })
    router.delete('/:movieId',  validationHandler({movieId: movieIdSchema}, 'params'), async (req,res,next) => {
      
        const {movieId}= req.params

        try {
            const deletedMovieId = await movieService.deleteMovie({movieId})
            
            res.status(200).json({
                data: deletedMovieId,
                message:'movie deleted'
            })
        }catch(err){
            next(err)
        }
    })

  
    
}

module.exports = moviesApi