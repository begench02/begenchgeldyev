import { Blog } from 'pages/blog/blog'
import { Home } from 'pages/home/home'
import { Layout } from 'components/layout/layout'
import { Projects } from 'pages/projects/projects'
import { RouteObject } from 'react-router-dom'

export const router: RouteObject[] = [
    {
        path: '',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/projects',
                element: <Projects />,
            },
            
        ],
    },
]
