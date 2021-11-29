// Add BandInput component
import React, { Component } from 'react'


export default class BandInput extends Component {
  state = {
    name: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  onChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <input 
          type='text'
          onChange={e => this.onChange(e)}
          placeholder='add a band'
          value={this.state.name}
          />
          <input type='submit'/>
        </form>
      </div>
    )
  }
}


