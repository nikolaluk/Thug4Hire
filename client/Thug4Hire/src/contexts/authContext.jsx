import { createContext, useState } from "react";

import { login, register } from '../services/userService';
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({
        _id: localStorage.getItem('_id'),
        username: localStorage.getItem('username'),
        accessToken: localStorage.getItem('accessToken'),
    });

    const loginSubmitHandler = async (values) => {
        const result = await login(values.username, values.password);
        setAuth(result);
        localStorage.setItem('_id', result._id);
        localStorage.setItem('username', result.username);
        localStorage.setItem('accessToken', result.accessToken);
        if(!result.error) {
            navigate('/')
        }

        return result;
    }

    const registerSubmitHandler = async (values) => {
            const result = await register(values.username, values.password, values.repeatPassword);
            setAuth(result);
            localStorage.setItem('_id', result._id);
            localStorage.setItem('username', result.username);
            localStorage.setItem('accessToken', result.accessToken);
            console.log(result);
            if(!result.error) {
                navigate('/');
            }

            return result;
    }

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('_id');
        localStorage.removeItem('username');
        localStorage.removeItem('accessToken');
        navigate('/');
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        userId: auth._id,
        username: auth.username,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;