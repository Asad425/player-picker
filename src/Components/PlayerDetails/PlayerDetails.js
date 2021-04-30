import React from 'react';
import './PlayerDetails.css'
import { Button,Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const PlayerDetails = (props) => {
        const handleHiredPlayer=props.handleHiredPlayer;
        const {name,picture,age,salary,gender} = props.player;
    return (
        <div className="playerDetails">
           <Card>
                     <Card.Img variant="top" src={picture} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                     Salary :  $ {salary} M
                    </Card.Text>
                    <Card.Text>
                     Age: {age}
                    </Card.Text>
                    <Card.Text>
                        Gender: {gender}
                    </Card.Text>
                    <Button onClick={()=> handleHiredPlayer(props.player)} variant="success">Hire   <FontAwesomeIcon icon={faUserPlus} /> </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PlayerDetails;