import React, { useState } from 'react'; //Se agregó el { useState }

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');
  
  function handleInputChange(e) {
    e.preventDefault();
    setCity(e.target.value)
};
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Ciudad..." aria-label="Ciudad..." aria-describedby="basic-addon1" onChange={e=>handleInputChange(e)}></input>
      <input className='btn text-light btn-outline-dark' type="submit" value="Agregar" />
      </div>
    </form>
  );
}
