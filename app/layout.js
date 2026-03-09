import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Sach Patel | Portfolio",
  description: "Full Stack Developer Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}