<script>
import { store } from '../../store';

export default {
  name: "AppHeader",

  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <div class="headbar">
      <div class="row">
        <div class="col-6 py-3 px-5">
          <div class="d-flex justify-space-between align-items-center">
            <img src="" alt="boolflix">
            <ul class="d-flex gap-5 ">
              <li><a href="#">Home</a></li>
              <li><a href="#">Tv Shows</a></li>
              <li><a href="#">Film</a></li>
              <li><a href="#">My List</a></li>
              <li><a href="#">Genres</a></li>
            </ul>
          </div>
        </div>
        <div class="col-6 py-3 px-5">
          <div class="d-flex justify-content-end align-items-center gap-5">
            <input
              type="text"
              placeholder="Cerca Film o serie TV &#128270;"
              v-model="store.goSearch"
              @keyup.enter="$emit('getMovies')"
              class="header-research"/>

              <a href="">
                 <i class="fa-regular fa-bell notification"></i>
              </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* reset */
a {
  text-decoration: none;
  color: currentColor;
}

img {
    width: 100px;
}

.headbar {
  background-color: black;
  color: white;
}

</style>