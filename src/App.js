import {useState, useEffect, useContext} from 'react'
import Header from './Header'
import SearchPage from './SearchPage'
import axios from 'axios'
import SearchForm from './SearchForm'
import Details from './Details'
import { ThemeContext } from './Theme'

// import SortElement from './SortElement'


function App() {

  const [region, setRegion] = useState('default')
  const [countriesInfo, setCountriesInfo] = useState(null)
  const [data,setData] = useState([])
  const [countrySearch, setCountrySearch] = useState('')
  const [detailsPage, setDetailsPage] = useState(false)
  const [detailedCountry, setDetailedCountry] = useState({})
  const [sort, setSort] = useState('name+')
  const [isLoading, setIsLoading] = useState(true)


  const [{theme}] = useContext(ThemeContext)

  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all').then(res => {
      setIsLoading(false)
      setCountriesInfo(res.data)
    })
  },[])


  useEffect(() => {
    if(!countriesInfo) return
    let way = sort === 'pop+' || sort === 'pop-' ? 'population' : sort === 'name+' || sort === 'name-' ? `name` : 'borders'
    let direction = sort === 'pop+' || sort === 'name+' || sort === 'neigh+' ? 'rise' : 'sink'

    let regex = new RegExp(countrySearch, 'i');
    let newData = [...countriesInfo]
    .filter(obj => obj.region.toLowerCase() === region || region === 'all' || region === 'default')
    .filter(obj => regex.test(obj.name.common) || countrySearch==='')
    
    //
// sorting part
    .sort((a,b) => {
      if(way === 'population') {
        return direction === 'rise'? a.population - b.population : b.population - a.population
      } else if(way === 'name'){
        if(direction === 'rise') {
          return a.name?.common > b.name?.common? 1 : -1
        } else {
          return a.name?.common > b.name?.common? -1 : 1
        }
      } else {
          if (direction === 'rise') {
            return b.borders?.length === undefined? 1 : a.borders?.length - b.borders?.length
          }
          else {
            return a.borders?.length === undefined? 1 : b.borders?.length - a.borders?.length
          }
      }
    })
    //
    setData(newData)
  },[countriesInfo,region,countrySearch,sort])


  return (
    <div className='main-container' style={{backgroundColor:theme.backgroundBody}}>
      <Header/>
      {detailsPage && countriesInfo &&<Details detailedCountry={detailedCountry} 
                  countriesInfo={countriesInfo} setDetailedCountry={setDetailedCountry}
                  setDetailsPage={setDetailsPage}/>}
      {!detailsPage && countriesInfo && (
        <div className='search-page'>
        <SearchForm region={region} setRegion={setRegion} countrySearch={countrySearch} setCountrySearch={setCountrySearch} setSort={setSort} sort={sort}/>
        <SearchPage data={data} setDetailsPage={setDetailsPage} setDetailedCountry={setDetailedCountry} setData={setData}/>
        </div>
      ) }
      {isLoading && (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
