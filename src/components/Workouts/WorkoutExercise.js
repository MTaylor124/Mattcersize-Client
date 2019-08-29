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
          <div className="lazyfix">Options:</div>
          <div className="flexButtons">
            {exercise && <Button
              className="updateExerciseButton"
              variant="outline-info" href={`#exercises/${exercise._id}/edit`} size="sm">edit</Button>}
            {deletebutton}
          </div>
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
