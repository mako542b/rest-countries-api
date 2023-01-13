import { ThemeContext } from './Theme'
import {useContext} from 'react'

const SortElement = ({ searchOptions, setSearchOptions }) => {
    
    const {theme} = useContext(ThemeContext)

    return(
        <select 
            className="option-input | bkg-elements f-w-300 box-shadow" 
            name="sort" 
            id="sort" 
            value={searchOptions.sortCriterium + '_' + searchOptions.sortDirection} 
            onChange={setSortClick} 
            style={{backgroundColor: theme.backgroundElements, color:theme.color}}
        >
            <option value='name_+'>name, rising</option>
            <option value='name_-'>name, sinking</option>
            <option value='population_+'>population, rising</option>
            <option value='population_-'>population, sinking</option>
            <option value='neighbours_+'>neighbours, rising</option>
            <option value='neighbours_-'>neighbours, sinking</option>
        </select>
    )


    function setSortClick (e) {
        console.log(e.target.value)
        const optionValues = e.target.value.split('_')
        setSearchOptions(prev => {
            return {
                ...prev, 
                sortCriterium: optionValues[0], 
                sortDirection: optionValues[1] 
            }
        })
    }
    
}

export default SortElement