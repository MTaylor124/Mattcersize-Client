import React, { Component } from 'react'
import apiUrl from './../../apiConfig'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

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
      <ListGroup.Item key={workout._id}
        className="workouts-list">
        <Link className="individualWorkout" to={`/workouts/${workout._id}`}>{workout.name}</Link>
      </ListGroup.Item>
    ))
    const workoutsJSXandCreate = (
      <React.Fragment>
        <Button className="make-workout2" href="#createworkout">Add Workout</Button>
        {workoutsJSX}
      </React.Fragment>
    )
    if (this.state.isLoading) {
      return (
        <div className="text-center">
          <p>not loaded</p>
        </div>
      )
    }

    // let noWorkouts
    if (this.state.workouts.length === 0) {
      return (
        <React.Fragment>
          <h3 className="noWorkoutsFound">No workouts found</h3>
          <Button className="make-workout" href="#createworkout">Make one Now!</Button>
        </React.Fragment>
      )
    }
    // {noWorkouts}
    return (
      <React.Fragment>
        <ListGroup>
          {this.state.workouts.length
            ? workoutsJSXandCreate
            : <h1 className="noWorkoutsFound">No workouts found, Create one now!</h1>
          }
        </ListGroup>
      </React.Fragment>
    )
    // {noWorkouts}
  }
}

export default withRouter(Workouts)
