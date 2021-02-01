import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";


const Container = styled.div``;

const HomePresenter = ({nowPlaying, popular, upcoming, error, loading}) => 
    <>
        <Helmet><title>Movies | Meflix </title></Helmet>
       { loading ? (
            <Loader />
       ) : (
            <Container>
                {nowPlaying && nowPlaying.length > 0 && (
                    <Section title="Now Playing">
                        {nowPlaying.map( movie => (
                            <Poster 
                                key={movie.id} 
                                id={movie.id} 
                                title={movie.original_title} 
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                isMovie={true}
                                year={movie.release_date && movie.release_date.substring(0,4)}
                            ></Poster>
                        ))}
                    </Section>
                )}
                {upcoming && upcoming.length > 0 && (
                    <Section title="Upcoming">
                        {upcoming.map( movie => (
                            <Poster 
                            key={movie.id} 
                            id={movie.id} 
                            title={movie.original_title} 
                            imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                            isMovie={true}
                            year={movie.release_date && movie.release_date.substring(0,4)}
                        ></Poster>
                        ))}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title="Popular">
                        {popular.map( movie => (
                            <Poster 
                                key={movie.id} 
                                id={movie.id} 
                                title={movie.original_title} 
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                isMovie={true}
                                year={movie.release_date && movie.release_date.substring(0,4)}
                            ></Poster>
                        ))} 
                    </Section>
                )}
                {error && <Message color="red" text={error}></Message>}
            </Container>
        )}
    </>
  

HomePresenter.propTypes = {
    popular: PropTypes.array,
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default HomePresenter; 