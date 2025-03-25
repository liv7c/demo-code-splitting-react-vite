import {Link, useLoaderData} from 'react-router'
import {formatDate} from '../../utils/date'
import type {movieDetailsLoader} from './loader'

function MovieDetails() {
  const movie = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof movieDetailsLoader>>
  >

  return (
    <div>
      <Link to="/movies" className="mb-3 inline-block py-2 underline">
        &larr; Back to all movies
      </Link>
      <h1 className="text-3xl">{movie.title}</h1>
      <p className="mt-3">by {movie.director}</p>
      <p className="mt-3">Release date: {formatDate(movie.release_date)}</p>
      <div className="my-4 border border-dotted border-amber-500 p-3">
        <h2 className="mb-3 font-bold">Summary</h2>
        <p>{movie.opening_crawl}</p>
      </div>
    </div>
  )
}

export default MovieDetails
