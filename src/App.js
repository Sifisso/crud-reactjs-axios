import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

//import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            
            <Route path="/Add" component={AddContact}/>
            <Route path="/Edit" component={EditContact}/>
            <Route path="/" component={Home}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
