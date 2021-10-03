import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>



    // <div className="App">
    //   <Navbar /> 
    // </div>
  );
}

export default App;
