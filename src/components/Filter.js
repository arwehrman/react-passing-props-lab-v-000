import React from 'react';

const Filter = props =>
  <select onChange={props.handleChange}>
    <option value='all'>All</option>
    {props.filters.map(filter =>
      <option key={filter} value={filter}>{filter}</option>
    )}
  </select>

Filter.defaultProps={
  filters: [],
  handleChange: null,
}

export default Filter;
