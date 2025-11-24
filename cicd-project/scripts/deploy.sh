#!/bin/bash

echo "Starting local deployment..."

# create folder if not exists
mkdir -p ~/cicd-deployment

# remove old deployment
rm -rf ~/cicd-deployment/*

# copy project files
cp -r * ~/cicd-deployment

echo "Deployment completed successfully!"
