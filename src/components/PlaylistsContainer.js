import React, { Component } from 'react'
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
          return(
            <div className="tile" key={playlist.id} >
              <h4>{playlist.title}</h4>
              <p>{playlist.body}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default PlaylistsContainer
