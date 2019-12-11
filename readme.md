# node-app-swd

## Übung für SWD BIT17 FHWN -> dockerize branch
## SWD-Website

[Site](http://40.67.253.102/)

## Docker registry

[dockerhub](https://hub.docker.com/r/al3xfischer/nodeapp)

## Github Repo

[github](https://github.com/al3xfischer/node-app-swd.git)

## Documentation

This project provides a simple Express app. 
The purpose of this project is to gain experience with Azure CI/CD,
Docker and K8s. 

After every commit to the dockerize branch in the git repository, the build pipeline creates a Docker image and pushes it to Docker Hub. After that, a release is created, and the changes are getting deployed to an Azure Kubernetes Service. From there, the app is accessible via the internet.  A new version is created fully automated to exonerate the developers.

A release is created right after a build finished. I did this to make testing the process easier.

During the build process, the deployment-template.yml is changed and saved as deployment.yml. Then the deployment.yml contains the specific docker image tag.
After that, a docker image will be created and pushed to Docker Hub. 

During the release process, the deployment.yml is applied to the Kubernetes cluster.

[Screenhots](https://github.com/al3xfischer/node-app-swd/tree/dockerize/docu)

## Files

[Build Pipeline](https://github.com/al3xfischer/node-app-swd/blob/dockerize/dockerize.yml)  
Is used to create a Docker image and to publish it to Docker Hub.

[K8s Deployment](https://github.com/al3xfischer/node-app-swd/blob/dockerize/deployment.yml)  
The deployment file for Kubernetes to configure the cluster.
