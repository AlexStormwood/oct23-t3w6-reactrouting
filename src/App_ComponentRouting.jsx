
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import BaseLayout from './pages/_baseLayout'

function App() {
  

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<BaseLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/about/services' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='*' element={<PageNotFound />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
