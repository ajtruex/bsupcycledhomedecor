import type { AppProps } from "next/app"
import "../styles/index.css"
import { Inter } from "next/font/google"
import NavBar from "../components/NavBar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <NavBar />
      <Component {...pageProps} />
    </main>
  )
}
