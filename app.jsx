import React from 'react'; //Used to import react
import Gallery from './Gallery'; //Ued to import Gallery component
// If using routing
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

const App = () => { //Fuction used to create app
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Gallery} />
        </Switch>
      </div>
    </Router>
  );
};

export default App; //Used to display 
