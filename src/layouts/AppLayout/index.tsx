import type {PropsWithChildren} from 'react'

export function AppLayout({children}: PropsWithChildren) {
  return (
    <>
      <header className="bg-teal-800 py-3 text-white">
        <div className="max-width-wrapper">
          <p>
            Love Movies <span aria-hidden="true">🎥</span>
          </p>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}
