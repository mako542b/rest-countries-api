import { ThemeContext } from './Theme'
import {useContext} from 'react'

const SortElement = ({ searchOptions, setSearchOptions }) => {

    const setSortClick = e => {
        // localStorage.setItem('sort', sortVal)
        setSearchOptions(prev => {
            return {
                ...prev, 
                sortCriterium: e.target.value.criterium, 
                sortDirection: e.target.value.direction 
            }
        })
        
    }

    const [{theme}] = useContext(ThemeContext)
    
    return(
        <>
            <select className="option-input | bkg-elements f-w-300 box-shadow" name="sort" id="sort" defaultValue={{sortCriterium:searchOptions.sortCriterium, sortDirection:searchOptions.sortDirection}} onChange={setSortClick} style={{backgroundColor: theme.backgroundElements, color:theme.color}}>
                    <option value={{criterium: 'name', direction: '+'}}>name, rising</option>
                    <option value={{criterium: 'name', direction: '-'}}>name, sinking</option>
                    <option value={{criterium: 'population', direction: '+'}}>population, rising</option>
                    <option value={{criterium: 'population', direction: '-'}}>population, sinking</option>
                    <option value={{criterium: 'neighbours', direction: '+'}}>neighbours, rising</option>
                    <option value={{criterium: 'neighbours', direction: '-'}}>neighbours, sinking</option>
                </select>
        </>
    )
}

export default SortElement