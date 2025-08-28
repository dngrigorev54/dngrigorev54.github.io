import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-playfair",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: "Копирайтинг и тексты для бизнеса | Профессиональный копирайтер",
  description:
    "Профессиональный копирайтинг, прототипирование и тексты для бизнеса. Лендинги, коммерческие предложения, SEO-тексты и контент-маркетинг.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body
        className={`font-sans ${sourceSans.variable} ${playfairDisplay.variable} ${GeistSans.variable} ${GeistMono.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
