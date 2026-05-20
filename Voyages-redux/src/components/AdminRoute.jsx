import { Navigate } from "react-router-dom"
// import { useAuth } from "../contexts/AuthContext"
import { useSelector } from "react-redux"

function AdminRoute ({children}) {
    const { user, token } = useSelector((state) => state.auth)

    // const { isAuthenticated } = useAuth()
    if(!user || !token) {
        return <Navigate to="/login" />
    }
    if(user.role !== 'admin' ) {
        return <Navigate to="/" />
    }
    return children
}

export default AdminRoute