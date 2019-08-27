import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const WorkoutForm = ({ workout, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="name">
      <Form.Label>Name of workout:</Form.Label>
      <Form.Control
        name="name"
        type="text"
        placeholder={new Date()}
        value={workout.name}
        onChange={handleChange}
        required
      />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
)

export default WorkoutForm
