type LoaderProps = {
  message?: string
}

export function Loader({message = 'Loading content...'}: LoaderProps) {
  return (
    <>
      <p>
        <span className="sr-only">{message}</span>
      </p>
      <div className="my-4 flex h-12 w-12 animate-spin justify-self-center rounded-full border-8 border-gray-300 border-t-teal-600" />
    </>
  )
}
