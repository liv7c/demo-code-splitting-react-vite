import {createBrowserRouter} from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import {AppLayout} from '../layouts/AppLayout'
import NotFound from '../pages/NotFound'
import MovieDetails from '../pages/MovieDetails'
import Movies from '../pages/Movies'

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
