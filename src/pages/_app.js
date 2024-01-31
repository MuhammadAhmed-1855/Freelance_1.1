import { Toaster } from "react-hot-toast";
import Nav from '../components/Nav'
import Footer from '../components/Footer'


export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return(
    <>
      <Nav></Nav>
      <Component {...pageProps} />
      <Toaster position="top-right" />
      <Footer></Footer>

    </>


  ) 
}