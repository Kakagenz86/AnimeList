import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './component/navbar/index'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AnimeList',
  description: 'Generated by Muhamad Kaka Hardiansyah',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-color-dark ${inter.className}`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}