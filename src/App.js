import React, { Component } from 'react';
import './App.css';
import PlaylistsContainer from './components/PlaylistsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Playlists Board</h1>
        </div>
        <PlaylistsContainer />
      </div>
    );
  }
}

export default App;
