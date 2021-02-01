import { tvApi } from 'api';
import React from 'react';
import TvPresenter from "./TvPresenter";


export default class extends React.Component{
    state = {
        popular: null,
        topRated: null,
        airingToday: null,
        error: null,
        loading: true,
    }
    async componentDidMount() {
        try{
           const {data: {results : popular }} = await tvApi.popular();
           const {data: {results : airingToday }} = await tvApi.airingToday();
           const {data: {results : topRated }} = await tvApi.topRated();
         
            this.setState({
                popular,
                topRated,
                airingToday
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
        const { popular, topRated, airingToday, error, loading } = this.state; 
        return <TvPresenter 
            popular={popular} 
            topRated={topRated} 
            airingToday={airingToday} 
            error={ error}
            loading={loading}
        ></TvPresenter>

    }
} 