import React from 'react'

import * as S from './styled'

import { FiEdit3, FiTrash } from 'react-icons/fi'

const Card = () => {
    return(
        <S.Container>
            <S.Header>
                <S.Image />
            </S.Header>
            <S.Description>
                <S.FoodName></S.FoodName>
                <S.FoodDescription></S.FoodDescription>
                <S.FoodPrice>
                    R$<S.Bold></S.Bold>
                </S.FoodPrice>
            </S.Description>
            <S.Footer>
                <S.IconContainer>
                    <S.Button><FiEdit3 /></S.Button>
                    <S.Button><FiTrash /></S.Button>
                </S.IconContainer>
                <S.InputDiv>
                    <S.Availability></S.Availability>
                    <S.AvailabilityLabel>
                        <input type='checkbox'></input>
                        <S.Slider></S.Slider>
                    </S.AvailabilityLabel>   
                </S.InputDiv>
            </S.Footer>
        </S.Container>
    )
}

export default Card;