const express = require('express');
const {moviesMock} = require('../utils/mocks/movies')

//crear una funcion donde le pasamos por parametro la aplicacion de express, lo que nos permite es ser dinamicos y saber que aplicacion
//va a consumir nuestra ruta 
function moviesApi(app){
    const router = express.Router();
    app.use('/api/movies', router);

    router.get('/', async (req,res,next) => {
        try {
            const movies = await Promise.resolve(moviesMock)
            
            res.status(200).json({
                data: movies,
                message:'movies listed'
            })
        }catch(err){
            next(err)
        }
    })
    router.get('/:movieId', async (req,res,next) => {
        try {
            const movies = await Promise.resolve(moviesMock[0])
            
            res.status(200).json({
                data: movies,
                message:'movies retrieved'
            })
        }catch(err){
            next(err)
        }
    })
    router.post('/', async (req,res,next) => {
        try {
            const createMovieId = await Promise.resolve(moviesMock[0].id)
            
            res.status(201).json({
                data: createMovieId,
                message:'movie created'
            })
        }catch(err){
            next(err)
        }
    })
    router.put('/:movieId', async (req,res,next) => {
        try {
            const updatedMovieId = await Promise.resolve(moviesMock[0].id)
            
            res.status(200).json({
                data: updatedMovieId,
                message:'movie updated'
            })
        }catch(err){
            next(err)
        }
    })
    router.delete('/:movieId', async (req,res,next) => {
        try {
            const deletedMovieId = await Promise.resolve(moviesMock[0].id)
            
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