import React from 'react';
import './form.css';

export default function Form () {

    return (
        <div className = "back">
            <form className = "form">
                <h2 className ="title">Create Videogame</h2>
                <div className = "input-container ic1">
                    <input type="text" className ="input" placeholder = "Name"/>
                </div>
                <div className = "input-container ic1">
                    <input type="text" className ="input" placeholder = "Description" />
                </div>
                <div className = "input-container ic1">
                    <input type="date" className ="input" placeholder = "Date" />
                </div>
                <div className = "input-container ic1">
                   <input type="number" className ="input" placeholder = "Rating"/>
                </div>
                <div  className ="genres">
                    <div >
                    <span>Genre 1</span>     
                        <select name="Genre" id="">
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Drama">Drama</option>
                            <option value="Zombies">Zombies</option>
                            <option value="Strategy">Strategy</option>
                            <option value="Arcade">Arcade</option>
                        </select>
                    </div>    
                    <div >
                    <span>Genre 2</span>     
                        <select name="Genre" id="">
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
                <div className = "platforms ">  
                    <label><input type= "checkbox" value ="ps5"/> PS5 </label>
                    <label><input type= "checkbox" value ="nintendo"/> Nintendo </label>
                    <label><input type= "checkbox" value ="pc"/> PC </label>
                </div>  
                <button className ="submit">Create</button>



            </form>


        </div>
    )
}