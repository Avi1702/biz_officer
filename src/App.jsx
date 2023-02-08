// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Data from './pages/Data';
import Filter from './pages/Filter';

function App() {
  return (
    <div className="App">
        <Navbar/>
        {/* <Filter/> */}
        <Data/>
    </div>
  );
}

export default App;
