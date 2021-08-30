const { Router } = require('express');
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env; 
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const { Videogame } = require('../models/Videogame')
const { Videogame, Genre } = require('../db');
const { v4: uuidv4 } = require('uuid');
const URL = 'https://api.rawg.io/api/';
const { Op } = require ('sequelize');
const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames', async (req, res) => { 
    const { name } = req.query;
    var games = []
    if(!name){
        const games1 = await axios.get(`${URL}games?key=${API_KEY}`);    
        const games2 = await axios.get(`${URL}games?key=${API_KEY}&page=2`);
        const games3 = await axios.get(`${URL}games?key=${API_KEY}&page=3`);
        const games4 = await axios.get(`${URL}games?key=${API_KEY}&page=4`);
        const games5 = await axios.get(`${URL}games?key=${API_KEY}&page=5`);
        
        games = games1.data.results.concat(games2.data.results, games3.data.results, games4.data.results, games5.data.results)
         
        games = games.map((g) => {              
            return { 
                    id: g.id,
                    name: g.name,
                    image: g.background_image,
                    description: g.description, 
                    released: g.released,
                    rating: g.rating,
                    platforms: g.platforms,
                    genres: g.genres
                    }
        })  //agregar los videogames creados por el cliente, traer desde nuestra base de datos
        const clientgames = await Videogame.findAll({
            attributes: { exclude: ['createdAt' , 'updatedAt']},
            include: {
                model: Genre,
                attributes: ['name'],
                through: {attributes: []}
            }
        });
        console.log(clientgames)
        var allGames = games.concat(clientgames)
        console.log(allGames.length)
        return res.send(allGames);   
    }

    if(name){               
        try{ 

            let fifteenGames = await axios.get(`${URL}games?search=${name}&key=${API_KEY}`);
            if (fifteenGames.data.results.length !== 0){
                
                let fifteen = fifteenGames.data.results.map( (g) => {
                    return {
                        id: g.id,
                        name: g.name,
                        image: g.background_image,
                        description: g.description, 
                        released: g.released,
                        rating: g.rating,
                        genres: g.genres,
                        platforms: g.platforms
                    }
                })
                fifteen = fifteen.slice(0, 15)  // aca concateno los resultados de la DB
                const dbgames = await Videogame.findAll({
                    where: {name: { [Op.iLike]: name}},
                    attributes: { exclude: ['createdAt' , 'updatedAt']},
                    include: {
                        model: Genre,
                        attributes: ['name'],
                        through: {attributes: []}
                    }
                });
                console.log(dbgames)
                 const allGam = fifteen.concat(dbgames)    
                 console.log(allGam.length)
                 return res.send(allGam); 

            } else {
                return res.send(dbgames); 
             }
        }
        catch(error){
            res.sendStatus(404).send('There is no game with that name')
        }
    }
})


router.get('/videogames/:id', async (req, res) => {
    const { id } = req.params;
   
    console.log(id.length)
    try {        
        if(id.length < 10){
            const game = await axios.get(`${URL}games/${id}?key=${API_KEY}`)
            
            return res.send(game.data)
        } if(id.length > 10){
            const dbGame = await Videogame.findOne({
                where: {
                    id: id
                },
                include: {
                    model: Genre,
                    attributes: ['name'],
                    through: {attributes: []}
                }
            })  
            
            return res.send(dbGame)
        } 
    }    
    catch(error){
        console.log(error)
        res.status(404)
    }     
})


router.get('/genres', async (req, res) => {
    try{
        let categories = [];
        const lista = await axios.get(`${URL}genres?key=${API_KEY}`)    //traigo de la api los genres
        categories = lista.data.results.map( (cat) => {                 //mapeo para solo guardar los nombres
            return { name: cat.slug }
        })    
                                             
        console.log(categories)
        res.send(categories)
    }
    catch(error){
        console.log(error)
    }
    
})

router.post('/videogame', async (req, res) => {
    const {name, description, released, platforms, rating, genre1, genre2 } = req.body    //aca van los datos que llegan desde el form
    
    try{
        let platformString = platforms.join(', ')
        
        console.log(genre1)
        console.log(genre2)
        if(name && description && platforms){
            const newGame = await Videogame.create({   
                       id: uuidv4(), 
                       name,
                       description,
                       released,            
                       rating,
                       platforms: platformString,                                            
            })
            
            const dbGenre1 = await Genre.findByPk(genre1)      
            const dbGenre2 = await Genre.findByPk(genre2)
            let dbGenres = [] 
            dbGenres.push(dbGenre1)
            dbGenres.push(dbGenre2)
            console.log(dbGenres)
                        
             await newGame.addGenres(dbGenres)    
              
             return res.send(newGame)
        }
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router;
