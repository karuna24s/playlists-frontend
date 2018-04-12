import React, { Component } from 'react'
import axios from 'axios'
import Playlist from './Playlist'
import PlaylistForm from './PlaylistForm'
import update from 'immutability-helper'
import Notification from './Notification'

class PlaylistsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: [],
      editingPlaylistId: null,
      notification: '',
      transitionIn: true
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

  updatePlaylist = (playlist) => {
    const playlistIndex = this.state.playlists.findIndex(x => x.id === playlist.id)
    const playlists = update(this.state.playlists, {
      [playlistIndex]: { $set: playlist }
    })
    this.setState({
      playlists: playlists,
      notification: 'All changes saved',
      transitionIn: true
    })
  }

  resetNotification = () => {
    this.setState({notification: '', transitionIn: false})
  }

  render() {
    return (
      <div>
        <div>
          <button className="newPlaylistButton"  onClick={this.addNewPlaylist} >
            New Playlist
          </button>
          <Notification in={this.state.transitionIn} notification= {this.state.notification} />
        </div>
        {this.state.playlists.map((playlist) => {
          if(this.state.editingPlaylistId === playlist.id) {
            return(
              <PlaylistForm playlist={playlist} key={playlist.id}
               updatePlaylist={this.updatePlaylist}
               resetNotification={this.resetNotification} />)
          } else {
            return (<Playlist playlist={playlist} key={playlist.id} />)
          }
        })}
      </div>
    );
  }
}

export default PlaylistsContainer
