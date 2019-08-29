import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import ExerciseForm from './ExerciseForm'

class UpdateExercise extends Component {
  state = {
    exercise: null
  }

  componentDidMount () {
    axios(`${apiUrl}/exercises/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ exercise: response.data.exercise })
      })
      .catch(() => this.props.alert({
        heading: 'Error',
        message: 'Something went wrong',
        variant: 'danger'
      }))
  }

  handleChange = event => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      method: 'PATCH',
      url: `${apiUrl}/exercises/${this.state.exercise._id}`,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        exercise: {
          name: this.state.exercise.name,
          sets: this.state.exercise.sets,
          reps: this.state.exercise.reps,
          weight: this.state.exercise.weight,
          workout: this.state.exercise.workout._id
        }
      }
    })
      .then(response => {
        this.props.alert({
          heading: 'Success!!!!',
          message: 'You updated a exercise.',
          variant: 'success'
        })
        this.props.history.push(`/workouts/${this.state.exercise.workout._id}`)
      })
      .catch(() => {
        this.props.alert({
          heading: 'Failure!!!!',
          message: 'Could not update exercise, please add sets and reps.',
          variant: 'failure'
        })
      })
  }

  render () {
    if (!this.state.exercise) {
      return (
        <h1>Loading... </h1>
      )
    }
    const theRoute = this.state.exercise.workout._id
    return (
      <ExerciseForm
        exercise={this.state.exercise}
        handleChange={this.handleChange}
        handleExerciseSubmit={this.handleSubmit}
        correctRoute={theRoute}
      />
    )
  }
}
// correctRoute={this.props.match.params.id}

export default withRouter(UpdateExercise)
