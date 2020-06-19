import React from 'react';
import error from '../Images/pages.jfif';
//import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div className="error-page">
                <h1>Oops..</h1>
                <img src={error} alt="oops" />
            </div>  
        </>
    );
}

export default Error;