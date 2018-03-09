[![Build Status](https://travis-ci.org/annelledejager/simple-frontend.svg?branch=master)](https://travis-ci.org/annelledejager/simple-frontend)

## Simple website

This project is a simple React frontend application with basic functionality. A space to experiment and play with new technologies. 

The production application is deployed to Heroku through Travis CI. 

## Demo

Follow [this](https://simple-frontend.herokuapp.com/) link.

## Getting Started

Clone the repository to a location of your liking. In your shell run the following commands to run the application locally. 

```
$ cd simple-frontend
$ docker-compose up
```

If you want to pull the latest Docker image from Heroku run the following command before the `up` command.

```
$ docker-compose pull
```

Then visit `http://localhost:3000/` to view your application.

### Prerequisites

You need to install docker and docker-compose. [Following theses](https://docs.docker.com/docker-for-mac/) instructions.

## Deployment

The application is deployed to Heroku using Travis CI. Pushing to Master will trigger a the build job. 

## Built With

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

* [Docker](https://www.docker.com/) - Software containerization platform
* [Travis](https://travis-ci.org/) - Distributed continuous integration service

## Authors

* **Annelle de Jager** 

See also the list of [contributors](https://github.com/annelledejager/simple-frontend/graphs/contributors) who participated in this project.
