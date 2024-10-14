<script setup lang="ts">
import { toRefs } from 'vue';
import { useMoviesStore } from '@/stores/movies';
import MoviesList from '@/components/movies/MoviesList.vue';
import SearchMovie from '@/components/SearchMovie.vue';

const movieStore = useMoviesStore()
const { movies } = toRefs(movieStore)
const { getMovies } = movieStore

getMovies()
</script>

<template>
  <main class="main">
    <SearchMovie />
    <MoviesList :movies="movies" />
  </main>
</template>
