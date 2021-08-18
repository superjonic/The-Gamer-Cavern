import React, { useState }  from 'react';
import './form.css';
import axios from 'axios';
import { Link } from 'react-router-dom';



export function validate(input){                
    let errors = {};
    if(!input.name){
        errors.name = "Name is required"
   }else if(!/^[a-zA-Z ]*$/.test(input.name)){  
        errors.name = "Name is invalid"       
  } else if (!input.description){
        errors.description = "Description is required" 
  } else if (input.rating > '5'){
        errors.rating = "Max rating is 5"   
 }
 return errors;
}

export default function Form () {
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        name: '',                   // required - max x num char - acepta solo leteras y numeros
        description: '',            //required
        released: '',               // required
        rating: '',                 // required max 5 puntos
        genre1: '',
        genre2: '',
        platforms: []    
    })
  
  

    function handleChange(e){                           //aca hacer las validaciones pero handlechange la utilizan 
        setInput({                                      // varios inputs, puedo hacer dos handlechange            
          ...input,                                    // uno con validate y uno sin validate 
          [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }


    function handleSelect(e){
        setInput({
            ...input,
            genre1: e.target.value
        })
    }
    function handleSelect2(e){
        setInput({
            ...input,
            genre2: e.target.value
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
            genre1: '',
            genre2: '',             
            platforms: []    
        })
    }
    return (
        <div className = "back">

            <form className = "form" onSubmit={handleSubmit}>
                <h2 className ="title">Create Videogame</h2>
                <div className = "input-container ic1">

                    <input type="text" className = "input" name ="name" value={input.name} onChange={handleChange} placeholder = "Name"/>
                    {errors.name ? <p className ="danger">{errors.name}</p> : null}
                </div>
                <div className = "input-container ic1">

                    <input type="text" className ="input" name ="description" value={input.description} onChange={handleChange} placeholder = "Description" />
                    {errors.description ? <p className ="danger">{errors.description}</p> : null}
                </div>
                <div className = "input-container ic1">

                    <input type="date" className ="input" name = "released" value ={input.released} onChange={handleChange} placeholder = "Released" />
                </div>
                <div className = "input-container ic1">

                   <input type="number" className ="input" name= "rating" value ={input.rating} onChange={handleChange} placeholder = "Rating"/>
                   {errors.rating ? <p className ="danger">{errors.rating}</p> : null}
                </div>

                <div  className ="genres">
                    <div>
                    <span>Genre 1</span>     
                        <select name="genre1" id ="genres" value ={input.genre1} onChange ={handleSelect} className ="genresform">
                            <option value= ""> -- select an option -- </option>
                            <option value= "1">Action</option> 
                            <option value="2">Indie</option>
                            <option value="3">Adventure</option>
                            <option value="4">Role</option>
                            <option value="5">Strategy</option>
                            <option value="6">Shooter</option>
                            <option value="7">Casual</option>
                            <option value="8">Simulation</option>
                            <option value="9">Puzzle</option>
                            <option value="10">Arcade</option>
                            <option value="11">Platformer</option>
                            <option value="12">Racing</option>
                            <option value="13">Multiplayer</option>
                            <option value="14">Sports</option>
                            <option value="15">Fighting</option>
                            <option value="16">Family</option>
                            <option value="17">Board-games</option>
                            <option value="18">Educational</option>
                            <option value="19">Card</option>
                        </select>
                    </div>    
                    <div >
                    <label>Genre 2</label>     
                        <select name="genre2" id ="genres" value ={input.genre2} onChange ={handleSelect2} className ="genresform">
                            <option value= ""> -- select an option -- </option>
                            <option value= "1">Action</option> 
                            <option value="2">Indie</option>
                            <option value="3">Adventure</option>
                            <option value="4">Role</option>
                            <option value="5">Strategy</option>
                            <option value="6">Shooter</option>
                            <option value="7">Casual</option>
                            <option value="8">Simulation</option>
                            <option value="9">Puzzle</option>
                            <option value="10">Arcade</option>
                            <option value="11">Platformer</option>
                            <option value="12">Racing</option>
                            <option value="13">Multiplayer</option>
                            <option value="14">Sports</option>
                            <option value="15">Fighting</option>
                            <option value="16">Family</option>
                            <option value="17">Board-games</option>
                            <option value="18">Educational</option>
                            <option value="19">Card</option>
                        </select>   
                    </div>  
                </div>  
                
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