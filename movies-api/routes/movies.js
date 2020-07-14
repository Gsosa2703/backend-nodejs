const express = require('express');
const MoviesService = require('../services/movies');


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
            
            res.status(200).json({
                data: movies,
                message:'movies listed'
            })
        }catch(err){
            next(err)
        }
    })
    router.get('/:movieId', async (req,res,next) => {
    
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
    router.post('/', async (req,res,next) => {
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
    router.put('/:movieId', async (req,res,next) => {
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
    router.delete('/:movieId', async (req,res,next) => {
      
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

    router.patch('/:movieId', async (req,res,next) => {
        const {body: movie} = req;
        const {movieId}= req.params;

        try {
            const updatedMoviePatch = await movieService.updateMoviePatch({movieId, movie})
            
            res.status(200).json({
                data: updatedMoviePatch,
                message:'movie updated'
            })
        }catch(err){
            next(err)
        }
    })
    
}

module.exports = moviesApi