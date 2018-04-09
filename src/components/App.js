import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
    }
  }
  updateFilter = event => {
		this.setState({ currentFilter: event.target.value });
	}

	componentDidMount() {
		this.fetchFilters(),
		this.fetchFruit()
	}

	fetchFilters = () => {
		fetch('/api/fruit_types')
			.then(response => response.json())
			.then(filters => this.setState({ filters }));
	}

	fetchFruit = () => {
		fetch('/api/fruit')
			.then(response => response.json())
			.then(items => this.setState({ items }));
	}

	render() {
		return (
			<select onChange={this.props.handleChange} defaultValue='all'>
				<option value='all'>All</option>
				{this.state.filters.map(filter =>
					<option key={filter} value={filter}>{filter}</option>
				)}
			</select>
		);
	};
};

export default App;
