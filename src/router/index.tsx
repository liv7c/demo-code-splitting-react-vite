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
        Component: Home,
      },
      {
        id: 'about',
        path: '/about',
        Component: About,
      },
      {
        id: 'movies',
        path: '/movies',
        Component: Movies,
      },
      {
        id: 'movieDetail',
        path: '/movies/:id',
        Component: MovieDetails,
      },
      {
        id: 'not-found',
        path: '*',
        Component: NotFound,
      },
    ],
  },
])
