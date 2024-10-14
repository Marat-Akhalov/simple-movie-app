<script setup lang="ts">
import { toRefs } from 'vue';
import { useMoviesStore } from '@/stores/movies';
import MoviesList from '@/components/movies/MoviesList.vue';

const movieStore = useMoviesStore()
const { movies } = toRefs(movieStore)
const { getMovies } = movieStore

getMovies()
</script>

<template>
  <main>
    <MoviesList :movies="movies" />
  </main>
</template>
