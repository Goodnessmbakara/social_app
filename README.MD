# Realtime Messaging API

This is a simple API endpoint that allows WebSocket connections from React applications messaging each other in real time and includes read receipts in the response. The API is implemented using Django, Django Channels, and Docker.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Docker installed on your machine to run this application. You can download Docker [here](https://www.docker.com/products/docker-desktop).

### Installing

1. Clone the repository to your local machine: git clone  https://github.com/Goodnessmbakara/social_app


2. Navigate to the project directory: cd social_app


3. Build the Docker image: bash docker build -t my-django-app .


4. Run the Docker container: bash docker run -p 8000:8000 my-django-app


The application will be available at `http://localhost:8000`.


## Built With

* [Django](https://www.djangoproject.com/) - The web framework used
* [Django Channels](https://channels.readthedocs.io/en/latest/) - Used to handle WebSockets
* [Docker](https://www.docker.com/) - Used to containerize the application


## Authors

* **Goodness Mbakara** - *Initial work* - [Goodnessmbakara](https://github.com/Goodnessmbakara)




