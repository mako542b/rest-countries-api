import addComas from './addComas'
import CheckNeighbour from './CheckNeighbour'
import { ThemeContext } from './Theme'
import {useContext} from 'react'

const Details = ({ detailedCountry, countriesInfo, setDetailedCountry, setDetailsPage  }) => {

    const setDetailsPageClick = () => {
        setDetailsPage(false)
    }
    const [{theme}] = useContext(ThemeContext)


    const findNeighbour = (neighbour) => {
       return countriesInfo.find(country => country.cca3 === neighbour)
    }


    return (
        <div className="details">
            <button className="button-back btn-theme btn-reset btn-padding box-shadow" onClick={setDetailsPageClick} style={{backgroundColor: theme.backgroundElements, color:theme.color}}>Back</button>
            <div className="main-details">
                <section className="details-image">
                    <img className="flag-big box-shadow" src={detailedCountry.flags?.svg} alt='flag'></img>
                </section>
                <section className="details-text clr-white line-15" style={{ color:theme.color}}>
                    <h2>{detailedCountry.name?.common}</h2>
                    <div className="columns">
                        <div className="col-1">
                            <p className="f-s-16"><span className="f-w-600">Native name: </span>{detailedCountry?.name?.nativeName && Object.values(detailedCountry.name.nativeName).map(name=>`${name.official}; `)}</p>
                            <p className="f-s-16"><span className="f-w-600">Population: </span>{detailedCountry.population && addComas(detailedCountry.population)}</p>
                            <p className="f-s-16"><span className="f-w-600">Region: </span>{detailedCountry.region}</p>
                            <p className="f-s-16"><span className="f-w-600">sub-Region: </span>{detailedCountry.subregion}</p>
                            <p className="f-s-16"><span className="f-w-600">Capital: </span>{detailedCountry.capital?.[0]}</p>
                        </div>
                        <div className="col-2">
                            <p className="f-s-16"><span className="f-w-600">Top level domain: </span>.bre</p>
                            <p className="f-s-16"><span className="f-w-600">currencies: </span>{detailedCountry.currencies && Object.values(detailedCountry.currencies).map(val => `${val.name} `)}</p>
                            <p className="f-s-16"><span className="f-w-600">languages: </span>{detailedCountry.languages && Object.values(detailedCountry.languages).map(language => `${language} `)}</p>
                        </div>
                    </div>
                    <div className="border-countries">
                        <p>Border countries</p>
                        <div className="border-buttons">
                            {detailedCountry?.borders?.map(neighbour => (
                                <CheckNeighbour neighbour={findNeighbour(neighbour)} key={neighbour} setDetailedCountry={setDetailedCountry} theme={theme}/>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Details