import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App";
import { useState,createContext } from 'react'

export const ThemeContext = createContext();
export function ThemeProvider({children}){
  const [theme, setTheme]= useState('light');

return(
  <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
  </ThemeContext.Provider>
);
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <ThemeProvider>
     <App />
  </ThemeProvider> 
  
  </StrictMode>,
)
