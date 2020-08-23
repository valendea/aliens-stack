import React from 'react';
import { CardContainer } from './components/card-container/card-container.component';
import { SearchBar } from './components/search-bar/search-bar.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      aliens: [],
      searchText: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ aliens: users}))
  }

  render() {
    const { aliens, searchText } = this.state;
    const filteredAliens = aliens.filter(alien => alien.name.toLowerCase().includes(searchText)) 

    return (
      <div className="App">
        <h1>Aliens Stack</h1>
        <SearchBar
          placeholder="Find any alien.."
          handleChange={e => {
            this.setState({ searchText: e.target.value })
          }}
        />
        <CardContainer aliens={filteredAliens} />
      </div>
    )
  }
}

export default App;
