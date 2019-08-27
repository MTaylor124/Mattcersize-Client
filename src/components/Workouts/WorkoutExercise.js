import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'

class WorkoutExercise extends React.Component {
  state = {
    exercise: null
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
    console.log('this is props id', this.props.id)
    axios.delete(`${apiUrl}/exercises/${this.props.id}`,
      { data: {
        exercise: this.state.exercise
      }
      })
      .then(() => this.props.history.push('/workouts/'))
  }

  render () {
    const { exercise } = this.state
    const deletebutton = (
      <React.Fragment>
        <Button onClick={this.handleExerciseDelete}>Delete exercise</Button>
      </React.Fragment>
    )
    if (exercise) {
      console.log('this is exercise', exercise)
      return (
        <React.Fragment>
          <br/>
          <span>{this.state.exercise.name} - </span>
          <span>sets: {this.state.exercise.sets} - </span>
          <span>reps: {this.state.exercise.reps} - </span>
          <span>weight: {this.state.exercise.weight}</span>
          {deletebutton}
        </React.Fragment>
      )
    }
    return (
      'diddly'
    )
  }
}

export default WorkoutExercise
