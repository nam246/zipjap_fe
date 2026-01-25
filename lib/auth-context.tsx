'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { apiClient } from './api-client';

interface User {
	id: string;
	email: string;
	username: string;
	name: string;
}

interface AuthContextType {
	user: User | null;
	token: string | null;
	isLoading: boolean;
	login: (username: string, password: string) => Promise<void>;
	register: (
		email: string,
		username: string,
		password: string,
		name: string
	) => Promise<void>;
	logout: () => void;
	isAuthenticated: boolean;
	getToken: () => string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [token, setToken] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	// Initialize from localStorage on mount and verify token
	useEffect(() => {
		const initializeAuth = async () => {
			const storedToken = localStorage.getItem('access_token');
			const storedUser = localStorage.getItem('user');

			if (storedToken && storedUser) {
				try {
					// Verify token by fetching profile
					const userData = await apiClient.get<User>('/auth/profile');
					setToken(storedToken);
					setUser(userData);
					// Set token in cookies for middleware
					document.cookie = `access_token=${storedToken}; path=/; max-age=86400`;
				} catch (error) {
					// Token is invalid, clear storage
					localStorage.removeItem('access_token');
					localStorage.removeItem('user');
					document.cookie = 'access_token=; path=/; max-age=0';
				}
			}

			setIsLoading(false);
		};

		initializeAuth();
	}, []);

	const login = async (username: string, password: string) => {
		setIsLoading(true);
		try {
			const data = await apiClient.post<{
				access_token: string;
				user: User;
			}>('/auth/login', { username, password });

			setToken(data.access_token);
			setUser(data.user);

			localStorage.setItem('access_token', data.access_token);
			localStorage.setItem('user', JSON.stringify(data.user));

			// Set token in cookies for middleware
			document.cookie = `access_token=${data.access_token}; path=/; max-age=86400`;
		} finally {
			setIsLoading(false);
		}
	};

	const register = async (
		email: string,
		username: string,
		password: string,
		name: string
	) => {
		setIsLoading(true);
		try {
			const data = await apiClient.post<{
				access_token: string;
				user: User;
			}>('/auth/register', { email, username, password, name });

			setToken(data.access_token);
			setUser(data.user);

			localStorage.setItem('access_token', data.access_token);
			localStorage.setItem('user', JSON.stringify(data.user));

			// Set token in cookies for middleware
			document.cookie = `access_token=${data.access_token}; path=/; max-age=86400`;
		} finally {
			setIsLoading(false);
		}
	};

	const logout = () => {
		setUser(null);
		setToken(null);
		localStorage.removeItem('access_token');
		localStorage.removeItem('user');
		// Clear cookie
		document.cookie = 'access_token=; path=/; max-age=0';
	};

	const getToken = () => token;

	const value: AuthContextType = {
		user,
		token,
		isLoading,
		login,
		register,
		logout,
		isAuthenticated: !!token,
		getToken,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
}
