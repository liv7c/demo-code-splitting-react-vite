import {createBrowserRouter} from 'react-router'
import Home from '../pages/Home'
import {AppLayout} from '../layouts/AppLayout'
import {lazy} from 'react'
import {queryClient} from '../queryClient'
import {movieDetailsLoader} from '../pages/MovieDetails/loader'

const About = lazy(() => import('../pages/About'))
const NotFound = lazy(() => import('../pages/NotFound'))
const MovieDetails = lazy(() => import('../pages/MovieDetails'))
const Movies = lazy(() => import('../pages/Movies'))

export const router = createBrowserRouter([
  {
    id: 'root',
    element: <AppLayout />,
    children: [
      {
        id: 'home',
        path: '/',
        element: <Home />,
      },
      {
        id: 'about',
        path: '/about',
        element: <About />,
      },
      {
        id: 'movies',
        path: '/movies',
        element: <Movies />,
      },
      {
        id: 'movieDetail',
        path: '/movies/:id',
        loader: movieDetailsLoader(queryClient),
        element: <MovieDetails />,
      },
      {
        id: 'not-found',
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])
