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
      indexFilm: 0,
      indexShow: 0,
      sliderSize: 5,
    };
  },

  methods: {
    searchMovie() {
      // chiamata API per i film
      axios
        .get(this.store.apiFilm, {
          params: {
            api_key: this.store.apiKey,
            query: this.store.goSearch,
          },
        })
        .then((response) => {
          this.store.films = response.data.results;
          // console.log(this.store.posterImage);
          // console.log(this.store.films);
        });

      //chiamata API per le serie TV

      axios
        .get(this.store.apiTv, {
          params: {
            api_key: this.store.apiKey,
            query: this.store.goSearch,
          },
        })
        .then((response) => {
          this.store.tvShows = response.data.results;
          // console.log(this.store.posterImage);
          // console.log(this.store.tvShows);
        });

  

      this.store.goSearch = "";
    },

    // limitedFilms() {
    //   return this.store.films.slice(
    //     this.indexFilm,
    //     this.indexFilm + this.sliderSize
    //   );
    // },

    // limitedTvShow() {
    //   return this.store.tvShows.slice(
    //     this.indexShow,
    //     this.indexShow + this.sliderSize
    //   );
    // },

    prevButtonFilm() {
      this.indexFilm -- ;
      
    },

    nextButtonFilm() {
      this.indexFilm ++ ;
    },

    prevButtonShow() {
      this.indexShow -- ;
    },

    nextButtonShow() {
      this.indexShow ++ ;
    },

    selectImageFilm(indice) {
      this.indexFilm = indice;
      console.log(indice);
    },

    selectImageShow(indice) {
      this.indexShow = indice;
      console.log(indice);
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

        <h3>
          Risultato ricerca Film (
          <strong style="color: red">{{ store.films.length }}</strong> )
        </h3>
      </div>

      <div class="container py-5">
        <div class="d-flex row">
          <div class="col-2 d-flex align-items-center justify-content-center">
            <div class="align-items-center justify-content-center">
              <button class="prev-button" @click="prevButtonFilm" v-if="indexFilm === 0" style="display: none;"> < </button>
              <button class="prev-button" @click="prevButtonFilm" v-else style="display:block;"> < </button>
            </div>
          </div>

          <div class="col-8 d-flex">
            <div
              v-for="(film, index) in store.films.slice(
                this.indexFilm,
                this.sliderSize, this.indexFilm + this.sliderSize
              )"
              :key="index"
              class="d-flex text-center"
            >
              <div class="d-flex align-items-center py-3 mb-3">
                <div>
                  <div v-if="film.poster_path === null">
                    <img
                      class="poster-image col-3"
                      src="/public/loghi/y9DpT.jpg"
                      alt=""
                      @pointerover="selectImageFilm(index)"
                      @click="selectImageFilm(index)"
                    />
                  </div>
                  <div v-else>
                    <img
                      class="poster-image"
                      :class="{activefilm: indexFilm === index}"
                      :src="store.imgSize + film.poster_path"
                      alt=""
                      @pointerover="selectImageFilm(index)"
                      @click="selectImageFilm(index)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex col-2 align-items-center justify-content-center">
            <div class="align-items-center justify-content-center">
              <button class="next-button" @click="nextButtonFilm" v-if="indexFilm + sliderSize >= store.films.length" style="display: none;"> > </button>
              <button class="next-button" @click="nextButtonFilm" v-else style="display: block;"> > </button>
            </div>
          </div>
        </div>
      </div>
      <div class="tvshow-list">
        <div class="py-5 px-5">
          <!-- <h3 v-if="store.tvShows.length === 1"> E' stata trovata solo una Serie TV </h3> 
            <h3 v-else-if="store.tvShows.length > 1"> Sono state trovate <strong style="color: red;">{{ store.tvShows.length }}</strong> Serie TV </h3>
            <h3 v-else>Non sono state trovate Serie TV con questo filtro. </h3> -->

          <h3>
            Risultato ricerca Serie TV (
            <strong style="color: red">{{ store.tvShows.length }}</strong> )
          </h3>
        </div>
      </div>
      <div class="container py-5">
        <div class="d-flex row">
          <div class="col-2 d-flex align-items-center justify-content-center">
            <div class="align-items-center justify-content-center">
              <button class="prev-button" @click="prevButtonShow" v-if="indexShow === 0" style="display: none;"> < </button>
              <button class="prev-button" @click="prevButtonShow" v-else style="display:block;"> < </button>
            </div>
          </div>

          <div class="col-8 d-flex">
            <div
              v-for="(serietv, index) in store.tvShows.slice(
                this.indexShow,
                this.indexShow + this.sliderSize
              )"
              class="d-flex text-center"
              :key="index"
            >
              <div class="d-flex align-items-center py-3 mb-3">
                <div>
                  <div v-if="serietv.poster_path === null">
                    <img
                      class="poster-image"
                      :class="{activeshow: indexShow === index}"
                      @pointerover="selectImageShow(index)"
                      @click="selectImageShow(index)"
                      src="/public/loghi/y9DpT.jpg"
                      alt=""
                    />
                  </div>
                  <div v-else>
                    <img
                      class="poster-image col-5"
                      :class="{activeshow: indexShow === index}"
                      @pointerover="selectImageShow(index)"
                      @click="selectImageShow(index)"
                      :src="store.imgSize + serietv.poster_path"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex col-2 align-items-center justify-content-center">
            <div
              class="align-items-center justify-content-center button-container"
            >
            <button class="next-button" @click="nextButtonShow" v-if="indexShow + sliderSize >= store.tvShows.length" style="display: none;"> > </button>
            <button class="next-button" @click="nextButtonShow" v-else style="display: block;"> > </button>
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

.poster-image {

  width: 300px;
  height: 200px;

}

.page-content {
  background-color: darkslateblue;
  color: white;
}

.prev-button,
.next-button {
  width: 100px;
  height: 100px;
  background-color: transparent;
  color: white;
  border: none;
}

.prev-button:hover,
.next-button:hover {
  color: red;
}

.poster-image.activefilm {
    border: 2px solid #ccc;
    opacity: 1;
}

.poster-image.activeshow {

  border: 2px solid red;
  opacity: 1;
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
