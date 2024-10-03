import { reactive } from "vue";

export const store = reactive ({

    //array vuoti utili post chiamata axios
    films: [],
    tvShows: [],
    posterImage: [],
    
    //variabile per la ricerca
    goSearch: '',

    //API & KEY
    apiFilm: 'https://api.themoviedb.org/3/search/movie',
    apiTv: 'https://api.themoviedb.org/3/search/tv',
    apiKey: '2cc82828f4e166e7ef0db66a8711e6b8',

    // imgSize + poster_path
    imgSize: 'https://image.tmdb.org/t/p/w342/',
})



