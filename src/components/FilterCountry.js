import React from 'react'

const FilterCountry = ({ filterCountries, searchCountry, search }) => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  return (
    <div className='container filter-component'>
      <div className='flex space-between'>
        <div className='filter-bar'>
          <i className='fas fa-search'></i>
          <input
            type='text'
            className='search-country-input'
            value={search}
            onChange={searchCountry}
          />
        </div>

        <select className='filter-region-select' onChange={filterCountries}>
          <option value='DEFAULT'>Flter by Region</option>
          {regions.map(region => (
            <option value={region} key={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FilterCountry
