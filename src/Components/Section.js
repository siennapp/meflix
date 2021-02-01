import React from 'react';
import ProtoTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.div`
    padding: 20px 15px;
    :first-child{
        padding-top: 30px; 
    }
`; 

const Title = styled.strong`
    font-size: 24px;
    font-weight: 600;
    margin-bottom :20px; 
    display: block; 
    color: #D9D7D7;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fill, 125px );
    gap: 20px; 
`; 


const Section = ({title, children}) => (
    <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Container>
);
Section.protoTypes={
    title: ProtoTypes.string.isRequired,
    children: ProtoTypes.oneOfType([
        ProtoTypes.arrayOf(ProtoTypes.node),
        ProtoTypes.node
    ])
}

export default Section;

