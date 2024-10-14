<script setup lang="ts">
import { ref } from 'vue';

defineEmits<{
  (e: 'search', searchQuery: string): void
}>()

const searchQuery = ref('')
</script>

<template>
  <div class="search-movie">
    <form
      class="search-movie__form"
      @submit.prevent="$emit('search', searchQuery)"
    >
      <input
        type="text"
        class="search-movie__input"
        v-model="searchQuery"
      >
      <button class="search-movie__btn btn-reset">
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.search-movie {
  &__form {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 560px;
    width: 100%;
    margin: auto;
  }

  &__input {
    border: 2px solid coral;
    border-radius: 8px;
    padding: 8px 12px;
    padding-right: 32px;
    width: 100%;
    min-height: 40px;
    outline: none;

    &:focus-visible {
      border-color: #6098df;
    }
  }

  &__btn {
    position: absolute;
    right: 5px;
    display: flex;
    margin: auto;
    cursor: pointer;
  }
}
</style>
