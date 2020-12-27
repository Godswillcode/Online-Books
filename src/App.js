import React  from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './Home/Home';
import Book from './Book/Book';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> <Home/> </Route>
        <Route path="/book"> <Book/> </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
