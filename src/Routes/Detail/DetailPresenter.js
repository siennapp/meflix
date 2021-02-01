import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";


const Container = styled.div`
    width: 100%; 
    height: calc( 100vh - 60px );
    position: relative; 
    display: flex;  
    justify-content: center; 
    align-items: center; 
`;
const Backdrop = styled.div`
    position: absolute; 
    top: 0; left: 0; 
    width: 100%; 
    height: 100%; 
    background-image: url(${props => props.bgImage});
    background-size: cover; 
    background-position: center center; 
    backgrond-repeat: no-repeat; 
    filter: blur(6px); 
    opacity: .3;
    z-index: 0; 
`;

const Content = styled.div`
    position: relative; 
    z-index: 1; 
    width: 85%; 
    height: 70%; 
    display: flex; 
`;
const Cover = styled.div`
    width: 30%; 
    height: 100%; 
    background-image: url(${props => props.bgImage});
    background-size: cover; 
    background-position: center center; 
    background-repeat: no-repeat; 
    border-radius: 10px;
    
`;  

const Data = styled.div`
    width: 70%; 
    height: 100%; 
    padding-left: 40px; 
`;

const Title = styled.strong`
    font-size: 28px; 
    font-weight: bold;
    display: inline-block; 
    margin-bottom: 15px; 
`;
const Item = styled.span`
    font-size: 12px; 
    padding-right: 15px; 
    &::after{
        content: '·'; 
        display: inline-block; 
        margin-left: 15px; 
    }
    &:last-of-type::after{
        display: none; 
    }
`;
const ItemContainer = styled.div`
    margin-bottom: 25px; 
`;

const Overview = styled.p`
    line-height: 1.5em; 
    font-size: 14px; 
    font-weight: 300;
    opacity: .8; 
    width: 80%;
`;
const Imdb = styled.span`
    display: inline-block; 
    background: #f5c518;
    color: #000; 
    padding: 3px 5px; 
    border-radius: 3px; 
    margin-left: 10px; 
    font-size: 10px; 
    font-weight: bold;
    vertical-align: top;
`;


const DetailPresenter = ({result, error, loading}) => 
    loading ? (<Loader></Loader>) : (
        <Container> 
            <Helmet>
                <title>{result.original_title ? result.original_title : result.name } | Meflix</title>
            </Helmet>
            <Backdrop bgImage={result.backdrop_path? `https://image.tmdb.org/t/p/original/${result.backdrop_path}`:require('../../assets/noposter_s.png')}></Backdrop>
            <Content>
                <Cover bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original/${result.poster_path}`: require('../../assets/noposter_s.png').default}></Cover>
                <Data>
                    <Title>{result.original_title ? result.original_title : result.name }</Title>
                    <Link to={{pathname:`https://www.imdb.com/title/${result.imdb_id}`}} target="_blank"><Imdb>IMDb</Imdb></Link>
                    <ItemContainer>
                        <Item>{result.release_date ? result.release_date.substring(0,4) : result.first_air_date.substring(0,4)}</Item>
                        <Item>{result.runtime? result.runtime : result.episode_run_time } min</Item>
                        <Item>{result.genres && result.genres.map((genre, index) => 
                            index === result.genres.length - 1 ? genre.name : `${genre.name} / `
                        
                        )}</Item>
                    </ItemContainer>
                    <Overview>{result.overview}</Overview>
                </Data>
            </Content>
            {error && <Message color="red" text={error}></Message>}
        </Container>
    );


DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default DetailPresenter; 