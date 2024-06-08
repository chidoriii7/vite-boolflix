import { reactive } from "vue";

export const store = reactive ({
    films: [],
    tvShows: [],
    apiFilm: 'https://api.themoviedb.org/3/search/movie',
    apiTv: 'https://api.themoviedb.org/3/search/tv',
    apiKey: '2cc82828f4e166e7ef0db66a8711e6b8',
})