import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RequireAuth from "../components/RequireAuth";
import Register from "../pages/Register";
import LayoutForm from "../Layout/LayoutForm";

const router = createBrowserRouter([
    {
        errorElement: <NotFound />,
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        path: "/",
                        element: <Layout />,
                        children: [
                            {
                                index: true,
                                element: (
                                    <RequireAuth>
                                        <Home />
                                    </RequireAuth>
                                ),
                            },
                            {
                                path: "*",
                                element: <NotFound />,
                            },
                        ],
                    },
                ],
            },
            {
                errorElement: <NotFound />,
                children: [
                    {
                        path: "/",
                        element: <LayoutForm />,
                        children: [
                            {
                                path: "login",
                                element: <Login />,
                            },
                            {
                                path: "register",
                                element: <Register />,
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);

export default router;
