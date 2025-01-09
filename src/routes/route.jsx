import { Navigate, useRoutes } from 'react-router-dom'
import Home from '../components/Home'
import Layout from '../layout/layout'
import PrivateLayout from '../layout/privateLayout'
import Contact from '../components/Contact'
import Resume from '../components/Resume'
import About from '../components/About'
import Outreach from '../components/Outreach'
import Hobby from '../components/Hobby'
import Error from '../components/Error'
import Portfolio from '../components/Portfolio'

const Route = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    element: <PrivateLayout />,
                    children: [
                        {
                            path: '/contact',
                            element: <Contact />
                        },
                        {
                            path: '/resume',
                            element: <Resume />
                        },
                        {
                            path: '/about',
                            element: <About />
                        },
                        {
                            path: '/outreach',
                            element: <Outreach />
                        },
                        {
                            path: '/hobby',
                            element: <Hobby />
                        },
                        {
                            path: '/portfolio',
                            element: <Portfolio />
                        }
                    ]
                }, {
                    path: '*',
                    element: <Navigate to={'/404'} replace />
                }
            ]
        },
        {
            path: '404',
            element: <Error />
        }
    ])
    return routes
}

export default Route