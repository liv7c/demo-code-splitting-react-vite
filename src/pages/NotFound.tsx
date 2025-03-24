import {Link} from 'react-router'

function NotFound() {
  return (
    <div className="grid min-h-60 place-content-center">
      <h1 className="text-4xl">Page not found</h1>
      <Link to="/" className="mt-4 underline">
        Go back to home page
      </Link>
    </div>
  )
}

export default NotFound
