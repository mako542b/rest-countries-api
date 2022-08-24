import { ThemeContext } from './Theme'
import {useContext} from 'react'

const Header = () => {

    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext)
    const mode = isDark ? 'Light mode' : 'Dark mode'


    return(
        <header className="header box-shadow" style={{backgroundColor: theme.backgroundElements, color:theme.color}}>
            <h2 className='f-w-800'>Where in the world?</h2>
            <button className="mode-button" onClick={toggleTheme}><div className='btn-container'><img className='svg' src={theme.moonImg} alt=''></img><span>{mode}</span></div></button>
        </header>
    )
}

export default Header 