import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`
    
`; 


const Image = styled.div`
    height: 188px; 
    background-image: url(${props => props.bgUrl});
    background-size: contain; 
    background-repeat: no-repeat; 
    margin-bottom: 5px; 
    transition: opacity .2s;
`; 
const Rating = styled.span`
    font-size: 12px;
    position: absolute; 
    left: 0; bottom: 0; 
    padding: 5px; 
    opacity: 0; 
    transition: opacity .25s;

    span{
        color: yellow;
    }
`; 

const ImageContainer = styled.div`
   margin-bottom: 5px; 
    &:hover{
        ${Rating}{
            opacity: 1; 
        };
        ${Image} {
            opacity: .4;
        };
       
    }
    position: relative; 
`; 


const Title = styled.strong`
    display: block; 
    font-size: 13px; 
`; 

const Year = styled.span`
    font-size: 10px
`; 

const Poster = ({id, imageUrl, title, rating, year, isMovie = false}) => (
    
        <Link to={isMovie? `/movie/${id}`:`/show/${id}`}>
            <Container>
                <ImageContainer>
                    <Image bgUrl={imageUrl? `https://image.tmdb.org/t/p/w300/${imageUrl}` : require('../assets/noposter_s.png').default}></Image>
                    <Rating><span>⭑</span>{" "} {rating}/10</Rating>
                </ImageContainer>
                <Title>{title.length > 15 ? `${title.substring(0,14)}...`: title}</Title>
                <Year>{year}</Year>
            </Container>
        </Link>
);

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool
}
export default Poster; 