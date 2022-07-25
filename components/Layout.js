import Navbar from './Navbar'
import Banner from './Banner'
export default function Layout({children}) {
    return (
      <>
        <Navbar/>
        <Banner/>
        <main>
          {children}
        </main> 
      </>
    )
  }
  