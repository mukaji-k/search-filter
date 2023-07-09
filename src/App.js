import React,{ useState } from 'react';
import './App.css';
import Fruits from './Fruits';

function App() {
  const [query, setQuery] = useState("");

  const search = (data)=>{
    return data.filter(fruit=>fruit.name.includes(query));
  }
console.log(query);
  return (
    <div className="App">
      <div className='title-div'>
        <h1 className='title'>iFruits - search fruits images</h1>
      </div>
      <input placeholder="write your fruit's name here..." 
      type='text' className='search' 
      onChange={(e)=> setQuery(e.target.value)} />

   <ul>
    {Fruits.filter(fruit=>fruit.name.includes(query)).map((fruit)=>{
      return(
        <>
          <li className='listItem' key={fruit.id}>
            <img src={fruit.img} alt={fruit.name} width='300px' data={search(Fruits)} />
          </li>
        </>
        )
      })}
    </ul>

    </div>
   
  );
}

export default App;
