import React from 'react'

const Playlist = ({playlist}) =>
  <div className="tile" key={playlist.id}>
    <h4>{playlist.title}</h4>
    <p>{playlist.body}</p>
  </div>

export default Playlist
