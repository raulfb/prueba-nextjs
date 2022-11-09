import { Navigation } from "./components/Navigation"
import '../styles/globals.css'
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Mi primera aplicación con Next 13</title>
      </head>
      <body>
      <marquee>Example.com</marquee>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
