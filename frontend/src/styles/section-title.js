import styled from 'styled-components';
import React from 'react';

//Style component

// const SectionTitleLine = styled.div`
//     width: 100px;
//     height: 3px;
//     background-color: #00ECFF;
//     margin-top: 20px;
// `;

const SectionTitleContainer = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`;

const SectionitleText = styled.h2`
    color: white;
    font-size: 20px;

`;

//React component

export const SectionTitle = (props) => {
    return (
        <SectionTitleContainer>
            <SectionitleText>{props.pageTitle}</SectionitleText>
        </SectionTitleContainer>
    );
};

