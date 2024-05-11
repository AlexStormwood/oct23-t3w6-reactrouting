
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './styles/App.css'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import BaseLayout from './pages/_baseLayout'


const someRouterBlahBlah = createBrowserRouter([
  {
    path:"/",
    element: <BaseLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutPage />
      }, 
      {
        path: "contact",
        element: <ContactPage />
      }
    ]
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
