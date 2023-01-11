import SortElement from './SortElement'
import { ThemeContext } from './Theme'
import {useContext} from 'react'


const SearchForm = ({
    searchOptions,
    setSearchOptions
}) => {

    const setRegionClick = (e) => {

        // localStorage.setItem('region', val)
        setSearchOptions(prev => {
            return {...prev, filterRegion: e.target.value}
        })
    }

    const setCountryClick = (e) => {
        // localStorage.setItem('country', val)

        setSearchOptions(prev => {
            return {...prev, filterCountry: e.target.value}
        })
    }

    const [{theme}] = useContext(ThemeContext)


    return(
        <div>

            <form className="region-form" onSubmit={(e)=>e.preventDefault()}>
                <input type="text" style={{backgroundColor: theme.backgroundElements, color:theme.color}} placeholder="search for a country..." className="region-input | bkg-elements box-shadow" onChange={setCountryClick} value={searchOptions.filterCountry}></input>
                <SortElement setSearchOptions={setSearchOptions} searchOptions={searchOptions}/>
                <select className="option-input | bkg-elements f-w-300 box-shadow" style={{backgroundColor: theme.backgroundElements, color:theme.color}} name="region" id="region" defaultValue={searchOptions.filterRegion} onChange={setRegionClick}>
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
