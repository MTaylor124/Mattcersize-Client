import React, { Component } from 'react'
import apiUrl from './../../apiConfig'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

// import Spinner from 'react-bootstrap/Spinner'

class Exercises extends Component {
  constructor () {
    super()

    this.state = {
      exercises: [],
      isLoading: true
    }
  }
  async componentDidMount () {
    try {
      const response = await axios(`${apiUrl}/exercises`)
      this.setState({ exercises: response.data.exercises, isLoading: false })
    } catch (error) {
      console.error(error)
    }
  }
  render () {
    const exercisesJSX = this.state.exercises.map(exercise => (
      <ListGroup.Item key={exercise.id}>
        <Link to={`/exercises/${exercise.id}`}>{exercise.name}</Link>
      </ListGroup.Item>
    ))

    if (this.state.isLoading) {
      return (
        <div className="text-center">
          <p>not loaded</p>
        </div>
      )
    }

    return (
      <ListGroup>
        {this.state.exercises.length
          ? exercisesJSX
          : <ListGroup.Item>No exercises found</ListGroup.Item>
        }
      </ListGroup>
    )
  }
}

export default Exercises
