import styled from 'styled-components'
import background from './img/bg1.png'
import { hover } from '@testing-library/user-event/dist/hover'



export const Container = styled.div`
    background: url("${background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    
`

export const Img = styled.img`
    margin-top: 30px;

`
export const H1 = styled.h1`
    text-align: center;
    margin-top: 50px;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
    color: #ffffff;
    margin-bottom: 80px;
    margin-bottom: 81px;
`


export const ContainerItens = styled.div`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    margin-top: 44px;
    height: 100vh;

`

export const InputLabel = styled.p`
    letter-spacing: 0.408px;
    font-style: normal; 
    font-weight: bold;
    font-size: 20px;
    padding-left: 15px;
    margin-left: 20px;
    line-height: 22px;
    
`

export const Input = styled.input`
    background: rgba(255,255,255,0.25);
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    width: 342px;
    height: 58px;
    border-radius: 14px;
    border: none;
    outline: none;
    padding-left: 35px;
    color: #FFFFFF;
    font-size: 20px;
    margin-bottom: 34px;

`

export const Button = styled.button`
    width: 342px;
    height: 74px;
    background: rgba(0,0,0,  0.8);
    border-radius: 14px;
    border: none;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    
    &:hover{
        opacity: 0.9;
    }

    &:active{
        opacity: 0.6;
    }
`


