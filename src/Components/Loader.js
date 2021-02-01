import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: calc( 100vh - 60px );
    display: flex; 
    align-items: center;
    justify-content: center; 
`;
const SpinnerAni = keyframes`
    0%,
    100%,
    80% {
      opacity: 0.6;
      -webkit-transform: scale(0.4);
    }
    40% {
      opacity: 1;
      -webkit-transform: scale(1);
    }
`;
const Dot = styled.span`
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #73706F;
    margin: 3px; 
    :nth-of-type(1){
        animation: ${SpinnerAni} 1.3s 0.3s infinite ease-in;
      }
    :nth-of-type(2){
        animation: ${SpinnerAni} 1.3s 0.6s infinite ease-in;
      }
    :nth-of-type(3){
        animation: ${SpinnerAni} 1.3s 0.9s infinite ease-in;
    }
`;

export default () => (
    <Container>
        <span aria-label="Loading">
            <Dot></Dot><Dot></Dot><Dot></Dot>
        </span>
    </Container>
)
