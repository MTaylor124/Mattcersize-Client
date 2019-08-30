import React, { Component } from 'react'
import apiUrl from './../../apiConfig'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

// import Spinner from 'react-bootstrap/Spinner'

class Workouts extends Component {
  constructor () {
    super()

    this.state = {
      workouts: [],
      isLoading: true
    }
  }
  async componentDidMount () {
    const response = await axios(`${apiUrl}/workouts`)
    this.setState({ workouts: response.data.workouts, isLoading: false })
  }
  render () {
    const workoutsJSX = this.state.workouts.reverse().filter(workout => workout.owner === this.props.user._id).map(workout => (
      <ListGroup.Item key={workout._id}>
        <Link to={`/workouts/${workout._id}`}>{workout.name}</Link>
      </ListGroup.Item>
    ))
    if (this.state.isLoading) {
      return (
        <div className="text-center">
          <p>not loaded</p>
        </div>
      )
    }

    let noWorkouts
    if (this.state.workouts.length === 0) {
      noWorkouts = (
        <h1 className="noWorkoutsFound">No workouts found. Create one now!!</h1>
      )
    }
    // {noWorkouts}
    return (
      <React.Fragment>
        <ListGroup>
          {this.state.workouts.length
            ? workoutsJSX
            : <h1 className="noWorkoutsFound">No workouts found, Create one now!</h1>
          }
        </ListGroup>
        {noWorkouts}
      </React.Fragment>
    )
  }
}

export default withRouter(Workouts)
