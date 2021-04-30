import React from 'react';
import ShowDetails from '../ShowDetails/ShowDetails';
import './PlayerCart.css'
const PlayerCart = (props) => {
        const cart =props.cart;

        const totalBudget = cart.reduce((total, totalBudget)=> total + totalBudget.salary,0);
        

    return (
        <div className="player-cart">
            <h3>Hired : {cart.length}</h3>
            <h4>Total : $ {totalBudget} M </h4>
            <p>Players Added :</p>
            {
                cart.map(player => <ShowDetails player={player}></ShowDetails>)
            }
        </div>
    );
};

export default PlayerCart;