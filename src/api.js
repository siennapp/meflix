import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        "api_key":"8f90a66d6b31a16018489304eae240aa",
        "language":"en-US"
    },
});


export const movieApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    topRated: () => api.get("movie/top_rated"),
    search: term => api.get("search/movie",{
        params: {
            query: encodeURIComponent(term)
        }
    }),
    detail: id => api.get(`movie/${id}`,{
        params: {
            sppend_to_response: "videos"
        }
    }),
    credit: id => api.get(`/movie/${id}/credits`)
}

export const tvApi = {
    popular: () => api.get("tv/popular"),
    topRated: () => api.get("tv/top_rated"),
    airingToday: () => api.get("tv/airing_today"),
    search: term => api.get("search/tv",{
        params: {
            query: encodeURIComponent(term)
        }
    }),
    detail: id => api.get(`tv/${id}`,{
        params: {
            sppend_to_response: "videos"
        }
    }),
    credit: id => api.get(`/tv/${id}/credits`)
}

