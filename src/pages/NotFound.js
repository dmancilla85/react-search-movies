import React, { Component } from 'react'
import { ButtonBackToHome } from '../components/ButtonBackToHome'

export class NotFound extends Component {

  render() {
    return (
      <div>
        <span
          role="img"
          aria-label="wtf">
          No existe! 😑
      </span>
        <ButtonBackToHome />
      </div>
    )
  }
}
