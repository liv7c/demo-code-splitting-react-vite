import {useQuery} from '@tanstack/react-query'
import {fetchMovies} from '../api/movies'

export const useMovies = () => {
  return useQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
    select: (data) => {
      return data.results
    },
  })
}
