import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import WorkoutExercise from './WorkoutExercise'
// import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

class Workout extends Component {
  state = {
    workout: ''
  }

  async componentDidMount () {
    try {
      const response = await axios(`${apiUrl}/workouts/${this.props.match.params.id}`)

      this.setState({
        workout: response.data.workout
      })
    } catch (error) {
      console.error(error)
    }
  }
  handleDelete = () => {
    event.preventDefault()
    axios.delete(`${apiUrl}/workouts/${this.props.match.params.id}`,
      {
        headers: {
          'Authorization': `Bearer ${this.props.user.token}`
        },
        data: {
          workout: this.state.workout
        }
      })
      .then(() => this.props.history.push('/workouts'))
  }
  render () {
    const { workout } = this.state
    const deletebutton = (
      <Fragment>
        <Button onClick={this.handleDelete}>Delete Workout</Button>
      </Fragment>
    )
    return (
      <div>
        { workout && (
          <Fragment>
            <h1>{workout.name}</h1>
            {(this.props.user && workout) && this.props.user._id === workout.owner
              ? <Button href={`#workouts/${workout._id}/edit`}>Edit Workout</Button>
              : ''
            }
            {(this.props.user && workout) && this.props.user._id === workout.owner
              ? deletebutton
              : ''
            }
            {this.state.workout.exercises.map(exId => (
              <WorkoutExercise key={exId} id={exId}/>
            ))}
            <br/>
            <Button href={`#workouts/${workout._id}/addexercise`}>add exercise</Button>
            <br/>
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(Workout)
