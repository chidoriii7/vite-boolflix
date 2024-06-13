<script>
import { store } from "../store";

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
  <div class="header-page">
    <div class="left-side">
        <img src="/public/loghi/Logonetflix.png" alt="">
        <ul class="header-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">Tv Shows</a></li>
          <li><a href="#">Film</a></li>
          <li><a href="#">My list</a></li>
          <li><a href="#">Genres</a></li>
        </ul>
    </div>
    <div class="right-side">
        <input
          type="text"
          placeholder="Cerca Film o serie TV"
          v-model="store.goSearch"
          @keyup.enter="$emit('getMovies')"
          class="header-research"/>

          <a href=""><i class="fa-regular fa-bell notification"></i></a>
    </div>
  </div>
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


/* header */

.left-side {
    display: flex;
}

.right-side {
    display: flex;
    gap: 20px;
}

.notification {
    height: 20px;
    padding: 5px;
}

.header-research {
    padding-right: 10px;
}

.header-nav {
  display: flex;
  gap: 20px;
}

.header-page {

  width: 100%;
  height: 50px;
  padding: 10px;

  position: fixed;

  display: flex;
  justify-content: space-between;

  background-color: black;
  color: white;
}


</style>
