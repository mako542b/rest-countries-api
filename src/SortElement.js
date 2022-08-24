import { ThemeContext } from './Theme'
import {useContext} from 'react'

const SortElement = ({ setSort, sort }) => {

    const setSortClick = e => {
        let sortVal = e.target.value
        localStorage.setItem('sort', sortVal)
        setSort(sortVal)
    }

    const [{theme}] = useContext(ThemeContext)
    
    return(
        <>
            <select className="option-input | bkg-elements f-w-300 box-shadow" name="sort" id="sort" defaultValue={sort} onChange={setSortClick} style={{backgroundColor: theme.backgroundElements, color:theme.color}}>
                    <option value="name+">name, rising</option>
                    <option value="name-">name, sinking</option>
                    <option value="pop+">population, rising</option>
                    <option value="pop-">population, sinking</option>
                    <option value="neigh+">neighbours, rising</option>
                    <option value="neigh-">neighbours, sinking</option>
                </select>
        </>
    )
}

export default SortElement