import React, { Component } from 'react'

import './FilterCount.css'

import { formatNumber } from '../Services/formatter'

class FilterCount extends Component {
  render () {
    const numerator = this.props.filterCount || 0

    return (
      <div className='FilterCount'>
        <h1>Employees</h1>
        <div>
          <span className='numerator'>{formatNumber(numerator)}</span>
          {/* <span className='separator'>|</span> */}
          {/* <span className='denominator'>{formatNumber(denominator)}</span> */}
        </div>
      </div>
    )
  }
}

export default FilterCount
