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
        <p className="see-workouts">Log in to access your workouts.</p>
      </React.Fragment>
    )
  }
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
    </React.Fragment>
  )
}

export default Home
