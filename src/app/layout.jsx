import { Poppins, Lemon } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const inter = Poppins({ subsets: ['latin'], weight: ['400'] })
const le = Lemon({subsets: ['latin'], weight: ['400']})

export const metadata = {
  title: 'Kreator || Chinese Blog',
  description: 'Bringing Chinese recipes closer to your doorstep ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <Navbar />
         {children}
        
        {/* <Footer /> */}
        </body>
        
    </html>
  )
}
