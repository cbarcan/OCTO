import styled from 'styled-components';
import React from 'react';
import octo from "../../assets/images/octopus_poly.png";
// import octo from "../../assets/svgs/octopus_poly_white.svg";

export const OctoWall = styled.div`
height: 100%;
width: 45%;
margin-top: 2%;
margin-left: 5%;
color: white;
display: flex;
justify-content: center;
align-items: center;


img {
    height: 65%;
    padding-right: 12%;
    animation-duration: 2.7s;
    animation-iteration-count: infinite;
    margin: 0 auto 0 auto;
    transform-origin: bottom;
    animation-name: bounce;
    animation-timing-function: ease;
    

    @keyframes bounce {
        0%   { transform: scale(1,1)      translateY(0); }
        10%  { transform: scale(1.1,.9)   translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-100px); }
        50%  { transform: scale(1.05,.95) translateY(0); }
        57%  { transform: scale(1,1)      translateY(-7px); }
        64%  { transform: scale(1,1)      translateY(0); }
        100% { transform: scale(1,1)      translateY(0); }
    }
    
}
` 
/* 
const OctoContainer = () => {
    <RigthContainer>
        <img src={octo} alt='logo'/>
    </RigthContainer>
} */


class OctoContainer extends React.Component {

    render() {
        
        return (
            <OctoWall>
                <img src={octo} alt='logo'/>
            </OctoWall>
        )
    }


}

export default OctoContainer