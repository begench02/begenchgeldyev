import './styles/index.sass'
import { router } from './router'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export const App = () => {
    const routes = createBrowserRouter(router)

    return <RouterProvider router={routes} />
}
