import './App.css';
import Welcome from './components/Welcome';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import GameDetail from './components/GameDetail';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getVideogames } from './actions';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames())
  })
  return (
    <BrowserRouter>

      <Route exact path='/'> <Welcome /> </Route>

      <Route path='/home'> <Home /> </Route>

      <Route path="/gamedetail/:id"> <GameDetail /> </Route> 

      <Route path='/createvideogame'> <Form /> </Route>
  

    </BrowserRouter>
  );
}

export default App;
