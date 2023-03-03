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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #5736a3;
  border-radius: 50%;
  background-image: url("${round}");
  background-size: 112%;
  background-repeat: no-repeat;
  background-position: top;
`;

export const Avatar = styled.img`
    height: 64px;
    border-radius: 50%;
`;

export const DescriptionText = styled.p`
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    color: #EBD8FF;
    text-align: center;
    margin-bottom: 16px;
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
    margin-top: 10px;
    margin-bottom: 36px;
`;