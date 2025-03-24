import {Link} from 'react-router'

function Home() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl">Home</h1>
      <p className="lg mt-4">Welcome to our super cool application.</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facilis
        ullam, veniam placeat illo rerum eligendi sapiente ratione minima dicta
        assumenda voluptates magni nihil a architecto pariatur molestias
        dignissimos non?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facilis
        ullam, veniam placeat illo rerum eligendi sapiente ratione minima dicta
        assumenda voluptates magni nihil a architecto pariatur molestias
        dignissimos non?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facilis
        ullam, veniam placeat illo rerum eligendi sapiente ratione minima dicta
        assumenda voluptates magni nihil a architecto pariatur molestias
        dignissimos non?
      </p>
      <Link
        to="/movies"
        className="mt-4 inline-block rounded bg-teal-800 px-3 py-2 text-white"
      >
        Start exploring our movies
      </Link>
    </div>
  )
}

export default Home
