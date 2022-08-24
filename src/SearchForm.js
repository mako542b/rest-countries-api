import SortElement from './SortElement'
import { ThemeContext } from './Theme'
import {useContext} from 'react'


const SearchForm = ({
    region,
    setRegion,
    setCountrySearch,
    countrySearch,
    setSort,
    sort
}) => {

    

    const setRegionClick = (e) => {
        let val = e.target.value
        setRegion(val)
        return
    }

    const setCountryClick = (e) => {
        let val = e.target.value
        setCountrySearch(val)
    }

    const [{theme}] = useContext(ThemeContext)


    return(
        <div>

            <form className="region-form" onSubmit={(e)=>e.preventDefault()}>
                <input type="text" style={{backgroundColor: theme.backgroundElements, color:theme.color}} placeholder="search for a country..." className="region-input | bkg-elements box-shadow" onChange={setCountryClick} value={countrySearch}></input>
        <SortElement setSort={setSort} sort={sort}/>
                <select className="option-input | bkg-elements f-w-300 box-shadow" style={{backgroundColor: theme.backgroundElements, color:theme.color}} name="region" id="region" defaultValue={region} onChange={setRegionClick}>
                <option value="default" disabled hidden>
                filter by region    
                </option>
                    <option value="all">All</option>
                    <option value="africa">Africa</option>
                    <option value="europe">Europe</option>
                    <option value="americas">America</option>
                    <option value="oceania">Oceania</option>
                    <option value="asia">Asia</option>
                </select>
            </form>
        </div>
    )
}

export default SearchForm
