import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext(null);

const LoginContextProvider = (props) => {

  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, [])

  const contextValue = {
    showLogin,
    setShowLogin,
    setToken,
    token,
  }

  return (
    <LoginContext.Provider value={contextValue}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider;