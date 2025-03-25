import type {Movie} from '../types/movie'

export const fetchMovies = async (): Promise<{results: Movie[]}> => {
  const resp = await fetch('https://swapi.dev/api/films')
  if (resp.ok) {
    throw new Error(`unable to retrieve movies - ${resp.status}`)
  }

  return resp.json()
}

export const fetchMovie = async (movieId: string): Promise<Movie> => {
  const resp = await fetch(`https://swapi.dev/api/films/${movieId}`)
  if (!resp.ok) {
    throw new Error(`unable to retrieve movie - ${resp.status}`)
  }
  return resp.json()
}
