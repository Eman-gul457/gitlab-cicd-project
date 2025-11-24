#!/bin/bash

# Stop and remove old container if exists
docker stop node-cicd-deployed || true
docker rm node-cicd-deployed || true

# Pull latest image from GitLab Registry
docker pull registry.gitlab.com/your-username/cicd-project:latest

# Run the new container
docker run -d -p 3001:3000 --name node-cicd-deployed registry.gitlab.com/your-username/cicd-project:latest
