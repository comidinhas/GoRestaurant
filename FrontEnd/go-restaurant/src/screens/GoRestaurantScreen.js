import React from 'react';
import Logo from '../img/Logo.png';


const GoRestaurant = () => {
    return(
        <nav>
            <img src= { Logo } alt="Logotipo"></img>
            <button>Novo Prato</button>
        </nav>
    );
};

export default GoRestaurant;