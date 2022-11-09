import { Navigation } from "./components/Navigation"
import '../styles/globals.css'
import { Space_Grotesk}from "@next/font/google"

const font=Space_Grotesk({
  weight:['400','700'],
  subsets:['latin']
})

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Mi primera aplicación con Next 13</title>
      </head>
      <body className="font.className">
      <marquee>Example.com</marquee>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
