import React, { Component } from 'react'
import Playlist from './Playlist'
import axios from 'axios'

class PlaylistsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: []
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


  render() {
    return (
      <div>
        {this.state.playlists.map((playlist) => {
          return(<Playlist playlist={playlist} key={playlist.id} />)
        })}
      </div>
    )
  }
}

export default PlaylistsContainer
