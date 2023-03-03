import styled from 'styled-components';
import decor_picture from "../images/decor_picture.png";
import logo from "../images/logo.png";
import round from "../images/round.png";


export const CardBlanc = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 380px;
    height: 460px;
    border-radius: 20px;
    background: url("${logo}"), url("${decor_picture}"),
    linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    background-size: auto, auto, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: top 20px left 20px, top 28px left 36px, center;
`;

export const Content = styled.div`
  padding-bottom: 36px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 26px;
  height: 238px;
  > div p:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Line = styled.div`
position: absolute;
width: 380px;
height: 8px;
left: 0px;
top: 214px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px
 rgba(0, 0, 0, 0.06),
 inset 0px -1.71846px 3.43693px #AE7BE3,
  inset 0px 3.43693px 2.5777px #FBF8FF;
`;

export const RoundImg = styled.div`

`;

export const DescriptionText = styled.p`
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    color: #EBD8FF;
    text-align: center;
`;

export const ButtonFollow = styled.button`
    width: 196px;
    height: 50px;
    border: none;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.31px;
    cursor: pointer;
    color: #373737;
    font-size: 18px;
    line-height: 1.37;
    line-height: 1.22;
    font-weight: 600;
    font-family: 'Montserrat';  
`;