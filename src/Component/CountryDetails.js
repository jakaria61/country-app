import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const {name} = useParams();
    const [country, setCountry] = useState({});
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data =>setCountry(data[0]))
    },[name])
    
    return (
        <div className="container">
           
           <div className="details">
              
                 <h1>Details</h1> <hr/>
                 <h2>Name:{country.name}</h2>          
                 <h2>NativeName:{country.nativeName}</h2>          
                 <h2>Population:{country.population}</h2>          
                 <h2>Region:{country.region}</h2>                    
                 <h2>Capital:{country.capital}</h2>           
                 <h2>Area:{country.area}</h2>            
                 <h2>Borders:{country.borders}</h2>            
                 <h2>Timezones:{country.timezones}</h2>           
                 <h2>NumericCode:{country.numericCode}</h2>     
          </div>      
            
        </div>
    );
};

export default CountryDetails;