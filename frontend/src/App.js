import './App.css';
import Mainroutes from './components/routes/Mainroutes';
import Homepage from './components/ui/Homepage';
import Navbar from './components/ui/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">

      <Mainroutes />


    </div>
  );
}

export default App;
