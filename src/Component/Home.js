import React, { useEffect, useState } from 'react';
import Country from './Country';

const Home = () => {
    const [country, setCountry] =useState({})

    useEffect(() =>{
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then(response =>response.json())
        .then (data=>setCountry(data))
    },[])

    return (
        <div className="home">
            {
              country.length &&  country.map(post => 
              <Country post={post}></Country>)
            }
        </div>
    );
};

export default Home;