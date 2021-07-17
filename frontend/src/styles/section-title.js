import styled from 'styled-components';
import React from 'react';

//Style component

const SectionTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1%;
    
`;

const SectionitleText = styled.h2`
    color: white;
    font-size: 20px;
    font-family: monospace;
`;

//React component

export const SectionTitle = (props) => {
    return (
        <SectionTitleContainer>
            <SectionitleText>{props.pageTitle}</SectionitleText>
        </SectionTitleContainer>
    );
};

