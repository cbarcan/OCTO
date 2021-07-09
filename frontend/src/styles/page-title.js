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
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`;

const PageTitleText = styled.h1`
    font-size: 24px;
    color: white;
`;

//React component

const PageTitle = (props) => {
    return (
        <PageTitleContainer>
            <PageTitleText>{props.pageTitle}</PageTitleText>
            <PageTitleLine />
        </PageTitleContainer>
    );
};
export default PageTitle;
