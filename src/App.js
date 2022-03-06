import './App.css';
import React,{ useState, useEffect} from 'react'
import axios from 'axios'
import FlagGrid from './components/FlagGrid'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FlagSingle from './components/FlagSingle';



function App() {
  
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState('')
  const [output, setOutput] = useState([])


  useEffect(() => {
    const fetchCountries = async () => {
      const result = await axios(
        `https://restcountries.com/v2/all`
      );
      // console.log(result.data)
      setCountries(result.data)
      setIsLoading(false);
    };

    fetchCountries();
  },[countries])

  useEffect(() => {
    setOutput([])
    countries.filter(val=> {
      if(val.name.toLowerCase().includes(input.toLowerCase())){
        setOutput(output=>[...output,val])
      }
    })
},[countries,input])

  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/'>
      <div className="searchnfilter">
      <div className="search-bar">
        <input onChange={e=>setInput(e.target.value)} type="text" placeholder='Search for a Country' />
      </div>
      <div className="filter-bar">
        <h1>Filter</h1>
      </div>
      </div>
      
      <FlagGrid countries={countries} output={output} isLoading={isLoading}/>
      </Route>
      <Route path='/:name' component={FlagSingle} countries={countries} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
