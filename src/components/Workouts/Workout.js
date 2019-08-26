import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import Button from 'react-bootstrap/Button'

class Workout extends Component {
  state = {
    workout: null
  }

  async componentDidMount () {
    console.log(this.props.user)
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
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(Workout)
