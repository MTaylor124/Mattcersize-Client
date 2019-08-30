# Mattcersize

A single page workout tracker application.

Users can create workouts and add resistance training exercises to them and
track their progress. It's difficult to keep track of past workouts and I plan
to make it as simple and easy as possible.

### Links

- [Application](https://mtaylor124.github.io/Mattcersize-Client/#/)
- [Back end](https://mattcersize-api.herokuapp.com)
- [Front end repo](https://github.com/MTaylor124/Mattcersize-Client)
- [Back end repo](https://github.com/MTaylor124/Mattcersize-API)

### Setup steps

1. Fork and clone this repo
2. run npm install to install dependencies
3. run npm start for front-end and run npm server for back end


### Development

1. Created user stories
2. Created wireframes
3. Creared ERD
4. Began development:
  1. Created repo for front and back end
  2. Created heroku database
  3. Developed Express Routes for both resources(workout and exercise)
  4. Built React front end
  5. Utilized axios requests to communicate with back end
  6. CRUD
  7. Styling and UI functionality

### Problem Solving
In the event of a bug or issue:
  1. Console logging out state and props as needed to understand what information
     was being sent between states
  2. Pair programming

## Git / Version Control
1. Committed back end after successful CRUD test with curl scripts
2. Committed front end after addition of every successful CRUD test
3. Committed each additional functional component

### Technologies Used
- JavaScript
- React
- React-bootstrap
- Express
- axios
- MongoDB
- Mongoose

### User Stories

As an unregistered user, I would like to sign up with email and password.
As a registered user, I would like to sign in with email and password.
As a signed in user, I would like to change password.
As a signed in user, I would like to sign out.

As a signed in user, I would like to create my own workout
As a signed in user, I would like to view my own workouts
As a signed in user, I would like to edit the name of my workouts
As a signed in user, I would like to delete my workout

As a signed in user, I would like to add exercises to my workout
As a signed in user, I would like to view all exercises with a workout
As a signed in user, I would like to edit exercises in a workout
As a signed in user, I would like to delete exercises within a workout

### Database

This application with have 2 one-to-many relationships between 3 collections: users, workouts and exercises

Collection: Users
- id: string
- email: string

Collection: Workouts
- _id: string
- updatedAt: date
- createdAt: date
- Name: string
- owner: string

Collection: Exercises
- _id: string
- updatedAt: date
- createdAt: date
- name: string
- sets: number
- reps: number
- weight: string

### Future additions

As this is a project I will be personally using weekly, there are several
improvements I plan to make not including the additions I have not
come up with yet. These future additions include:

- AWS support to allow users to take pictures of themselves and save them within
workouts to view progress over time
- added cardio section within exercise or CRUD out separate resource for it
- Track exercises by same name over time to allow for statistics on workouts
- add a weight component to workout for users that weigh themselves before each
workout and would like to keep track of that number over time

##### Users

| CRUD        | HTTP           | Action | Route |
| ------------- |:-------------:| :-----:|:-----:|
| Create      | POST | create | /sign-up |
| Create     | POST      |  create | /sign-in |
| Update | PATCH     |    update | /change-password |
| Delete | DELETE     |    destroy | /sign-out |

##### Workouts

| CRUD        | HTTP           | Action | Route |
| ------------- |:-------------:| :-----:|:-----:|
| Create      | POST | create | /workouts |
| Read     | GET      |  index | /workouts |
| Update | PATCH     |    update | /workouts/:id |
| Delete | DELETE     |    destroy | /workouts/:id |

##### Exercises

| CRUD        | HTTP           | Action | Route |
| ------------- |:-------------:| :-----:|:-----:|
| Create      | POST | create | /exercises |
| Read     | GET      |  index | /exercises |
| Update | PATCH     |    update | /exercises/:id |
| Delete | DELETE     |    destroy | /exercises/:id |

### ERD

![ERD](https://imgur.com/a/vhYn2GE)

### Wireframes

![Front page](https://imgur.com/a/YAOsCsm)
![Empty workout](https://imgur.com/a/GUZaBvI)
![Workout](https://imgur.com/a/K0HfyK2)
![Add Exercise](https://imgur.com/a/JsYaB88)
