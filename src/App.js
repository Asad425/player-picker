
import './App.css';
import { Button } from 'react-bootstrap';
import PlayerDetails from './Components/PlayerDetails/PlayerDetails';
import PlayerCart from './Components/PlayerCart/PlayerCart';
import { useEffect, useState } from 'react';
import fakeData from './fakeData/fakeData.json'

function App() {

  const [players, setPlayers] = useState(fakeData);
  const [cart,setCart] = useState([]);
  useEffect(() => {
        setPlayers(fakeData);
       
  },[]);

  const handleHiredPlayer = (player) =>{
        const newCart = [...cart,player];
        setCart(newCart);
  } 

  return (
    <div className="container">
        <div className="main-container">
        <div className="player-container">
          {
            players.map(players => <PlayerDetails handleHiredPlayer={handleHiredPlayer} player={players}></PlayerDetails>)
          }
         </div>

         <div className="cart-container">
             <PlayerCart cart={cart}></PlayerCart>
         </div>  
        </div> 
        
    </div>
  );
}

export default App;
