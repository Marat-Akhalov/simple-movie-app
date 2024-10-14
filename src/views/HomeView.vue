<script setup lang="ts">
import { toRefs } from 'vue';
import { useMoviesStore } from '@/stores/movies';
import MoviesList from '@/components/movies/MoviesList.vue';
import SearchMovie from '@/components/SearchMovie.vue';

const movieStore = useMoviesStore()
const { movies } = toRefs(movieStore)
const { getMovies } = movieStore

getMovies()

const handleSearch = (searchString: string) => {
  getMovies(searchString)
  console.log(searchString);
}
</script>

<template>
  <main class="main">
    <SearchMovie @search="handleSearch" />
    <MoviesList :movies="movies" />
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
