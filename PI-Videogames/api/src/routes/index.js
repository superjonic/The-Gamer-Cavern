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

router.get('/videogames', async (req, res) => {
    const { name } = req.query;
    var games = []
    if(!name){
        const games1 = await axios.get(`${URL}games?key=${API_KEY}`);    //OJO la idea es traernos 100 games = 5 pages
        const games2 = await axios.get(`${URL}games?key=${API_KEY}&page=2`);
        const games3 = await axios.get(`${URL}games?key=${API_KEY}&page=3`);
        const games4 = await axios.get(`${URL}games?key=${API_KEY}&page=4`);
        const games5 = await axios.get(`${URL}games?key=${API_KEY}&page=5`);
        
        games = games1.data.results.concat(games2.data.results, games3.data.results, games4.data.results, games5.data.results)
        console.log(games.length)
        return res.send(games);   //puedo hacerle un slice con dos parametros variables mathrandom  
    }
    if(name){               //devolver los primeros 15 juegos que matcheen con la palabra 
        //deberia hacer un axios a la api, me traigo los matches, y luego con un for limito la cantidad a 15
        try{
            let fifteenGames = await axios.get(`${URL}games?search=${name}&key=${API_KEY}`);
            if(fifteenGames.data.results.length !== 0){
                console.log(fifteenGames.data.results.length);
                return res.send(fifteenGames.data.results);

            } else if (fifteenGames.data.results.length === 0){
                return res.send('There is no game with that name');
             }
        }
        catch(error){
            res.sendStatus(404)
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
        if(id){
            const game = await axios.get(`${URL}games/${id}?key=${API_KEY}`)
            console.log(game.data)
            return res.send(game.data)
        }
    }    
    catch(error){
        console.log(error)
        res.send('the game is not on the list');
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
    const {name, description, released, platforms, rating } = req.body    //aca van los datos que llegan desde el form
    console.log(req.body)
    try{
        if(name && description && platforms){
            const newGame = await Videogame.create({
                       id: uuidv4(), 
                       name: name,
                       description,
                       released,            //OJO released tiene que llegar en formato numero sino se rompe
                       rating,
                       platforms
            })
             return res.send(newGame)
        }
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router;
