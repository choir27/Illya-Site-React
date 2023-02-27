import {Outlet, Navigate} from "react-router-dom"
import {MyContext} from "../App"
import {useContext} from "react"
const PrivateRoutes = () => {

  const UserContext = useContext(MyContext)

return(
  UserContext? <Outlet/> : <Navigate to = "/"/>
)

}

export default PrivateRoutes


