import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ExerciseForm = ({ exercise, handleChange, handleExerciseSubmit }) => (
  <Form onSubmit={handleExerciseSubmit}>
    <Form.Group controlId="name">
      <Form.Label>Exercise:</Form.Label>
      <Form.Control
        name="name"
        type="text"
        placeholder="Exercise Name"
        value={exercise.name}
        onChange={handleChange}
        required
      />
    </Form.Group>
    <Form.Group controlId="sets">
      <Form.Label>Sets</Form.Label>
      <Form.Control
        name="sets"
        type="number"
        placeholder="sets"
        onChange={handleChange}
        required
      />
    </Form.Group>
    <Form.Group controlId="reps">
      <Form.Label>Reps</Form.Label>
      <Form.Control
        name="reps"
        type="number"
        placeholder="reps"
        onChange={handleChange}
        required
      />
    </Form.Group>
    <Form.Group controlId="weight">
      <Form.Label>Weight</Form.Label>
      <Form.Control
        name="weight"
        type="number"
        placeholder="Optional: Weight"
        onChange={handleChange}
      />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
)

export default ExerciseForm
