import React from 'react'

import Button from 'react-bootstrap/Button'

const Home = props => {
  const { user } = props
  let seeWorkouts
  if (user) {
    seeWorkouts = (
      <React.Fragment>
        <Button className="showworkoutsbutton" variant="outline-info" size="lg" href='#workouts/'>My Workouts</Button>
      </React.Fragment>
    )
  } else {
    seeWorkouts = (
      <React.Fragment>
        <div className="fancy-sign-in">
          <Button href="#sign-in" className="see-workouts log-in-home">Log in </Button>
          <span className="see-workouts">to access your workouts.</span>
        </div>
      </React.Fragment>
    )
  }
  const about = (
    <React.Fragment>
      <Button className="show-about" variant="outline-info" size="lg" href='#about/'>About</Button>
    </React.Fragment>
  )
  return (
    <React.Fragment>
      <br/>
      <br/>
      <br/>
      <h3 className="homepage-intro">Welcome to</h3>
      <h1 className="homepage-main">MATTCERSIZE</h1>
      <h3 className="homepage-intro-sub">Your simple workout tracking app</h3>
      <br/>
      <br/>
      {seeWorkouts}
      {about}
    </React.Fragment>
  )
}

export default Home
