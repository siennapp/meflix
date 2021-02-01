import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";


const Container = styled.div``;

const TvPresenter = ({popular, topRated, airingToday, error, loading}) => 
    <>
    <Helmet>
        <title>Tv Shows | meflix </title>
    </Helmet>
    {loading ? (
        <Loader />
    ) : (
    <Container>
        { airingToday && airingToday.length > 0 && (
            <Section title="Airing Today">
                {airingToday.map( show => (
                    <Poster 
                        key={show.id} 
                        id={show.id} 
                        title={show.original_name} 
                        imageUrl={show.poster_path}
                        rating={show.vote_average}
                        isMovie={false}
                        year={show.first_air_date && show.first_air_date.substring(0,4)}
                    ></Poster>
                ))} 
            </Section>
         )}
         {popular && popular.length > 0 && (
            <Section title="Popular">
                {popular.map( show => (
                    <Poster 
                        key={show.id} 
                        id={show.id} 
                        title={show.original_name} 
                        imageUrl={show.poster_path}
                        rating={show.vote_average}
                        isMovie={false}
                        year={show.first_air_date && show.first_air_date.substring(0,4)}
                    ></Poster>
                ))}
            </Section>
         )}
         {topRated && topRated.length > 0 && (
            <Section title="Top Rated">
                {topRated.map( show => (
                    <Poster 
                        key={show.id} 
                        id={show.id} 
                        title={show.original_name} 
                        imageUrl={show.poster_path}
                        rating={show.vote_average}
                        isMovie={false}
                        year={show.first_air_date && show.first_air_date.substring(0,4)}
                    ></Poster>
                ))}
            </Section>
         )}
         {error && <Message color="red" text={error}></Message>}
    </Container>

    ) }
    </>
TvPresenter.propTypes = {
    popular: PropTypes.array,
    topRated: PropTypes.array,
    airingToday: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default TvPresenter; 