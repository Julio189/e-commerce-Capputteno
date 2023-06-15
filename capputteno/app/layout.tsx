import Header from '@/components/header/Header'
import './globals.css'
import { Saira } from 'next/font/google'
import FilterContextProvider from '@/contexts/FilterContext'

const saira = Saira({ 
  weight:['300','400','500','600'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Capputeeno',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>
        <FilterContextProvider>
          <Header/>
          {children}
        </FilterContextProvider>
      </body>
    </html>
  )
}
