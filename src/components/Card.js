import React from 'react'
import { withRouter } from 'react-router-dom'

const Card = ({ country, history }) => {
  return (
    <div
      className='card'
      onClick={() => history.push(`/${country.countryCode.toLowerCase()}`)}
    >
      <div
        className='country-flag'
        style={{ backgroundImage: `url(${country.flag})` }}
      />

      <div className='card-content'>
        <h3>{country.name}</h3>

        <div className='card-details'>
          <span>
            Population: <span className='data'>{country.population}</span>
          </span>
        </div>

        <div className='card-details'>
          <span>
            Region: <span className='data'>{country.region}</span>
          </span>
        </div>

        <div className='card-details'>
          <span>
            Capital: <span className='data'>{country.capital}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Card)
