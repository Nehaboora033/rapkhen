import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import About from '../pages/About'
import Management from '../pages/Management'
import News from '../pages/News'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'

const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'management', element: <Management /> },
            { path: 'news', element: <News /> },
            { path: 'gallery', element: <Gallery /> },
            { path: 'contact', element: <Contact /> },
        ],
    },
])

export default AppRoutes