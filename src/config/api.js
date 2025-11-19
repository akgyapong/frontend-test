// API Configuration - handles different environments
const API_CONFIG = {
  // Base URL changes based on environment
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  
  // API endpoints
  endpoints: {
    auth: {
      register: '/api/v1/auth/register/',
      login: '/api/v1/auth/login/',
      refresh: '/api/v1/auth/refresh/',
      logout: '/api/v1/auth/logout/',
    },
    products: {
      list: '/api/v1/products/',
      featured: '/api/v1/products/featured/',
      search: '/api/v1/products/search/',
    },
    categories: {
      list: '/api/v1/categories/',
      roots: '/api/v1/categories/roots/',
    }
  },

  // Helper function to build full URLs
  getFullURL: (endpoint) => {
    return `${API_CONFIG.baseURL}${endpoint}`;
  },

  // Helper function for authenticated requests
  getAuthHeaders: () => {
    const token = localStorage.getItem('access_token');
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
};

// Named export for better compatibility
export { API_CONFIG };

// Default export  
export default API_CONFIG;