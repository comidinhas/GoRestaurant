import React from 'react'

import Logo from '../../img/Logo.png';
import { BsPlusSquare } from 'react-icons/bs'

import * as S from './styled'

const Header = () => {
    return(
        <S.Container>
            <S.Header>
                <img src = { Logo } alt="Logotipo"/>
                <nav>
                    <div>
                        <S.Button>
                            <S.Text>Novo Prato</S.Text>
                            <S.Icon>
                                <BsPlusSquare  size={ 24 }/>
                            </S.Icon>
                        </S.Button>
                    </div>
                </nav>
            </S.Header>
        </S.Container>
    )
}

export default Header;