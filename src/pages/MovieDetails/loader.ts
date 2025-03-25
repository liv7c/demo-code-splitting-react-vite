import type {LoaderFunctionArgs} from 'react-router'
import type {QueryClient} from '@tanstack/react-query'
import {getMovieDetailsQuery} from '../../api/movies'
import type {Movie} from '../../types/movie'

export const movieDetailsLoader =
  (queryClient: QueryClient) =>
  async ({params}: LoaderFunctionArgs) => {
    const query = getMovieDetailsQuery(params.id ?? '')

    return queryClient.ensureQueryData(query) as Promise<Movie>
  }
