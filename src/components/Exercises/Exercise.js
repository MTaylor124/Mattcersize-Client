import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import Button from 'react-bootstrap/Button'

class Exercise extends Component {
  state = {
    exercise: null
  }

  async componentDidMount () {
    const response = await axios(`${apiUrl}/exercises/${this.props.match.params.id}`)

    this.setState({
      exercise: response.data.exercise
    })
  }
  handleExerciseDelete = () => {
    event.preventDefault()
    axios.delete(`${apiUrl}/exercises/${this.props.match.params.id}`,
      {
        headers: {
          'Authorization': `Bearer ${this.props.user.token}`
        },
        data: {
          exercise: this.state.exercise
        }
      })
      .then(() => this.props.history.push('/exercises'))
  }
  render () {
    const { exercise } = this.state
    const deletebutton = (
      <Fragment>
        <Button onClick={this.handleExerciseDelete}>Delete Exercise</Button>
      </Fragment>
    )
    return (
      <div>
        { exercise && (
          <Fragment>
            <h1>{exercise.name}</h1>
            {(this.props.user && exercise) && this.props.user._id === exercise.owner
              ? <Button href={`#exercises/${exercise.id}/edit`}>Edit Exercise</Button>
              : ''
            }
            {(this.props.user && exercise) && this.props.user._id === exercise.owner
              ? deletebutton
              : ''
            }
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(Exercise)
