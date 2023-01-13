import { useState, useEffect } from "react";

function useLocalStorage(key) {
    const [searchOptions, setSearchOptions] = useState(prev => {
        let oldOptions = localStorage.getItem(key)
        console.log(oldOptions)
        if(oldOptions) return JSON.parse(oldOptions)
        else return {
            sortCriterium: 'name',
            sortDirection: '+',
            filterCountry: '',
            filterRegion: 'all',
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(searchOptions))
        // console.log(searchOptions)
    },[key, searchOptions])

    return [searchOptions, setSearchOptions]
    }

    export default useLocalStorage