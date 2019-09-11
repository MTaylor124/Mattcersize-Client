import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class About extends Component {
  render () {
    return (
      <React.Fragment>
        <div className="about-all">
          <Button
            href='#/'
            className="about-back"
          >Back</Button><br/>
          <div className="about-page">
            <div className="about-headers">
              <h2 className="about-header1">About</h2>
              <h1 className="about-header2">Mattcersize</h1>
            </div>
            <br/>
            <h3 className="about-body mycentered">Mattcersize is a free to use workout tracker that allows you to stay on top of your exercise routine. New features coming soon!</h3>
            <h4 className="about-contact mycentered">Send suggestions and feedback to mattcersize(at)gmail.com</h4>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default About
