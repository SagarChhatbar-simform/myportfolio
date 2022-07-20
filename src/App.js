import './App.css';
import Home from './components/home/Home';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Work from './components/Work/Work';
import Projects from './components/Projects/Projects';
import Articles from './components/Articles/Articles';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Routes>



        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Work" element={<Work/>} />
        <Route exact path="/Projects" element={<Projects/>} />
        <Route exact path="/Articles" element={<Articles/>} />
        <Route exact path="/Contact" element={<Contact/>} />



        {/* <Route exact path="/about" component={Aboutpage }/> */}
       


      </Routes>
    </div>
  );
}

export default App;
