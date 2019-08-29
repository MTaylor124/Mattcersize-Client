import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import ExerciseForm from './ExerciseForm'

class CreateExercise extends Component {
  state = {
    exercise: {
      name: ''
    }
  }

  handleChange = event => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [event.target.name]: event.target.value
      }
    })
  }

  handleExerciseSubmit = event => {
    event.preventDefault()
    axios({
      method: 'POST',
      url: `${apiUrl}/exercises`,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        exercise: {
          name: this.state.exercise.name,
          sets: this.state.exercise.sets,
          reps: this.state.exercise.reps,
          weight: this.state.exercise.weight,
          workout: this.props.match.params.id,
          owner: this.props.user._id
        }
      }
    })
      .then(response => {
        this.props.alert({
          heading: 'Success!!!!',
          message: 'You created a exercise.',
          variant: 'success'
        })
        this.props.history.push(`/workouts/${this.props.match.params.id}/`)
      })
      .catch(() => {
        this.props.alert({
          heading: 'Failure!!!!',
          message: 'Could not create exercise, please add sets and reps.',
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <ExerciseForm
        exercise={this.state.exercise}
        handleChange={this.handleChange}
        handleExerciseSubmit={this.handleExerciseSubmit}
        correctRoute={this.props.match.params.id}
      />
    )
  }
}

export default withRouter(CreateExercise)
