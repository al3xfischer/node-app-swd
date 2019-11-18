## SWD-Website

[Site](http://http://40.67.253.102/)

## Docker registry

[dockerhub](https://hub.docker.com/r/al3xfischer/nodeapp)

## Github Repo

[github](https://github.com/al3xfischer/node-app-swd.git)

## Documentation

This project provides a simple Express app. 
The purpose of this project is to gain experience with Azure CI/CD,
Docker and K8s. 

After every commit to the dockerize branch in the git repository, the build pipeline creates a Docker image and pushes it to Docker Hub. After that, a release is created, and the changes are getting deployed to an Azure Kubernetes Service. From there, the app can is accessible via the internet.  A new release is created fully automated to exonerate the developers.