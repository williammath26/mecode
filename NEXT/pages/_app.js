import '../styles/globals.css'
import MainContainers from '../components/MainContainers'

function MyApp({ Component, pageProps }) {
  return(

    <MainContainers>
      <Component {...pageProps} />
    </MainContainers>
  )
}

export default MyApp
