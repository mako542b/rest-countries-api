import {useState, useEffect, useContext, useMemo} from 'react'
import Header from './Header'
import SearchPage from './SearchPage'
import axios from 'axios'
import SearchForm from './SearchForm'
import Details from './Details'
import { ThemeContext } from './Theme'
import { processData } from './Utillity/functions'
import useLocalStorage from './hooks/useLocalStorage'


function App() {
  
    const {theme} = useContext(ThemeContext)
    const [countriesInfo, setCountriesInfo] = useState([])
    const [detailsPage, setDetailsPage] = useState(false)
    const [detailedCountry, setDetailedCountry] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const [searchOptions, setSearchOptions] = useLocalStorage('searchOptions')

    // const [searchOptions, setSearchOptions] = useState({
    //   sortCriterium: 'name',
    //   sortDirection: '+',
    //   filterCountry: '',
    //   filterRegion: 'all',
    // })



    useEffect(() => {
      axios.get('https://restcountries.com/v3.1/all').then(res => {
        setIsLoading(false)
        setCountriesInfo(res.data)
      })
    },[])

    const data = useMemo(() => {
      return processData(countriesInfo, searchOptions)
    }, [countriesInfo, searchOptions])


  return (
    <div className='main-container' style={{backgroundColor:theme.backgroundBody}}>
      <Header/>
      {detailsPage && countriesInfo ? (
          <Details detailedCountry={detailedCountry} 
                  countriesInfo={countriesInfo} 
                  setDetailedCountry={setDetailedCountry}
                  setDetailsPage={setDetailsPage}
          />
      ) : countriesInfo ? (
        <div className='search-page'>

        <SearchForm setSearchOptions={setSearchOptions} searchOptions={searchOptions}/>
       
        <SearchPage data={data} setDetailsPage={setDetailsPage} setDetailedCountry={setDetailedCountry} />
        </div>
      ) : null}
      {isLoading && (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default App;
