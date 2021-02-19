import React, { createContext, useState } from 'react'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const login = ({ email, password }) => {
        const user = {
            email: email,
            password: password
        }
        console.log(user);
        setUser(user)

    }

    const logout = () => {
        setUser(null)
    }

    const loggedIn = () => {
        return user !== null
    }

    const authStates = { user, login, logout, loggedIn }

    return <AuthContext.Provider value={authStates} > {children} </AuthContext.Provider>
}

const useAuth = () => React.useContext(AuthContext)


export { AuthProvider, useAuth , AuthContext }