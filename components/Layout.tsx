import React, { Children } from 'react'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <li>Home</li>
      </nav>
      {children}
    </div>
  )
}

export default Layout
