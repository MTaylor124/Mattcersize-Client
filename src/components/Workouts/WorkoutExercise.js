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
    const response = await axios(`${apiUrl}/exercises/${this.props.id}`)
    this.setState({
      exercise: response.data.exercise
    })
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
      .then(response => {
        this.props.alert({
          heading: 'Success!',
          message: 'Successfully deleted Exercise',
          variant: 'warning'
        })
      })
      .catch(() => {
        this.props.alert({
          heading: 'Failure!!!!',
          message: 'Could not delete exercise',
          variant: 'danger'
        })
      })
  }

  render () {
    const { exercise } = this.state
    const deletebutton = (
      <React.Fragment>
        <Button className="exerciseDeleteButton" onClick={this.handleExerciseDelete} variant="outline-danger" size="sm">Delete<i className="fas fa-trash-alt"></i></Button>
      </React.Fragment>
    )
    if (exercise) {
      return (
        <React.Fragment>
          <br/>
          <div className="individual-exercise2">
            <span className="exercisefields exerciseName">{this.state.exercise.name} </span>
            <div className="setsreps">
              <span className="exercisefields exsets"> {this.state.exercise.sets} x </span>
              <span className="exercisefields exreps"> {this.state.exercise.reps} </span>
            </div>
            <div className="weightLine">
              <br/>
              <span className="exweightlabel">Weight:</span>
              <span className="exercisefields exweight"> {this.state.exercise.weight}</span>
              <br/>
            </div>
            <div className="flexButtons">
              {exercise && <Button
                className="updateExerciseButton"
                variant="outline-info" href={`#exercises/${exercise._id}/edit`} size="sm">Edit Exercise</Button>}
              {deletebutton}
            </div>
          </div>
        </React.Fragment>
      )
    }
    return (
      ''
    )
  }
}

export default WorkoutExercise
