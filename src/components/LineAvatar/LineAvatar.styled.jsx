import styled from "styled-components";
import round from "../../images/round.png"

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