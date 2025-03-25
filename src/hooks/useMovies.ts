import {useQuery, useSuspenseQuery} from '@tanstack/react-query'
import {fetchMovie, fetchMovies} from '../api/movies'

export const useMovies = () => {
  return useQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
    select: (data) => {
      return data.results
    },
  })
}

export const useMoviesWithSuspense = () => {
  return useSuspenseQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
    select: (data) => {
      return data.results
    },
  })
}

export const useMovie = (movieId: string) => {
  return useQuery({
    queryKey: ['movies', movieId],
    queryFn: () => fetchMovie(movieId),
    enabled: Boolean(movieId),
  })
}
