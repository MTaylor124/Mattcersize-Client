import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'
// import ExerciseForm from './../Exercises/ExerciseForm'
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

  handleExerciseDelete = () => {
    event.preventDefault()
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
      .catch(console.log) // need to put something here
  }

  render () {
    const { exercise } = this.state
    const deletebutton = (
      <React.Fragment>
        <Button className="exerciseDeleteButton" onClick={this.handleExerciseDelete} variant="outline-danger" size="sm" >Delete</Button>
      </React.Fragment>
    )
    if (exercise) {
      return (
        <React.Fragment>
          <br/>
          <span>{this.state.exercise.name} - </span>
          <span>sets: {this.state.exercise.sets} - </span>
          <span>reps: {this.state.exercise.reps} - </span>
          <span>weight: {this.state.exercise.weight} </span>
          {deletebutton}
          {exercise && <Button
            className="updateExerciseButton"
            variant="outline-info" href={`#exercises/${exercise._id}/edit`} size="sm">edit</Button>}
          <br/>
        </React.Fragment>
      )
    }
    return (
      ''
    )
  }
}

export default WorkoutExercise
