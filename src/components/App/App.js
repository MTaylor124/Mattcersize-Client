import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

import Home from '../Home/Home'
import Workout from '../Workouts/Workout'
import Workouts from '../Workouts/Workouts'
import CreateWorkout from '../Workouts/CreateWorkout'
import UpdateWorkout from '../Workouts/UpdateWorkout'

import Exercise from '../Exercises/Exercise'
import Exercises from '../Exercises/Exercises'
import CreateExercise from '../Exercises/CreateExercise'
import UpdateExercise from '../Exercises/UpdateExercise'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container">
          <AuthenticatedRoute
            user={user}
            exact path='/workouts' render={() => (
              <Workouts
                user={user}
                alert={this.alert}
              />
            )}/>
          <AuthenticatedRoute
            user={user}
            path="/createworkout"
            render={() => (
              <CreateWorkout
                user={user}
                alert={this.alert}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            exact
            path='/workouts/:id'
            render={() => (
              <Workout user={user}
                alert={this.alert} />
            )}
          />
          <AuthenticatedRoute
            user={user}
            exact
            path="/workouts/:id/edit"
            render={() => (
              <UpdateWorkout
                user={user}
                alert={this.alert}
              />
            )}
          />

          <AuthenticatedRoute exact path='/exercises' component={Exercises} />
          <AuthenticatedRoute
            user={user}
            path='/workouts/:id/addexercise'
            render={() => (
              <CreateExercise
                user={user}
                alert={this.alert}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            exact
            path='/exercises/:id'
            render={() => (
              <Exercise user={user}
                alert={this.alert} />
            )}
          />
          <AuthenticatedRoute
            user={user}
            exact
            path="/exercises/:id/edit"
            render={() => (
              <UpdateExercise
                user={user}
                alert={this.alert}
              />
            )}
          />
          <Route exact path='/' user={user}
            render={() => (
              <Home user={user} />
            )}
          />
          <Route path='/about'
          />
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
