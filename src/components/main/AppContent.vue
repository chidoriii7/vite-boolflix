<script>
import axios from "axios";
import { store } from "../../store";
import AppHeader from "../header/AppHeader.vue";

export default {
  name: "AppContent",

  components: {
    AppHeader,
  },
  data() {
    return {

      store,
    };
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

          // console.log(this.store.films);
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

          // console.log(this.store.tvShows);
        });

      this.store.goSearch = "";
    },
    
    limitedFilms () {

    },

    limitedTvShow () {
      
    }
  },
};
</script>

<template>
  <header>
    <AppHeader @getMovies="searchMovie" />
  </header>
  <main class="page-content">
    <div class="film-list">
      <div class="py-4 px-5">

        <!-- <h3 v-if="store.films.length === 1"> E' stato trovato un solo film </h3> 
        <h3 v-else-if="store.films.length > 1"> Sono stati trovati  <strong style="color: red;">{{ store.films.length }}</strong> Films </h3>
        <h3 v-else>Non sono stati trovati film con questo filtro. </h3> -->

        <h3>Risultato ricerca Film ( <strong style="color: red;">{{ store.
        films.length }}</strong> )</h3>

      </div>

      <div class="container py-5">
        <div class="d-flex row">

          <div class="col-2 d-flex align-items-center justify-content-center">
            <div class="align-items-center justify-content-center">
              <button class="prev-button"> < </button>
            </div>
          </div>
  
          <div class="col-8 d-flex">
            <div v-for="(film, index) in store.films.slice(0, 5)" :key="index" class="d-flex text-center">
              <div class="d-flex align-items-center py-3 mb-3">
                <div>
                  <div v-if="film.poster_path === null">
                    <img class="poster-image" src="/public/loghi/y9DpT.jpg" alt="" />
                  </div>
                  <div v-else>
                    <img
                      class="poster-image"
                      :src="store.imgSize + film.poster_path"
                      alt=""
                    />
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex col-2 align-items-center justify-content-center">
            <div class="align-items-center justify-content-center">
              <button class="prev-next"> > </button>
            </div>
          </div>
      </div>
      </div>
      <div class="tvshow-list">
        <div class="py-5 px-5">

          <!-- <h3 v-if="store.tvShows.length === 1"> E' stata trovata solo una Serie TV </h3> 
            <h3 v-else-if="store.tvShows.length > 1"> Sono state trovate <strong style="color: red;">{{ store.tvShows.length }}</strong> Serie TV </h3>
            <h3 v-else>Non sono state trovate Serie TV con questo filtro. </h3> -->

            <h3>Risultato ricerca Serie TV ( <strong style="color: red;">{{ store.tvShows.length }}</strong> )</h3>

        </div>
      </div>
      <div class="container py-5">
        <div class="d-flex row">

          <div class="col-2 d-flex align-items-center justify-content-center">
            <div class="align-items-center justify-content-center">
              <button class="prev-button"> < </button>
            </div>
          </div>

          <div class="col-8 d-flex">
            <div v-for="(serietv, index) in store.tvShows.slice(0, 5)" class="d-flex text-center" :key="index">
              <div class="d-flex align-items-center py-3 mb-3">
                <div  >
                  <div v-if="serietv.poster_path === null">
                    <img class="poster-image" src="/public/loghi/y9DpT.jpg" alt="" />
                  </div>
                  <div v-else>
                    <img
                      class="poster-image"
                      :src="store.imgSize + serietv.poster_path"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex col-2 align-items-center justify-content-center">
            <div class="align-items-center justify-content-center">
              <button class="prev-next"> > </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped>
.flag-language {
  width: 20px;
}

.poster-image{
  width: 350px;
  height: 175px;
}

.page-content {
  background-color: darkslateblue;
  color: white;
}

.prev-button {
}

</style>




            <!-- <div>
               voto
              <ul>
                    <li>
                      <span class=""
                        v-for="stelline in Math.round(
                          (film.vote_average * 5) / 10
                        )"
                      >
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <span
                        v-for="stelline in 5 -
                        Math.round((film.vote_average * 5) / 10)"
                      >
                        <i class="fa-regular fa-star"></i>
                      </span>
                    </li>
                  </ul>

            </div> -->