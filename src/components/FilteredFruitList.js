import React from 'react';


const FilteredFruitList = props =>{
  const listFilter = !props.filter ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter)
return(
  <ul className="fruit-list">{listFilter.map((item, index) => <li key={index}>{item.char}</li>)}</ul>
)
}


FilteredFruitList.defaultProps={
  fruit: [],
  filter: null,
}

export default FilteredFruitList;
