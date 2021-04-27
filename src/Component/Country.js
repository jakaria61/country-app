import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    return (
        <div className="country">
                
            <div className="card">
            <h3>{props.post.name}</h3>
            <img src={props.post.flag} alt=""/><br/>
           <Link to={`/CountryDetails/${props.post.name}`}> <button type="button" class="btn btn-success">Show Details</button></Link>

            </div>
        </div>
    );
};

export default Country;