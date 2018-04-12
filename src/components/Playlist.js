import React, { Component } from 'react'

class Playlist extends Component {

  handleClick = () => {
    this.props.onClick(this.props.playlist.id)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.playlist.id)
  }

  render () {
    return(
      <div className="tile">
          <span className="deleteButton" onClick={this.handleDelete}>x</span>
        <h4 onClick={this.handleClick}>
          {this.props.playlist.title}
        </h4>
        <p onClick={this.handleClick}>
          {this.props.playlist.body}
        </p>
      </div>
    )
  }
}

export default Playlist
