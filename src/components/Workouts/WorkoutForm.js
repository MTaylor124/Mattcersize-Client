import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const checkforworkout = (workout) => {
  if (workout.name) {
    return (
      <Button className="workout-back" variant="danger" href={`#workouts/${workout._id}`}>
        Back to workout
      </Button>
    )
  } else {
    return (
      <Button className="workout-back" variant="danger" href={'#workouts/'}>
        Back to Workouts
      </Button>
    )
  }
}
const WorkoutForm = ({ workout, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="name">
      <Form.Label
        className="workout-label"
      >Workout Name:</Form.Label>
      <Form.Control
        name="name"
        type="text"
        placeholder={new Date()}
        value={workout.name}
        onChange={handleChange}
        required
      />
    </Form.Group>
    <div className="workout-form-buttons">
      <Button
        className="workout-submit"
        variant="primary" type="submit">
        Submit
      </Button>
      {checkforworkout(workout)}
    </div>
  </Form>
)

export default WorkoutForm
