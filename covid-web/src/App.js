import logo from './logo.svg';
// import './App.css';
import './index.css'
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Identification from './Pages/Identification';
import VaccineCenter from './Pages/VaccineCenter';




function App() {

  return (
    <div>
      
      <Navbar/>
      <Banner/>
      <Identification/>
      <VaccineCenter/>
    </div>
  );
}

export default App;
