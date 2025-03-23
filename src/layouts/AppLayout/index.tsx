import type { PropsWithChildren } from "react";

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="bg-blue-900 text-white px-2 py-4">
        <p>Love Movies</p>
      </header>
      <main>{children}</main>
    </>
  );
}
