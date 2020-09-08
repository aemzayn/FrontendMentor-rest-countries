import React, { useState, useEffect, useContext } from 'react'
import { CountryContext } from '../context/CountryStateProvider'

const Country = props => {
  const [country, setCountry] = useState()
  const [countries] = useContext(CountryContext)
  const { country_id } = props.match.params
  const [borders, setBorders] = useState([])

  // get country
  useEffect(() => {
    const selectedCountry = countries.filter(
      c => c.countryCode === country_id.toUpperCase()
    )[0]
    setCountry(selectedCountry)

    if (country) {
      const filteredBorders = countries
        .filter(c => country.borders.includes(c.countryCode))
        .map(c => c.name)
      setBorders(filteredBorders)
    }
  }, [countries, country, country_id])

  if (country)
    return (
      <div className='container country-page full-height'>
        <div className='back-button' onClick={() => props.history.push('/')}>
          <i className='fas fa-arrow-left'></i>
          <button>Back</button>
        </div>
        <main>
          <div
            className='country-page-flag'
            style={{ backgroundImage: `url(${country.flag})` }}
          />
          <div className='country-details'>
            <h1>{country.name}</h1>

            <ul>
              <div className='details-left'>
                <li className='card-details'>
                  <span>
                    Native Name:{' '}
                    <span className='data'>{country.nativeName}</span>
                  </span>
                </li>

                <li className='card-details'>
                  <span>
                    Population:{' '}
                    <span className='data'>{country.population}</span>
                  </span>
                </li>

                <li className='card-details'>
                  <span>
                    Region: <span className='data'>{country.region}</span>
                  </span>
                </li>

                <li className='card-details'>
                  <span>
                    Sub Region:{' '}
                    <span className='data'>{country.subRegion}</span>
                  </span>
                </li>

                <li className='card-details'>
                  <span>
                    Capital: <span className='data'>{country.capital}</span>
                  </span>
                </li>
              </div>

              <div className='details-right'>
                <li className='card-details'>
                  <span>
                    Top Level Domain:{' '}
                    <span className='data'>{country.topLevelDomain}</span>
                  </span>
                </li>

                <li className='card-details'>
                  <span>
                    Currencies:{' '}
                    {country.currencies.map((c, i) => (
                      <span className='data' key={i}>
                        {' '}
                        {c.name}
                        {i !== country.currencies.length - 1 && ','}
                      </span>
                    ))}
                  </span>
                </li>

                <li className='card-details'>
                  <span>
                    Languages:{' '}
                    {country.languages.map((c, i) => (
                      <span className='data' key={i}>
                        {' '}
                        {c.name}
                        {i !== country.languages.length - 1 && ','}
                      </span>
                    ))}
                  </span>
                </li>
              </div>
            </ul>

            <div className='borders'>
              <div className='card-details'>
                <span>Border Countries:</span>
                {borders?.map((b, i) => (
                  <span className='border' key={i}>
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  else return <span>Loading...</span>
}

export default Country
