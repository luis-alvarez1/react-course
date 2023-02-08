import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export const LOGIN_KEY = ' IS_LOGGED_IN';
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isAlreadyLoggedIn = localStorage.getItem(LOGIN_KEY);
    if (isAlreadyLoggedIn === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem(LOGIN_KEY);

    setIsLoggedIn(false);
  };
  const loginHandler = () => {
    localStorage.setItem(LOGIN_KEY, '1');
    setIsLoggedIn(true);
  };

  const defaulState = {
    isLoggedIn,
    onLogin: loginHandler,
    onLogout: logoutHandler,
  };

  return <AuthContext.Provider value={defaulState}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
