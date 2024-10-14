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
    <picture class="movie__picture">
      <img
        :src="imgLink"
        alt="Movie cover"
        width="250px"
        height="250px"
        class="movie__cover"
      >
    </picture>
    <div class="movie__inner">
      <h3 class="movie__title">{{ title }}</h3>
      <p class="movie__director">{{ director }}</p>
      <div class="movie__info">
        <span class="movie__release-year">{{ releaseYear }}</span>
        <span class="movie__genres">{{ genres }}</span>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
.movie {
  &__item {
    display: flex;
    flex-direction: column;
    border: 2px solid coral;
    border-radius: 8px;
    max-width: 350px;
    width: 100%;
    min-height: 300px;
    font-size: 0;
    overflow: hidden;
  }

  &__cover {
    width: 100%;
    height: 250px;
    // aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: top;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
    height: 100%;
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
    margin-top: auto;
    display: flex;
    gap: 4px;
    font-size: 0.75rem;
  }
}
</style>
