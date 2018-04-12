import React, { Component } from 'react'
import axios from 'axios'

class PlaylistForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.playlist.title,
      body: this.props.playlist.body
    }
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="tile">
        <form>
          <input className='input' type="text"
            name="title" placeholder='Enter a Title'
            value={this.state.title} onChange={this.handleInput} />
          <textarea className='input' name="body"
            placeholder='Describe your playlist'
            value={this.state.body} onChange={this.handleInput} >
          </textarea>
        </form>
      </div>
    );
  }
}

export default PlaylistForm
