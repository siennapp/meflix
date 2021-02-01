import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px 15px;
    width: 100vw; 
    height: calc( 100vh - 60px );
    display: flex; 
    justify-content: center; 
    align-items: center; 
 `;

const Text = styled.span`
    color: ${props => props.color }
`;

const Message = ({text, color}) => <Container><Text color={color}>{text}</Text></Container>;

Message.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Message; 