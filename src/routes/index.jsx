
import PrivateRoutes from "../components/PrivateRoutes"
import Layout from "../Layouts"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import Answer from "../Pages/Answer"
import Quiz from "../Pages/Quiz"
import Result from "../Pages/Result"
import Topics from "../Pages/Topics"

import Logout from "../Pages/Logout"
export const routes=[
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "register",
                element: <Register/>
            },
            {
                path: "logout",
                element: <Logout/>
            },
            {
                element: <PrivateRoutes/>,
                children: [
                    {
                        path: "answers",
                        element: <Answer/>
                    },
                    {
                        path: "quiz/:id",
                        element: <Quiz/>
                    },
                    {
                        path: "result/:id",
                        element: <Result/>
                    },
                    {
                        path: "topics",
                        element: <Topics/>
                    }
                ]
            }
        ]
    }
]