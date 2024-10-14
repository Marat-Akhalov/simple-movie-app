<script setup lang="ts">
import type { Movie } from '@/types/Movie';
import MovieListItem from './MovieListItem.vue';

const prop = defineProps<{
  movies: Movie[]
}>()

console.log(prop.movies);
</script>

<template>
  <section class="movie">
    <h2 class="movie__header visually-hidden">List of movies</h2>
    <ul class="movie__list">
      <MovieListItem
        v-for="movie in movies"
        :key="movie.id"
        :title="movie.title"
        :director="movie.director"
        :release-year="movie.releaseYear"
        :genres="movie.genres"
        :poster-url="movie.posterUrl"
      />
    </ul>
  </section>
</template>

<style scoped lang="scss">
.movie {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    list-style-type: none;
  }
}
</style>
