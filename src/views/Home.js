import React, { useContext, useState, useEffect } from 'react'
// Components
import { Card, FilterCountry } from '../components'
import { CountryContext } from '../context/CountryStateProvider'

// Context

const Home = () => {
  const [showingCountries, setShowingCountries] = useState([])
  const [search, setSearch] = useState('')
  const [countries] = useContext(CountryContext)

  useEffect(() => {
    setShowingCountries(countries)
  }, [countries])

  const filterCountries = e => {
    let value = e.target.value

    if (value !== 'DEFAULT') {
      const filteredCountry = countries.filter(c => c.region === value)
      setShowingCountries(filteredCountry)
    } else if (value === 'DEFAULT') {
      setShowingCountries(countries)
    }
  }

  const searchCountry = e => {
    let value = e.target.value
    setSearch(value)
    if (!value) {
      setShowingCountries(countries)
    } else {
      const filteredCountry = countries.filter(c => {
        return (
          c.name.toLowerCase().indexOf(value) !== -1 ||
          c.capital.toLowerCase().indexOf(value) !== -1
        )
      })
      setShowingCountries(filteredCountry)
    }
  }

  return (
    <div className='container full-height'>
      <FilterCountry
        filterCountries={filterCountries}
        search={search}
        searchCountry={searchCountry}
      />
      <div className='grid'>
        {showingCountries &&
          showingCountries.map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </div>
    </div>
  )
}

export default Home
