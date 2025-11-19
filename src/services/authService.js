import API_CONFIG from '../config/api.js';

// Authentication service - handles all auth-related API calls
export const authService = {
  
  // User registration
  register: async (userData) => {
    const url = API_CONFIG.getFullURL(API_CONFIG.endpoints.auth.register);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: API_CONFIG.getAuthHeaders(),
      body: JSON.stringify(userData),
    });
    
    return response.json();
  },

  // User login
  login: async (credentials) => {
    const url = API_CONFIG.getFullURL(API_CONFIG.endpoints.auth.login);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: API_CONFIG.getAuthHeaders(),
      body: JSON.stringify(credentials),
    });
    
    return response.json();
  },

  // Store tokens after successful auth
  storeTokens: (tokens, userData) => {
    localStorage.setItem('access_token', tokens.access);
    localStorage.setItem('refresh_token', tokens.refresh);
    localStorage.setItem('user', JSON.stringify(userData));
  },

  // Clear tokens on logout
  clearTokens: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('access_token');
  },

  // Get current user data
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
};