import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext(null);

const LoginContextProvider = (props) => {

  const [showLogin, setShowLogin] = useState(false);

  const contextValue = {
    showLogin,
    setShowLogin
  }

  return (
    <LoginContext.Provider value={contextValue}>
      {props.children}
    </LoginContext.Provider>
  )
}