
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import PageNotFound from './pages/PageNotFound'


const someRouterBlahBlah = createBrowserRouter([
  {
    path:"/",
    element: <HomePage />,
    errorElement: <PageNotFound />
  },
  {
    path: "/about",
    element: <AboutPage />
  }, 
  {
    path: "/contact",
    element: <ContactPage />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={someRouterBlahBlah} />
    </>
  )
}

export default App
