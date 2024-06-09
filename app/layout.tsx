import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Matthew | Personal Portfolio',
  description: 'Matthew Baker is a full stack developer using the MERN stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth w-[97vw] flex flex-col items-center'>
      <body className={`inter ${poppins.className} w-[98%] bg-slate-50 text-gray-950 relative pt-28 `}>

        <div  className='absolute'>
          <div className='bg-[#fbe2e3] absolute top-[-6rem] right-[-11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10'></div>
        
        <div  className='bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl-left-[-5rem] -z-10'></div>
        </div>
        

      <ActiveSectionContextProvider>
        <Header />
        {children}
        <Footer />

        <Toaster position="top-left"/>
        </ActiveSectionContextProvider>
        </body>
    </html>
  )
}
