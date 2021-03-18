import logo from './logo.svg';
import './App.css';

import { Router } from '@reach/router';
import Home from './components/Home';
import Number from './components/Number';
import Hello from './components/Hello';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Hello path="/:word/:txtcolor/:bgcolor" />
        <Number path="/:id" />
      </Router>
    </div>
  );
}

export default App;
