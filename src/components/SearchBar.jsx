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
      <div class="input-group ">
      <input type="text" class="form-control" placeholder="City..." aria-label="City..." aria-describedby="basic-addon1" onChange={e=>handleInputChange(e)}></input>
      <input className='btn text-light btn-primary' type="submit" value="Add" />
      </div>
    </form>
  );
}
