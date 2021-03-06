# Getting Started:
No need for VirtualBox or Vagrant!

All that is needed is the Docker [Mac](https://docs.docker.com/docker-for-mac/ "Get Started with Docker for Mac")/[Windows](https://docs.docker.com/docker-for-windows/ "Get Started with Docker for Windows") desktop client.

Installing the desktop client includes [Docker-Compose](https://docs.docker.com/compose/ "Docker Compose")

## Let's do this!

To use:
`git clone https://github.com/bigbassroller/wordpress-api-demo my-project-name && cd my-project-name`

Then:
`docker-compose up -d`

This will create a `wordpress` directory with a local copy of WordPress and `env` folder for the MariaDB. Now you will have a local hard copy of your WordPress files and database.

Wait a moment, as it will take 30 seconds for Docker to install MariaDB and connect the WordPress container to it. 


Run `ng serve` from wp-angular folder to bootstrap the Angular app. 

Go to [http://localhost:80](http://localhost:80/) to see your brand spanking new WordPress site!

Go to [http://localhost:4200](http://localhost:4200/) to view your soon to be awesome Angular 2 app!

## Helpful commands:
### stop all containers:
`docker kill $(docker ps -q)`

### remove all containers:
`docker rm $(docker ps -a -q)`

### remove all docker images:
`docker rmi $(docker images -q)`

### all you can special move:
`docker kill $(docker ps -q) && docker rm $(docker ps -a -q) && docker rmi $(docker images -q) && docker-compose up -d && docker logs wordpress -f`
