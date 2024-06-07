<script>
import axios from 'axios';
import { store } from './store';
export default {
  name:'Boolfix',
  data(){
    return{
      store,
      goSearch:''
    }
  },
  methods: {
    searchMovie(){
      axios.get(this.store.apiFilm, {
        params: {
          api_key: this.store.apiKey,
          query: this.goSearch
        }
      }).then((response) => {

        this.store.films = response.data.results
        
        })
      console.log(this.store.films[0])
        


      
    },
  },
}

</script>

<template>
  <input 
  type="text"
  placeholder="Cerca Film"
  v-model="goSearch">
  <button @click="searchMovie">Cerca</button>
<div class="row">
  <div v-for="film in store.films"
  class="col-lg-3 text-center">   
  <div class="d-flex align-items-center flex-column mb-3">
          <ul>
            <!-- Titolo Originale -->
            <li> titolo originale: {{ film.original_title }}</li>
  
            <!-- Titolo -->
            <li> titolo: {{ film.title }}</li>
        
            <!-- Lingua -->
            <li>lingua del film: {{ film.original_language }}</li>
  
            <!-- Voto -->
            <li>numero di voti: {{ film.vote_count }}</li>
          </ul>
        </div>
  </div>
</div>


</template>

<style>
  .info-film{
    display: flex;
  }
</style>