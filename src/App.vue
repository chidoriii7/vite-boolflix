<script>

import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
import { store } from "./store";

export default {

  name: "Boolfix",

  components: {
    AppHeader,
    
  },
  data(){
    return{
      store,
    }
  },

    methods: {
    searchMovie() {
      axios
        .get(this.store.apiFilm, {
          params: {
            api_key: this.store.apiKey,
            query: this.store.goSearch,

            },
            })
            .then((response) => {
              this.store.films = response.data.results;
              console.log(this.store.posterImage);
        });

      axios
        .get(this.store.apiTv, {
          params: {
            api_key: this.store.apiKey,
            query: this.store.goSearch,
          },
        })
        .then((response) => {
          this.store.tvShows = response.data.results;
            console.log(this.store.posterImage);
        });

      this.store.goSearch = "";
    },
  },
}
</script>

<template>
<header>
  <AppHeader @getMovies="searchMovie"/>
</header>
<main class="page-content">
  <div class="row">
    <h1 class="text-center">FILM</h1>
    <div v-for="film in store.films" class="col-lg-3 text-center">
      <div class="d-flex align-items-center flex-column mb-3">
        <div v-if="film.poster_path  === null" >
          <img class="poster-image" src=""   alt="" /> NON DISPONIBILE
        </div>
        <div v-else>
          <img class="poster-image":src="store.imgSize + film.poster_path " alt="" />
        </div>
        <ul>
          <!-- Titolo Originale -->
          <li>titolo originale: {{ film.original_title }}</li>

          <!-- Titolo -->
          <li>titolo: {{ film.title }}</li>

          <!-- Lingua -->
          <li v-if="film.original_language === 'it'">
            lingua del film: <img class="flag-language" src="/public/flags/it4x3.svg" alt="" />
          </li>
          <li v-else-if="film.original_language === 'en'">
            lingua del film <img class="flag-language" src="/public/flags/us4x3.svg" alt="" />
          </li>
          <li v-else>lingua del film: {{ film.original_language }}</li>

          <!-- Voto -->
          <li>
            <span v-for="stelline in Math.round((film.vote_average * 5) / 10)">
              <i class="fa-solid fa-star"></i> 
              </span>
              <span v-for="stelline in 5 - Math.round((film.vote_average * 5) / 10)">
                <i class="fa-regular fa-star"></i>
              </span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="row">
    <h1 class="text-center">SERIE TV</h1>
    <div v-for="serietv in store.tvShows" class="col-lg-3 text-center">
      <div class="d-flex align-items-center flex-column mb-3">
        <div v-if="serietv.poster_path  === null" >
          <img class="poster-image" src="/src/img/99b11c7f-d1a9-469d-848c-08b7a18e87c1.jpg"   alt="" /> 
        </div>
        <div v-else>
          <img class="poster-image":src="store.imgSize + serietv.poster_path " alt="" />
        </div>
        <ul>
          <!-- Titolo Originale -->
          <li>titolo originale: {{ serietv.original_name }}</li>

          <!-- Titolo -->
          <li>titolo: {{ serietv.name }}</li>

          <!-- Lingua -->
          <li v-if="serietv.original_language === 'it'">
            lingua della serie tv:
            <img class="flag-language" src="/public/flags/it4x3.svg" alt="" />
          </li>
          <li v-else-if="serietv.original_language === 'en'">
            lingua della serie tv:
            <img class="flag-language" src="/public/flags/us4x3.svg" alt="" />
          </li>
          <li v-else>lingua della serie tv: {{ serietv.original_language }}</li>

          <!-- Voto -->
          <li>
            <span v-for="stelline in Math.round((serietv.vote_average * 5) / 10)">
              <i class="fa-solid fa-star"></i> 
              </span>
              <span v-for="stelline in 5 - Math.round((serietv.vote_average * 5) / 10)">
                <i class="fa-regular fa-star"></i>
              </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</main>

</template>

<style scoped>

.flag-language {
  width: 20px;
}

.poster-image {
  width: 150px;
}

.page-content{
  padding-top: 50px;
}
</style>
