import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/PlayerInfo/Header/Header';
import Player from './Components/PlayerInfo/Player';
import Total from './Components/PlayerInfo/TotalBudget/Total';
import fakeData from './fakeData/data.json';

function App() {
  const [players, setPlayers] = useState([]);
  const [playerCart, setPlayerCart] = useState([]);

  useEffect(() => {
      setPlayers(fakeData)

  },[])

  //// Or,  REST API URL use kore korte paro
  // useEffect(() => {
  //   // const url ='https://6085d2e2d14a870017578555.mockapi.io/api/v1/players'
  //   const url ='https://608d6ad5fe2e9c00171e1a73.mockapi.io/api/v1/players'
  //   fetch(url)
  //   .then((response) =>response.json())
  //   .then(data => setPlayers(data))
  //   .catch(error => console.log(error));
  // },[])

    const handleAddPlayer = (player) => {
    const newCart = [...playerCart, player];
    setPlayerCart(newCart);
    }

  return (
    <div className="App">

  <Header></Header>

  <h1>Total Player : {players.length}</h1>
  <h2> Player Added : {playerCart.length}</h2>
  <Total total={playerCart}></Total>
  <ul>
    {
        players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.name}></Player>)
    }
  </ul>
        <header className="App-header">
          
        </header>
    </div>
  );
}

export default App;

