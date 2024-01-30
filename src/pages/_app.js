// import '../../styles/'
// import {Analytics} from '@vercel/analytics/react'
// import { SessionProvider } from "next-auth/react"
import { Toaster } from "react-hot-toast";
import Nav from '../components/Nav'
import Footer from '../components/Footer'

// import 'bootstrap/dist/css/bootstrap.min.css'; // 

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return(
    <>
      {/* <SessionProvider session={session}> */}
      {/* <Nav></Nav> */}
      <Nav></Nav>
      <Component {...pageProps} />
      <Toaster position="top-right" />
      <Footer></Footer>


      {/* <Analytics/>

      </SessionProvider> */}
    </>


  ) 
}