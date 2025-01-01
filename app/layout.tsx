import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'wiki - Terminal-based Wikipedia',
  description: 'Access Wikipedia from your terminal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

