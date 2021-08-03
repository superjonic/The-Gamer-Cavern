import './App.css';
import Welcome from './components/Welcome';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>

      <Route exact path='/'> <Welcome /> </Route>

      <Route path='/home'> <Home /> </Route>

  

    </BrowserRouter>
  );
}

export default App;
