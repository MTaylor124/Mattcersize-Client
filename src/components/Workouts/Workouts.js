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
    try {
      const response = await axios(`${apiUrl}/workouts`)
      this.setState({ workouts: response.data.workouts, isLoading: false })
    } catch (error) {
      console.error(error)
    }
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

    return (
      <ListGroup>
        {this.state.workouts.length
          ? workoutsJSX
          : <ListGroup.Item>No workouts found, create one now!</ListGroup.Item>
        }
      </ListGroup>
    )
  }
}

export default withRouter(Workouts)
