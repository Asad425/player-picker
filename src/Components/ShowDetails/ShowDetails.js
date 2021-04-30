import React from 'react';
import './ShowDetails.css'
const ShowDetails = (props) => {
    const player = props.player;
    const {name, salary} = player;
    return (
        <div className="show-details">
            <h4>{name}</h4>
            <h5>salary : $ {salary} M</h5>
        </div>
    );
};

export default ShowDetails;