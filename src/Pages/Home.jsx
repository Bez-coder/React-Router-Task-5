import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../main";

function ThemedComponent(){
    const{ theme, setTheme}= useContext(ThemeContext);
    return(
        <div>
            <h1>Welcome!</h1>
            <h2>This is the Home page</h2>
            <p>Current Theme: {theme}</p>
            <button onClick={()=> setTheme(theme === 'light'? 'dark': 'light')}>
                Toggle Theme
            </button>
        </div>
    );
}
const Home = () => {
    return(  <div>
        <ThemedComponent/>
    </div>
)     
};
export default Home;