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
        console.log(response.data.exercise)
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
        exercise: this.state.exercise
      }
    })
      .then(response => {
        this.props.alert({
          heading: 'Success!!!!',
          message: 'You updated a exercise.',
          variant: 'success'
        })
        this.props.history.push(`/exercises/${this.state.exercise._id}`)
      })
      .catch(console.error)
  }

  render () {
    if (!this.state.exercise) {
      return (
        <h1>Loading... </h1>
      )
    }
    return (
      <ExerciseForm
        exercise={this.state.exercise}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default withRouter(UpdateExercise)
