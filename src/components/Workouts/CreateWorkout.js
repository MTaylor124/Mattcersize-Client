import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import WorkoutForm from './WorkoutForm'

class CreateWorkout extends Component {
  state = {
    workout: {
      name: ''
    }
  }

  handleChange = event => {
    this.setState({
      workout: {
        ...this.state.workout,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      method: 'POST',
      url: `${apiUrl}/workouts`,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        workout: this.state.workout
      }
    })
      .then(response => {
        this.props.alert({
          heading: 'Success!!!!',
          message: 'You created a workout.',
          variant: 'success'
        })
        this.props.history.push(`/workouts/${response.data.workout._id}`)
      })
      .catch(() => {
        alert({
          heading: 'Failure',
          message: 'Failed to create workout',
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <WorkoutForm
        workout={this.state.workout}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default withRouter(CreateWorkout)
