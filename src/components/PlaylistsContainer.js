import React, { Component } from 'react'
import axios from 'axios'
import Playlist from './Playlist'
import update from 'immutability-helper'

class PlaylistsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: [],
      editingPlaylistId: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/playlists.json')
    .then(response => {
      console.log(response)
      this.setState({playlists: response.data})
    })
    .catch(error => console.log(error))
  }

  addNewPlaylist = () => {
    axios.post(
      'http://localhost:3001/api/v1/playlists',
      { playlist:
        {
          title: '',
          body: ''
        }
      }
    )
    .then(response => {
      console.log(response)
      const playlists = update(this.state.playlists, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({
        playlists: playlists,
        editingPlaylistId: response.data.id
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <div>
          <button className="newPlaylistButton"  onClick={this.addNewPlaylist} >
            New Playlist
          </button>
        </div>
        {this.state.playlists.map((playlist) => {
          return (<Playlist playlist={playlist} key={playlist.id} />)
        })}
      </div>
    );
  }
}

export default PlaylistsContainer
