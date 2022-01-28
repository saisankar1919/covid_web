import logo from './logo.svg';
// import './App.css';
import './index.css'
import VaccineCenter from './Pages/VaccineCenter';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Identification from './Pages/Identification';
import { useState } from "react";





function App() {

  const [idNumber, setIdNumber] = useState()


  return (
    
    <Router>
        <div className='App'>
         <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/registration' element={<Identification idNumber={idNumber} setIdNumber={setIdNumber}/>}></Route>    
            <Route exact path='/centre' element={<VaccineCenter idNumber={idNumber}/>}> </Route> 
         </Routes>
        
    </div>
      </Router>
      
  );
}

export default App;
