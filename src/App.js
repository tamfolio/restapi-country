import './App.css';
import React,{ useState, useEffect} from 'react'
import axios from 'axios'
import FlagGrid from './components/FlagGrid'
import NavBar from './components/NavBar';



function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const result = await axios(
        'https://restcountries.com/v2/all'
      );
      console.log(result.data)
      setCountries(result.data)
    };

    fetchCountries();
  },[])
  return (
    <div className="App">
      <NavBar/>
      <FlagGrid countries={countries}/>
    </div>
  );
}

export default App;
