import React from "react";
import {useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MemeCard = (props)=>{
    const navigate = useNavigate();
    return (
        <Card style={{ width: '18rem', margin: "20px", boxShadow:"2px 2px 10px #000" }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            
            <Button onClick={(e)=>navigate(`/edit?url=${props.img}`)} variant="primary">Edit Meme</Button>
          </Card.Body>
        </Card>
      );

}

export default MemeCard;