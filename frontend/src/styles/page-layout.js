import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    padding: 5vw;
    margin: 0;
`;

export const PageContent = styled.div`
border: solid;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
`;
