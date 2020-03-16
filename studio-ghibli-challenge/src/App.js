import React, {useState, useEffect} from 'react'
import './App.css'
import Card from './components/Card'


function App() {  
  const [filmes, setFilmes] = useState([])
  useEffect(()=> {
    recebeAPI()
  }, [])
  const recebeAPI = ()=> {
    const URL_DA_API = 'https://ghibliapi.herokuapp.com/films';
    fetch(URL_DA_API)
      .then(res => res.json())
        .then(data => {
          setFilmes(data)
        })
        .catch(err => console.log(err))
  }
console.log(filmes)
  return (
    <div className="App">
    {filmes.map(({title, description}) => (
    
      <Card titulo={title} descricao={description}/>
    ))} 
    </div>   
  )
}

export default App
