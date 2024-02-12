import './styles/index.sass'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { router } from './router'

export const App = () => {
    const routes = createBrowserRouter(router)

    return <RouterProvider router={routes} />
}
