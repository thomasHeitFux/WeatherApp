import NavBarSearch from '../components/NavbarSearch'
import Cards from '../components/Cards.jsx'
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';



export default function Home() {
  const [cities, setCities] = useState([]);
  let apiKey = '4ae2636d8dfbdc3044bede63951a019b'

  useEffect(() => {
    async function success(pos) {
      var crd = pos.coords;
      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${apiKey}`
      );
      const res = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${data.data.name}&appid=${apiKey}&units=metric`)
      const recurse = res.data;
      const ciudad = {
        country: recurse.sys.country,
        min: Math.round(recurse.main.temp_min),
        max: Math.round(recurse.main.temp_max),
        img: recurse.weather[0].icon,
        id: recurse.id,
        wind: recurse.wind.speed,
        temp: recurse.main.temp,
        name: recurse.name,
        weather: recurse.weather[0].main,
        clouds: recurse.clouds.all,
        latitud: recurse.coord.lat,
        longitud: recurse.coord.lon
      };
      setCities(oldCities => [ciudad]);
    }

    navigator.geolocation.getCurrentPosition(success)
  }, []);

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            country: recurso.sys.country,
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

  }
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id != id));
  }

  return (
    <div>
      <NavBarSearch onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
};