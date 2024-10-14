import type { Movie } from '@/types/Movie'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useMoviesStore = defineStore('movies', () => {
  const movies = ref<Movie[]>([])
  const isLoading = ref(false)
  const hasMovies = computed(() => movies.value && movies.value.length > 0)

  const getMovies = async (
    searchQuery: string = '',
    options?: { count: number; page: number },
  ) => {
    const defaultOptions = { count: 12, page: 0 }
    const finalOptons = { ...defaultOptions, ...options }
    const { count, page } = finalOptons

    try {
      isLoading.value = true

      const resp = await fetch(
        `https://cinemaguide.skillbox.cc/movie?count=${count}&page=${page}&title=${searchQuery}`,
      )
      const data = await resp.json()

      movies.value = data
    } catch (err) {
      throw err
    } finally {
      isLoading.value = false
    }
  }

  return { movies, getMovies, isLoading, hasMovies }
})
