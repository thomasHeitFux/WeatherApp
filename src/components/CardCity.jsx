import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardCity({ min, max, name, img, onClose, id }) {

  return (
    <Card className='bg-info shadow p-3 mb-5 rounded ' style={{ width: '250px' }}>
      <Button onClick={onClose} variant="outline-danger" style={{ width: '48px' }}>X</Button>
      <Card.Img variant="top" src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} style={{ width: '90px' }}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          min:
          {min}°
        </Card.Text>
        <Card.Text>
          max: 
          {max}°
        </Card.Text>
      </Card.Body>
    </Card>
  );
};