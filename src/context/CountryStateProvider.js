import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios'

export const CountryContext = createContext()

const CountryStateProvider = ({ children }) => {
  const [countries, setCountries] = useState([])

  const fetchApi = async () => {
    const url = 'https://restcountries.eu/rest/v2/all'
    try {
      const { data } = await Axios.get(url)
      const countryObject = await data.map(data => {
        return {
          name: data.name,
          flag: data.flag,
          capital: data.capital,
          population: data.population,
          region: data.region,
          borders: data.borders,
          languages: data.languages,
          nativeName: data.nativeName,
          currencies: data.currencies,
          subRegion: data.subRegion,
          topLevelDomain: data.topLevelDomain,
          countryCode: data.alpha3Code,
        }
      })
      setCountries(countryObject)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <CountryContext.Provider value={[countries, setCountries]}>
      {children}
    </CountryContext.Provider>
  )
}

export default CountryStateProvider
