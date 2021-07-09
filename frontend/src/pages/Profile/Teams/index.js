import React from 'react';
import styled from "styled-components";
import TeamCard from "./TeamCard";

const TeamDiv = styled.div `
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    border: red solid;   
    }
`

const Teams = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 20px -5px #292d3dd3;
    border: yellow solid; 
`

const TeamHeader = styled.div `
    background-color: ${props => props.theme.backgroundLigthNavy }; 
    display: flex;
    height: 20%;
    width: 100%;
    display: flex;
    flex-wrap: wrap; 
`

const TeamHeaderName = styled.p`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: white; 
`;
const TeamContainer = () => {
    return <>
         <TeamDiv>
            <Teams>
                <TeamHeader>
                    <TeamHeaderName>Teams</TeamHeaderName>
                </TeamHeader>
                <TeamCard>

                </TeamCard>
            </Teams>
        </TeamDiv>
    </>


};

export default TeamContainer