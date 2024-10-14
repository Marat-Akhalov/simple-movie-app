<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps<{
  title: string
  releaseYear: number
  genres: string[]
  director: string
  posterUrl?: string
}>()

const imgLink = computed(() => props.posterUrl ?? '@/assets/img/placeholder-img.jpg')
const genres = computed(() => props.genres.slice(0, 2).join(' '))
</script>

<template>
  <li class="movie__item">
    <img
      :src="imgLink"
      alt="Movie cover"
      class="movie__cover"
    >
    <h3 class="movie__title">{{ title }}</h3>
    <p class="movie__director">{{ director }}</p>
    <div class="movie__info">
      <span class="movie__release-year">{{ releaseYear }}</span>
      <span class="movie__genres">{{ genres }}</span>
    </div>
  </li>
</template>

<style scoped lang="scss">
.movie {
  &__item {
    border: 2px solid coral;
    border-radius: 8px;
    max-width: 350px;
    width: 100%;
    font-size: 0;
    overflow: hidden;
  }

  &__cover {
    width: 100%;
    object-fit: cover;
  }

  &__title {
    margin: 0;
    font-size: 1.25rem;
  }

  &__director {
    margin: 0;
    font-size: 1rem;
  }

  &__info {
    display: flex;
    gap: 4px;
    font-size: 0.75rem;
  }
}
</style>
