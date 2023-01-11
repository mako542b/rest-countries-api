import {useState, useEffect, useContext} from 'react'
import Header from './Header'
import SearchPage from './SearchPage'
import axios from 'axios'
import SearchForm from './SearchForm'
import Details from './Details'
import { ThemeContext } from './Theme'
import { sortAndFilter } from './Utillity/functions'


function App() {

    const [countriesInfo, setCountriesInfo] = useState([])
    const [detailsPage, setDetailsPage] = useState(false)
    const [detailedCountry, setDetailedCountry] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [searchOptions, setSearchOptions] = useState({
      sortCriterium: 'name',
      sortDirection: '-',
      filterCountry: '',
      filterRegion: 'all',
    })


    const [{theme}] = useContext(ThemeContext)

    useEffect(()=>{
      axios.get('https://restcountries.com/v3.1/all').then(res => {
        setIsLoading(false)
        setCountriesInfo(res.data)
      })
    },[])

    const data = sortAndFilter(countriesInfo, searchOptions)
    // const data = countriesInfo


  return (
    <div className='main-container' style={{backgroundColor:theme.backgroundBody}}>
      <Header/>
      {detailsPage && countriesInfo && (
          <Details detailedCountry={detailedCountry} 
                  countriesInfo={countriesInfo} 
                  setDetailedCountry={setDetailedCountry}
                  setDetailsPage={setDetailsPage}
          />
      )}
      {!detailsPage && countriesInfo && (
        <div className='search-page'>

        <SearchForm setSearchOptions={setSearchOptions} searchOptions={searchOptions}/>
       
        <SearchPage data={data} setDetailsPage={setDetailsPage} setDetailedCountry={setDetailedCountry} />
        </div>
      ) }
      {isLoading && (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
