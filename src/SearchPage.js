import CountryCard from './CountryCard'
import {useContext, useRef, useCallback, useState} from 'react'
import { ThemeContext } from './Theme'


const SearchPage = ({ data, setDetailsPage, setDetailedCountry }) => {

    const {theme} = useContext(ThemeContext)
    const [cardsQuantity, setCardsQuantity] = useState(10)
    const observer = useRef()

    const lastElement = useCallback(element => {
        observer?.current?.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries?.[0]?.isIntersecting) setCardsQuantity(prev => prev + 10)
        })
        if(element) observer?.current?.observe(element)
    },[])
    let scrollData = [...data].splice(0,cardsQuantity)

    return(
        <div className='cards-container' style={{backgroundColor: theme.backgroundBody, color: theme.color}}>
            {scrollData?.map((country, index) => (
                <CountryCard 
                    country={country} 
                    key={country.name.common} 
                    setDetailsPage={setDetailsPage} 
                    setDetailedCountry={setDetailedCountry}
                    ref={scrollData.length - 1 === index ? lastElement : null}
                />
            ))}
        </div>
    )
}

export default SearchPage