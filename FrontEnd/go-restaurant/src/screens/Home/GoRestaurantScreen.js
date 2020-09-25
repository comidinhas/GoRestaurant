import React from 'react';
import Logo from '../../img/Logo.png';
// import Button from '../../components/Button'
import * as S from './styled'


const GoRestaurant = ({ history }) => {
    return(
        <S.Nav>
            <S.Logo src= { Logo } alt="Logotipo"></S.Logo>
            <S.Buutton onPress= { () => history.pushState('/newdishes') }>Novo Prato</S.Buutton>
        </S.Nav>
    );
};

export default GoRestaurant;