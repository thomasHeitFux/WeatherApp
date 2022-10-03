import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardCity({ min, max, name, img, onClose, id }) {

  return (
    <Card className='d-flex align-items-end shadow mb-3 rounded   ' bg='light'  style={{ width: '250px' }}>
      <Button onClick={onClose} variant="primary" className='' style={{ width: '48px' }}>X</Button>
      <section className='d-flex m-3 align-items-center'>
      <div  className='bg-success rounded-circle d-flex justify-content-center ' style={{ width: '100px' }}>
      <Card.Img className='' src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} style={{ width: '90px' }}/>
      </div>
      <Card.Body className='text-primary'>
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
      </section>
    </Card>
  );
};