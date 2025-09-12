import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import EmailSection from './components/common/EmailSection'


function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <EmailSection />
      <Footer />

    </>
  )
}

export default App
