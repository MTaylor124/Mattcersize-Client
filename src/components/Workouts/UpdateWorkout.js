import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import WorkoutForm from './WorkoutForm'

class UpdateWorkout extends Component {
  state = {
    workout: null
  }

  componentDidMount () {
    axios(`${apiUrl}/workouts/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ workout: response.data.workout })
        console.log(response.data.workout)
      })
      .catch(() => this.props.alert({
        heading: 'Error',
        message: 'Something went wrong',
        variant: 'danger'
      }))
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
      method: 'PATCH',
      url: `${apiUrl}/workouts/${this.state.workout._id}`,
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
          message: 'You updated a workout.',
          variant: 'success'
        })
        this.props.history.push(`/workouts/${this.state.workout._id}`)
      })
      .catch(console.error)
  }

  render () {
    if (!this.state.workout) {
      return (
        <h1>Loading... </h1>
      )
    }
    return (
      <WorkoutForm
        workout={this.state.workout}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default withRouter(UpdateWorkout)
