import React from 'react';
import './form.css';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addVideogame } from '../actions';


export default function Form () {
    const [input, setInput] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        genres: [],
        platforms: []    
    })
    // const dispatch = useDispatch();

    function handleChange(e){    
        setInput({       
          ...input,
          [e.target.name]: e.target.value
        })
    }
    function handleSelect(e){
        setInput({
            ...input,
            genres: [...input.genres, e.target.value]
        })
    }
    function handleCheckbox(e){
        const isChecked = e.target.checked;
       if(isChecked){
           setInput({
               ...input,
               platforms: [...input.platforms, e.target.value]
           })
       } 
    console.log(e.target.checked)
    }
    console.log(input)

    async function handleSubmit(e){
        e.preventDefault()
        // dispatch(addVideogame(input))
       await axios.post('http://localhost:3001/videogame', input)
        setInput({
            name: '',
            description: '',
            released: '',
            rating: '',
            genres: [],
            platforms: []    
        })
    }
    return (
        <div className = "back">

            <form className = "form" onSubmit={handleSubmit}>
                <h2 className ="title">Create Videogame</h2>
                <div className = "input-container ic1">

                    <input type="text" className ="input" name ="name" value={input.name} onChange={handleChange} placeholder = "Name"/>
                </div>
                <div className = "input-container ic1">

                    <input type="text" className ="input" name ="description" value={input.description} onChange={handleChange} placeholder = "Description" />
                </div>
                <div className = "input-container ic1">

                    <input type="date" className ="input" name = "released" value ={input.released} onChange={handleChange} placeholder = "Released" />
                </div>
                <div className = "input-container ic1">

                   <input type="number" className ="input" name= "rating" value ={input.rating} onChange={handleChange} placeholder = "Rating"/>
                </div>

                <div  className ="genres">
                    <div >
                    <span>Genre 1</span>     
                        <select name="genres" id ="genres" value ={input.genres} onChange ={handleSelect}>
                            <option value= ""> -- select an option -- </option>
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Drama">Drama</option>
                            <option value="Zombies">Zombies</option>
                            <option value="Strategy">Strategy</option>
                            <option value="Arcade">Arcade</option>
                        </select>
                    </div>    
                    <div >
                    <label>Genre 2</label>     
                        <select name="genres" id ="genres" value ={input.genres} onChange ={handleSelect} >
                            <option value= ""> -- select an option -- </option>
                            <option value="Fighting">Fighting</option>
                            <option value="Racing">Racing</option>
                            <option value="Family">Family</option>
                            <option value="Simulation">Simulation</option>
                            <option value="Puzzle">Puzzle</option>
                            <option value="Shooter">Shooter</option>
                        </select>   
                    </div>  
                </div>  
                <p className = "plat">Platforms</p> 
                <div className = "platforms">  
                    <label><input type= "checkbox" name ="ps5" value ="PS5" onChange ={handleCheckbox}/> PS5 </label>
                    <label><input type= "checkbox" value ="Nintendo" onChange ={handleCheckbox}/> Nintendo </label>
                    <label><input type= "checkbox" value ="Pc" onChange ={handleCheckbox}/> PC </label>
                    <label><input type= "checkbox" value ="Xbox" onChange ={handleCheckbox}/> Xbox </label>
                    <label><input type= "checkbox" value ="PS4" onChange ={handleCheckbox}/> PS4 </label>
                    
                </div> 
                
                <button className ="submit">Create</button>
                        <div className ="contbackhome">
                            <Link to= "/home">
                            <button className ="backhome">Home</button>
                            </Link>
                        </div>



            </form>


        </div>
    )
}