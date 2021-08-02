const { Router } = require('express');
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env; 
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const { Videogame } = require('../models/Videogame')
const { Videogame, Genre } = require('../db');
const URL = `https://api.rawg.io/api/`;

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames', async (req, res) => {
    const { name } = req.query;
    if(!name){
        const games = await axios.get(`${URL}games?key=${API_KEY}`);
        return res.send(games.data);  
    }
    if(name){               //devolver los primeros 15 juegos que matcheen con la palabra 
        //deberia hacer un axios a la api, me traigo los matches, y luego con un for limito la cantidad a 15
        let fifteenGames = await axios.get(`${URL}games/${name}?key=${API_KEY}`)
        // for(let i = 0; i <= 15; i++){
        //     fifteenGames[i]
        // }
        //return res.send('entre en elquery name, y devuelvo el name:' + name)
        console.log(fifteenGames.length)
        return res.send(fifteenGames.data);
    } else {
        res.sendStatus(404)
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
        const lista = await axios.get(`${URL}genres?key=${API_KEY}`)
        console.log(lista.data)
        res.send(lista.data)
    }
    catch(error){
        console.log(error)
    }
    
})

router.post('/videogame',   (req, res) => {
    const {name, description, released, platforms, rating } = req.body    //aca van los datos que llegan desde el form
    console.log(req.body)
    if(name && description && platforms){
     const newGame = Videogame.create({
                name: name,
                description,
                released,
                rating,
                platforms
        })
        .then(console.log('se creo'))
        return res.json(newGame)
    }
     res.send("no se crearon videogames")
})

module.exports = router;
