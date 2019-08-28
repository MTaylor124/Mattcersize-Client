import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'
import ExerciseForm from './../Exercises/ExerciseForm'
class WorkoutExercise extends React.Component {
  state = {
    exercise: null,
    isEditing: false
  }
  async componentDidMount () {
    try {
      const response = await axios(`${apiUrl}/exercises/${this.props.id}`)
      this.setState({
        exercise: response.data.exercise
      })
    } catch (error) {
      console.error(error)
    }
  }

  handleExerciseUpdate = () => {
    event.preventDefault()
    console.log('this is my update')
    this.setState({
      isEditing: true
    })
    // axios.update
  }
  handleExerciseDelete = () => {
    event.preventDefault()
    // const idToDelete = this.props.id
    // console.log('this is my starting array', this.state.exercise.workout.exercises)
    // const currentExercises = this.state.exercise.workout.exercises
    // const updatedExercises = currentExercises.filter(ex => ex !== idToDelete)
    // console.log('this is my updated array', updatedExercises)
    // console.log('this is the id getting deleted', idToDelete)

    axios.delete(`${apiUrl}/exercises/${this.props.id}`,
      {
        headers: {
          'Authorization': `Bearer ${this.props.user.token}`
        },
        data: {
          exercise: this.state.exercise
        }
      })
      .then(() => {
        this.props.handleRefresh()
      })
      .catch(console.log)
  }

  render () {
    let updateJSX
    const { exercise } = this.state
    const deletebutton = (
      <React.Fragment>
        <Button onClick={this.handleExerciseDelete}>Delete</Button>
      </React.Fragment>
    )
    const updatebutton = (
      <React.Fragment>
        <Button onClick={this.handleExerciseUpdate}>Update</Button>
      </React.Fragment>

    )
    if (this.state.isEditing) {
      updateJSX = <ExerciseForm/>
    }
    if (exercise) {
      return (
        <React.Fragment>
          <br/>
          <span>{this.state.exercise.name} - </span>
          <span>sets: {this.state.exercise.sets} - </span>
          <span>reps: {this.state.exercise.reps} - </span>
          <span>weight: {this.state.exercise.weight}</span>
          {updatebutton}
          {deletebutton}
          <br/>
          {updateJSX}
        </React.Fragment>
      )
    }
    return (
      ''
    )
  }
}

export default WorkoutExercise
