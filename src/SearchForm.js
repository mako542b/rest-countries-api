import SortElement from './SortElement'
import { ThemeContext } from './Theme'
import {useContext, useState} from 'react'


const SearchForm = ({
    searchOptions,
    setSearchOptions
}) => {

    const {theme} = useContext(ThemeContext)
    const [display, setDisplay] = useState(true)

    return (
        <>
            {display ? (<div 
                className='search-form' 
                style={{backgroundColor:theme.backgroundBody}}
            >
                <form className="region-form" onSubmit={(e)=>e.preventDefault()}>
                    <input 
                        type="text" 
                        style={{backgroundColor: theme.backgroundElements, color:theme.color}} 
                        placeholder="search for a country..." 
                        className="region-input | bkg-elements box-shadow" 
                        onChange={(e) => setSearchOptions(prev => ({...prev, filterCountry: e.target.value}))} 
                        value={searchOptions.filterCountry}
                    >
                    </input>
                    <SortElement setSearchOptions={setSearchOptions} searchOptions={searchOptions}/>
                    <select 
                        className="option-input | bkg-elements f-w-300 box-shadow" 
                        style={{backgroundColor: theme.backgroundElements, color:theme.color}} 
                        name="region" 
                        id="region"
                        value={searchOptions.filterRegion}
                        onChange={(e) => setSearchOptions(prev =>  ({...prev, filterRegion: e.target.value}))}
                    >
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
                    <button className='close-options-button' type='button' onClick={() => setDisplay(false)}>X</button>
                </form>
            </div> ) : (
                <button className='display-button' onClick={() => setDisplay(true)}>Search options</button>
            )}
        </>
    )
}

export default SearchForm
