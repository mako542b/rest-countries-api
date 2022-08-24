import addComas from './addComas'
import { ThemeContext } from './Theme'
import {useContext} from 'react'

const CountryCard = ({country, setDetailsPage, setDetailedCountry}) => {

    const setDetailsPageClick = () => {
        setDetailedCountry(country)
        setDetailsPage(true)
    }
    const [{theme}] = useContext(ThemeContext)


    return(
        <button className='btn-reset country-button' onClick={setDetailsPageClick}>
            <div className="country-card">
                <div className="image-container">
                <img className="flag-image" src={country.flags.svg} alt='flag'></img>
                </div>
                <div className="brief-info clr-white line-15 bkg-elements" style={{backgroundColor: theme.backgroundElements, color:theme.color}}>
                    <h3 className="header-country | f-w-800">{country.name.common}</h3>
                    <p className="f-s-14"><span className="f-w-600">Population: </span>{country.population && addComas(country.population)}</p>
                    <p className="f-s-14"><span className="f-w-600">Region: </span>{country.region}</p>
                    <p className="f-s-14"><span className="f-w-600">Capital: </span>{country.capital?.[0]}</p>
                </div>
            </div>
        </button>
    )
}

export default CountryCard