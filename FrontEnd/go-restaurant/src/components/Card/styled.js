import styled from 'styled-components';

export const Container = styled.div`
    background: #f0f0f5;
    border-radius: 8px;
`
export const Header = styled.header`
    background: #ffb84d;
    border-radius: 8px 8px 0px 0px;
    height: 192px;
    overflow: hidden;
    transition: 0.3s opacity;
    text-align: center;
`
export const Image = styled.img`
    pointer-events: none;
    user-select: none;
`
export const Description = styled.section`
    padding: 30px;
`
export const FoodName = styled.h2`
    color: #3d3d4d;
`
export const FoodDescription = styled.p`
    color: #3d3d4d;
    margin-top: 16px;
`
export const FoodPrice = styled.p`
      font-style: normal;
      font-size: 24px;
      line-height: 34px;
      color: #39b100;
`
export const Bold = styled.b`
    font-weight: 600;
`
export const Footer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    background: #e4e4eb;
    border-radius: 0px 0px 8px 8px;
`
export const IconContainer = styled.div`
    display: flex;
`
export const Button = styled.button`
    background: #fff;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    border: none;
    transition: 0.1s;
    outline: none;
`
export const InputDiv = styled.div`
    display: flex;
    align-items: center;
`
export const Availability = styled.p`
    color: #3d3d4d;
`
export const AvailabilityLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 88px;
    height: 32px;
    margin-left: 12px;
`
export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
     background-color: #c72828;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 16px; 
`


