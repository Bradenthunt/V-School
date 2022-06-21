import React, {useState} from 'react'

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {

    const [theme, setTheme] = useState('light')

    //drop down for changing theme
    function selectTheme(e) {
        setTheme(e.target.value)
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            selectTheme
        }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}