import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavigationEvents } from '@/utiles/navigation-events'
import { Suspense } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { MessageProvider } from '@/lib/message'
import { AuthProvider } from '@/lib/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'B-App',
  description: 'next js frist app입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full p-0">
          <MessageProvider />
          <AuthProvider />
          <Navbar />
          <div className='flex min-h-screen flex-col justify-between p-24'>
            <div >
              {children}
            </div>

          </div>{/* 메인 */}

          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
          <Footer />
        </div>
      </body>
    </html >
  )
}
