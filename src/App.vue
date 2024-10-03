<script>

import axios from 'axios';
import { store } from "./store";
import AppContent from './components/main/AppContent.vue';
import AppFooter from './components/footer/AppFooter.vue';


export default {

  name: "Boolfix",

  components: {
  AppContent, AppFooter,
    
  },
  data(){
    return{
      store,
    }
  },
}
</script>

<template>

<main>
  <AppContent @getMovies="searchMovie"/>
</main>

<footer>
  <AppFooter />
</footer>

</template>

<style scoped>


</style>



<!-- <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> -->