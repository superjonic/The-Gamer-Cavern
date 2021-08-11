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

const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames', async (req, res) => { //! me esta faltando traer los vg de la base de datos que el client crea
    const { name } = req.query;
    var games = []
    if(!name){
        const games1 = await axios.get(`${URL}games?key=${API_KEY}`);    //OJO la idea es traernos 100 games = 5 pages
        const games2 = await axios.get(`${URL}games?key=${API_KEY}&page=2`);
        const games3 = await axios.get(`${URL}games?key=${API_KEY}&page=3`);
        const games4 = await axios.get(`${URL}games?key=${API_KEY}&page=4`);
        const games5 = await axios.get(`${URL}games?key=${API_KEY}&page=5`);
        
        games = games1.data.results.concat(games2.data.results, games3.data.results, games4.data.results, games5.data.results)
         
        games = games.map((g) => {             //games es la sum de 5 apicalls,   
            return { 
                    id: g.id,
                    name: g.name,
                    image: g.background_image,
                    description: g.description, //description solo figura en el endpoint de id de la api
                    released: g.released,
                    rating: g.rating,
                    platforms: g.platforms,
                    genres: g.genres
                    }
        })  //agregar los videogames creados por el cliente, traer desde nuestra base de datos
        var clientgames = await Videogame.findAll();
        var allGames = games.concat(clientgames)
        console.log(allGames.length)
        return res.send(allGames);   
    }
    if(name){               //devolver los primeros 15 juegos que matcheen con la palabra 
        //deberia hacer un axios a la api, me traigo los matches, y luego con un slice limito la cantidad a 15
        //tambien deberia buscar en la base de datos y traerlos, agregarlos a la devolucion
        try{
            //deberia agregar un find a la db
            const dbGames = await Videogame.findOne({
                where: {
                    name: name
                }
            })
            let fifteenGames = await axios.get(`${URL}games?search=${name}&key=${API_KEY}`);
           
            // if(fifteenGames.data.results.length !== 0){
                //.results es un array de obj, hay que hacerle un map
            //fifteenGames.data.results.map((game) => game.name)    
            // var nameResults = fifteenGames.data.results.map((game) => game.name);  // array de names 
            //nameResults.include(name.toLowerCase()) no funciono
            if (fifteenGames.data.results.length !== 0){
                
                let fifteen = fifteenGames.data.results.map( (g) => {
                    return {
                        id: g.id,
                        name: g.name,
                        image: g.background_image,
                        description: g.description, //description solo figura en el endpoint de id de la api
                        released: g.released,
                        rating: g.rating,
                        platforms: g.platforms
                    }
                })
                fifteen = fifteen.slice(0, 15)
                
                 res.send(fifteen); //aca estoy enviando la resp de la api sin consultar la db

            } else {
                return res.send(dbGames);
             }
        }
        catch(error){
            res.sendStatus(404).send('There is no game with that name')
        }
        // for(let i = 0; i <= 15; i++){
        //     fifteenGames[i]
        // }
        //return res.send('entre en elquery name, y devuelvo el name:' + name)  
    }
})


router.get('/videogames/:id', async (req, res) => {
    const { id } = req.params;
    // if(!id || typeof id !== 'number'){
    //     return res.send('the game is not on the list')
    // }
    try {        
        if(id.length < 10){
            const game = await axios.get(`${URL}games/${id}?key=${API_KEY}`)
            
            return res.send(game.data)
        }else {
            const dbGame = await Videogame.findByPk(id)
            console.log(dbGame.dataValues)

            return res.send(dbGame.dataValues)
        }
    }    
    catch(error){
        console.log(error)
       
    }     
    
})

router.get('/genres', async (req, res) => {
    try{
        let categories = [];
        const lista = await axios.get(`${URL}genres?key=${API_KEY}`)    //traigo de la api los genres
        categories = lista.data.results.map( (cat) => {                 //mapeo para solo guardar los nombres
            return { name: cat.slug }
        })    
         Genre.bulkCreate(categories)                                      //ahora tengo que guardarlo en mi db, en el model
        console.log(categories)
        res.send(categories)
    }
    catch(error){
        console.log(error)
    }
    
})

router.post('/videogame', async (req, res) => {
    const {name, description, released, platforms, rating, genres } = req.body    //aca van los datos que llegan desde el form
    console.log(req.body)
    let platformString = platforms.join(', ')
    try{
        if(name && description && platforms){
            const newGame = await Videogame.create({
                       id: uuidv4(), 
                       name,
                       description,
                       released,            //OJO released tiene que llegar en formato numero sino se rompe
                       rating,
                       platforms: platformString
            })
            newGame.setGenres(genres)
             return res.send(newGame)
        }
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router;
