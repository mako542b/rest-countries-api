import CountryCard from './CountryCard'
import {useContext} from 'react'
import { ThemeContext } from './Theme'


const SearchPage = ({ data, setDetailsPage, setDetailedCountry }) => {

    const [{theme}] = useContext(ThemeContext)

    return(
           <div className='cards-container' style={{backgroundColor: theme.backgroundBody, color: theme.color}}>
                {data.map(country => (
                    <CountryCard country={country} key={country.name.common} 
                    setDetailsPage={setDetailsPage} setDetailedCountry={setDetailedCountry}
                    />
                ))}
            </div>
    )
}

export default SearchPage