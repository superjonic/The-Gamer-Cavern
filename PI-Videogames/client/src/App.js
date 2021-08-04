import './App.css';
import Welcome from './components/Welcome';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
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

  

    </BrowserRouter>
  );
}

export default App;
