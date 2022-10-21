import React from 'react';
import CardCity from './CardCity';
import { Container, Row ,Col} from 'react-bootstrap';

export default function Cards({cities, onClose}) {
  if(cities){
    return (
 
       <div className='d-flex justify-content-center  flex-wrap gap-3'> 
             {cities.map(c => 
      <CardCity
            key={c.id}
            country={c.country}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            /> 
            )}
    </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
      )
    }
}