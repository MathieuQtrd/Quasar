import { createContext, useContext, useEffect, useState } from "react"
// createContext : permet de créer un context
// useContext : permet d'utiliser un context
// useEffect : permet d'exécuter du code selon le cycle de vie d'une requete ajax par exemple (pour tout effet secondaire au chargement de react)

const AuthContext = createContext();

export function AuthProvider({children}) {

    // null = l'utilisateur n'est pas encore connecté
    const [user, setUser] = useState(null)
    // null = l'utilisateur n'est pas encore connecté, on a pas encore récupérer le token
    const [token, setToken] = useState(null)

    useEffect(() => {
        // récupération dans le localStorage
        // useEffect est nécessaire dans ce cas car la lecture du localStorage est un effet secondaire

        const savedUser = localStorage.getItem("user")
        const savedToken = localStorage.getItem("token")

        if(savedUser && savedToken) {
            setUser(JSON.parse(savedUser))
            setToken(savedToken)
        }
    }, [])

    const login = (userData, accessToken) => {
        // fonction de conenxion qui sera appelée lors d'une connexion réussi avec l'api via une requete ajax
        setUser(userData)
        setToken(accessToken)
        localStorage.setItem("user", JSON.stringify(userData))
        localStorage.setItem("token", accessToken)
    }

    const logout = () => {
        setUser(null)
        setToken(null)
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
                isAuthenticated: !!token
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}

export function useAuth() {
    return useContext(AuthContext)
}