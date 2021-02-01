import React from 'react';
import SearchPresenter from "./SearchPresenter";
import { tvApi, movieApi } from 'api';

export default class extends React.Component{
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "", 
        searchedTerm: "", 
        error: null,
        loading: false,
    }
    updateTerm = event => {
        const {target: {value} } = event; 
        this.setState({
            searchTerm: value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        const { searchTerm } = this.state;

        if( searchTerm !== "" ) {
            this.searchByTerm(searchTerm)   
            
            this.setState({
                searchedTerm: searchTerm
            })
        }
    }
    searchByTerm = async() => {
        const { searchTerm } = this.state;
        try {
            this.setState({
                loading: true
            })
            const {data:{results:movieResults}} = await movieApi.search(searchTerm);
            const {data:{results:tvResults}} = await tvApi.search(searchTerm);

            this.setState({
                movieResults,
                tvResults
            })
        } catch {
            this.setState({
                error: "Can't get Movie's information"
            })
        } finally {
            this.setState({
                loading: false
            })
        }
       
    }
    render(){
        //console.log(this.state)
        const { movieResults, tvResults, searchTerm, searchedTerm, error, loading } = this.state; 
        return <SearchPresenter 
            movieResults={movieResults} 
            tvResults={tvResults} 
            searchTerm={searchTerm} 
            searchedTerm={searchedTerm} 
            error={ error}
            loading={loading}
            handleSubmit = {this.handleSubmit}
            updateTerm = {this.updateTerm}
        ></SearchPresenter>

    }
} 