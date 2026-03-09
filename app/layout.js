import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Sach Patel | Portfolio",
  description: "Full Stack Developer Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}