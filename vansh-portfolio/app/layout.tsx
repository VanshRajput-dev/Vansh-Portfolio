import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })

export const metadata: Metadata = {
  title: "Alex Chen - MLOps Engineer & Founder",
  description: "Building scalable AI infrastructure and creating tools for students. Cyber-industrial portfolio.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${jetbrainsMono.variable}`}>
      <body style={{ fontFamily: "var(--font-jetbrains)" }} className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
