import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

// import Form from 'react-bootstrap/Form'
// import ExerciseForm from './../Exercises/ExerciseForm'
import WorkoutExercise from './WorkoutExercise'
// import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

class Workout extends Component {
  state = {
    workout: '',
    exercises: null,
    addingExercise: false
  }
  async componentDidMount () {
    const response = await axios(`${apiUrl}/workouts/${this.props.match.params.id}`)

    this.setState({
      workout: response.data.workout
    })
  }

  handleRefresh = async () => {
    const response = await axios(`${apiUrl}/workouts/${this.props.match.params.id}`)

    this.setState({
      workout: response.data.workout
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
          workout: this.props.match.params.id
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
        alert({
          heading: 'failure',
          message: 'Could not create exercise',
          variant: 'danger'
        })
      })
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
      .then(response => {
        this.props.alert({
          heading: 'Success!!!!',
          message: 'You deleted a workout.',
          variant: 'warning'
        })
      })
      .then(() => this.props.history.push('/workouts'))
  }
  render () {
    const { workout, addexercise } = this.state
    if (workout) {
      const deletebutton = (
        <Fragment>
          <Button
            className="delete-workout"
            variant="outline-danger" size="sm" onClick={this.handleDelete}>Delete Workout</Button>
        </Fragment>
      )
      let updateExButton
      if (addexercise) {
        updateExButton = (
          <Fragment>
            <Button className="updateExerciseButton" variant="outline-info" onClick={this.handleUpdate}>edit exercise</Button>
          </Fragment>
        )
      }
      let exercisesStatus
      if (!this.state.workout.exercises.length) {
        exercisesStatus = (
          <div className="noExercises">No exercises added yet. Add one now!</div>
        )
      }
      return (
        <div>
          { workout && (
            <Fragment>
              <div className="workoutHeader">
                <h1 className="workoutName">{workout.name}</h1>
                <Button
                  className="backToWorkouts"
                  variant="outline-primary"
                  href={'#workouts/'}>Back to Workouts</Button>
              </div>
              {(this.props.user && workout) && this.props.user._id === workout.owner
                ? <Button
                  className="edit-workout"
                  variant="outline-info"
                  size="sm" href={`#workouts/${workout._id}/edit`}>Edit Workout Name</Button>
                : ''
              }
              {(this.props.user && workout) && this.props.user._id === workout.owner
                ? deletebutton
                : ''
              }
              {this.state.workout.exercises.map(ex => (
                <WorkoutExercise
                  className="individual-exercise"
                  key={ex.name + ex._id}
                  handleRefresh={this.handleRefresh}
                  user={this.props.user}
                  id={ex._id}
                  thisstate={this.state}
                  alert={this.props.alert}
                />
              ))}
              {exercisesStatus}
              {updateExButton}
              <br/>
              <Button
                className="addExercise"
                variant="outline-primary"
                href={`#workouts/${workout._id}/addexercise`}>Add Exercise</Button>
              <br/>
            </Fragment>
          )}
        </div>
      )
    }
    return (
      <p>no workout found</p>
    )
  }
}

export default withRouter(Workout)
