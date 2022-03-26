import React,{ lazy, Suspense} from "react"
import App from "../App"
import Loading from "../components/loading/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom"

interface IRoute{
    path:string;
    component:React.FC;
    children?:IRoute[]
}

const routeList:IRoute[] = [
    {
        path: "/",
        component: App,
        children: [
            {
                path: "list",
                component: lazy(() => import("../pages/list/List"))
            },
            {
                path: "user/edit",
                component: lazy(() => import("../pages/user/Edit"))
            },
            {
                path: "article/edit",
                component: lazy(() => import("../pages/article/Edit"))
            },
        ]
    },
    {
        path: "/login",
        component: lazy(() => import("../pages/login/Login"))
    },
    {
        path: "/register",
        component: lazy(() => import("../pages/register/Register"))
    },
]


const MyRoute = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    {routeList.map((item, index) => {
                        //有子路由
                        if (item.children) {
                            return (
                                <Route key={index} path={item.path} element={<item.component />}>
                                    {
                                        item.children.map((child, childIndex) => {
                                            return (
                                                <Route key={childIndex} path={child.path} element={<child.component />}></Route>
                                            )
                                        })}
                                </Route>
                            )
                        } else {
                            //没有子路由
                            return (
                                <Route key={index} path={item.path} element={<item.component />}></Route>
                            )
                        }
                    })}
                </Routes>
            </Suspense>

        </BrowserRouter>
    )

}

export default MyRoute;