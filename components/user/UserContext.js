import React, { useState, createContext } from 'react';
import { login, register } from '../user/UserService';

export const UserContext = createContext();
export const UserContextProvider = (props) => {
  const { children } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const onLogin = async (email, password) => {
    try {
      const res = await login(email, password);
      if (res.code == "1") {
        setUser(user);
        setIsLoggedIn(true);
        return true;
      } else {
        setIsLoggedIn(false);
        return false;
      }
    } catch (e) {
      console.log('onLogin error', e);
    }
    return false;
  }
  const onRegister = async (email, name, password) => {
    try {
      const res = await register(email, name, password);
      if (res.code == "1" ) {
        return true;
      }
    } catch (error) {
      
      console.log('onRegister error', error.response.data);
    }
    return false; 
  }

  return (
    <UserContext.Provider
      value={{ isLoggedIn, onLogin, onRegister, user }} 
    >
      {children}
    </UserContext.Provider>
  )
};
