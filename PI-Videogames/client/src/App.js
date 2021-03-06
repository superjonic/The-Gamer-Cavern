import './App.css';
import Welcome from './components/Welcome/Welcome';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import GameDetail from './components/GameDetail/GameDetail';




function App() {

  return (
    <BrowserRouter>
      <Switch>
      <Route exact path='/'> <Welcome /> </Route>

      <Route path='/home'> <Home /> </Route>

      <Route path="/gamedetail/:id"> <GameDetail /> </Route> 

      <Route path='/createvideogame'> <Form /> </Route>

  
      </Switch>
    </BrowserRouter>
  );
}

export default App;
