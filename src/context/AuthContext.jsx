import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [mockUsers, setMockUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUsers = localStorage.getItem('mockUsers');
    if (storedUsers) {
      setMockUsers(JSON.parse(storedUsers));
    } else {
      const initialUsers = [{
        id: 1,
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@example.com',
        password: 'password123',
        createdAt: new Date().toISOString()
      }];
      setMockUsers(initialUsers);
      localStorage.setItem('mockUsers', JSON.stringify(initialUsers));
    }

    const storedUser = localStorage.getItem('mockAuth');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signup = async (userData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (mockUsers.some(u => u.email === userData.email)) {
          reject({ message: 'Email already exists' });
          return;
        }

        const newUser = {
          id: Date.now(),
          ...userData,
          createdAt: new Date().toISOString()
        };
        
        const updatedUsers = [...mockUsers, newUser];
        setMockUsers(updatedUsers);
        localStorage.setItem('mockUsers', JSON.stringify(updatedUsers));
        
        setUser(newUser);
        localStorage.setItem('mockAuth', JSON.stringify(newUser));
        resolve(newUser);
      }, 800);
    });
  };

  const login = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundUser = mockUsers.find(
          u => u.email === email && u.password === password
        );

        if (foundUser) {
          setUser(foundUser);
          localStorage.setItem('mockAuth', JSON.stringify(foundUser));
          resolve(foundUser);
        } else {
          reject({ message: 'Invalid email or password' });
        }
      }, 800);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mockAuth');
    navigate('/');
  };

  const value = {
    user,
    loading,
    signup,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}