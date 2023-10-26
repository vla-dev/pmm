import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
} from "react-router-dom";
import App from './App.tsx';
import Home from './views/Home.tsx';
import Comments from './views/Comments.tsx';

export const navigation = [
    { to: '/', label: 'Home' },
    { to: '/comments', label: 'Comments' },
]

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route
                path="comments"
                element={<Comments />}
            />
        </Route>
    )
);

const Router = () => {
    return <RouterProvider router={routes} />
}

export default Router;