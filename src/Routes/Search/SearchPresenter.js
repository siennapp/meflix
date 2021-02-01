import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";


const Container = styled.div`
    padding: 20px 15px;
`;

const Form = styled.form`
    margin-bottom: 40px;
`; 
const Input = styled.input` 
    all: unset; 
    width: 100%; 
    font-size: 18px;
`;

const SearchPresenter = ({
    movieResults, 
    tvResults, 
    searchTerm,
    searchedTerm, 
    handleSubmit,
    updateTerm,
    error, 
    loading
    }) => (
        <>
        <Helmet>
            <title>Search | Meflix </title>
        </Helmet>
         <Container>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="Search Moives or TV shows..." value={searchTerm} onChange={updateTerm} />
            </Form>
            {loading? <Loader /> : <>
                {movieResults && movieResults.length > 0 && (
                    <Section title="Movie Results">
                        {movieResults.map( movie => (
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
                {tvResults && tvResults.length > 0 && (
                    <Section title="TV Show Results">

                        {tvResults.map( show => (
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
                {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && <Message color="grey" text={`Not Found for: ${searchedTerm}`}></Message>}
            </>}
            
        </Container>
        </>
    )

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    searchedTerm: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired,

}

export default SearchPresenter; 