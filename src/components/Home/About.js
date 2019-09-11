import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class About extends Component {
  render () {
    return (
      <React.Fragment>
        <div className="about-all">
          <Button
            href='/#/'
            className="about-back"
          >Back</Button><br/>
          <div className="about-page">
            <div className="about-headers">
              <h2 className="about-header1">About</h2>
              <h1 className="about-header2">Mattcersize</h1>
            </div>
            <br/>
            <h3 className="about-body mycentered">body</h3>
            <h4 className="about-contact mycentered">contact</h4>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default About
