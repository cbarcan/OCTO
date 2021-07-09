import React from 'react';
import styled from "styled-components";
import TeamCard from "./TeamCard";
//import PageTitle from "../../../styles/page-title";

const TeamDiv = styled.div `
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    border: solid yellow;   
    }
`

const Teams = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 2% 0;
    border: solid red; 
`

const TeamContainer = () => {
    return <>
         <TeamDiv>
            <Teams>
                <TeamCard>
                    <h1>Here is the teams</h1>
                </TeamCard>
            </Teams>
        </TeamDiv>
    </>


};

export default TeamContainer