import {Link} from 'react-router'
import {useMoviesWithSuspense} from '../hooks/useMovies'
import {formatDate} from '../utils/date'

function Movies() {
  const {data: movies} = useMoviesWithSuspense()

  return (
    <>
      <h1 className="mb-4 text-xl">Our most popular movies</h1>
      <ul className="grid grid-cols-2 gap-x-5 gap-y-10">
        {movies.map((movie) => {
          return (
            <li
              key={movie.episode_id}
              className="space-y-2 rounded border border-neutral-200 p-4 shadow-sm"
            >
              <h3 className="text-lg">{movie.title}</h3>
              <p className="text-sm">Produced by {movie.producer}</p>
              <p className="text-sm">
                {' '}
                Release date: {formatDate(movie.release_date)}
              </p>
              <Link
                to={`/movies/${movie.episode_id}`}
                className="mt-4 inline-block rounded border border-teal-800 px-3 py-1 text-teal-800"
              >
                See more details
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Movies
