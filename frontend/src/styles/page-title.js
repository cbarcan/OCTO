import styled from 'styled-components';
import React from 'react';

//Style component

const PageTitleLine = styled.div`
    width: 100px;
    height: 3px;
    background-color: #00ECFF;
    margin-top: 20px;
`;

const PageTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const PageTitleText = styled.h1`
    font-weight: 800;
    font-size: 32px;
    color: white; 
    -webkit-text-stroke: 1px ${props => props.theme.octoBlue};
    text-shadow: 0 0 20px ${props => props.theme.octoBlue};
`;

//React component

const PageTitle = (props) => {
    return (
        <PageTitleContainer style={{"margin":props.margin || "40px 0"}}>
            <PageTitleText>{props.pageTitle}</PageTitleText>
            <PageTitleLine />
        </PageTitleContainer>
    );
};
export default PageTitle;
