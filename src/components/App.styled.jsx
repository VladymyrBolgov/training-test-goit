import styled from 'styled-components';
import decor_picture from "../images/decor_picture.png";
import logo from "../images/logo.png";

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