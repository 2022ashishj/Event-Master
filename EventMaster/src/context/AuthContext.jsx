// frontend/src/context/AuthContext.js
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const login = async (credentials) => {
        try {
            const { data } = await api.post('/auth/login', credentials);
            setUser(data.user);
            setError(null);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred during login');
        }
    };

    const register = async (credentials) => {
        try {
            const { data } = await api.post('/auth/register', credentials);
            setUser(data.user);
            setError(null);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred during registration');
        }
    };

    const logout = () => {
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, error }}>
            {children}
        </AuthContext.Provider>
    );
};