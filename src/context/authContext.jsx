import { createContext, useContext } from "react";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error("There isn't a auth context")
    return context
}

export function AuthProvider({children}) {
    const user = {
        isLogined: true,
    }
    return (
        <authContext.Provider value={{ user }}>
            {children}
        </authContext.Provider>
    )
}