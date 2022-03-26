import ReactDom from "react-dom"
import MyRoute from "./router"
import "./base.less"
ReactDom.render(
    <MyRoute/>,
    document.getElementById("root")
)