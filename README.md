📦 CI/CD Node.js Project (Local Deployment + GitLab Pipeline)
---
This project demonstrates a full CI/CD workflow using Node.js, Docker, GitLab CI/CD, and local deployment.

📁 Project Structure
---
```bash
.
├── cicd-project
│   ├── server.js
│   ├── package.json
│   ├── Dockerfile
│   ├── .gitlab-ci.yml
│   └── scripts
│       └── deploy.sh
│
└── cicd-deployment
    └── run.sh
```
🛠 Tools & Technologies Used
Tool	Purpose
---
Node.js       	        Simple web app
Docker	                Containerizing the app
GitLab  Repo	        Source code hosting
GitLab CI/CD	        Building & pushing Docker images
GitLab Registry	        Storing built Docker images
Local Server (run.sh)	Deploying image locally

---
🚀 Step-by-Step Guide
---
STEP 1 — Create Project Folder
---
```bash
mkdir cicd-project
cd cicd-project
```
---
STEP 2 — Create Simple Node.js App
---
STEP 3 — Initialize Node.js
---
```bash
npm init -y
```
---
Edit package.json → Add:
```bash
"start": "node server.js"
```
---
STEP 4 — Test Locally
---
```bash
npm start
```
Visit:
👉 http://localhost:3001
---

STEP 5 — Dockerize the Application
---
Create Dockerfile
Build + Run:
```bash
docker build -t node-cicd-app .
docker run -p 3001:3000 node-cicd-app
```
---
STEP 6 — Push Code to GitLab
---
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://gitlab.com/YOUR_USERNAME/cicd-project.git
git push -u origin main
```

---
STEP 7 — Create GitLab CI/CD Pipeline
---
Create .gitlab-ci.yml

---
STEP 8 — Local Deployment Folder
---
```bash
mkdir ~/cicd-deployment
cd ~/cicd-deployment
```
Add run.sh:
Make executable:
```bash
chmod +x run.sh
```
----
STEP 9 — Deployment Script in GitLab Project
---
Create file deploy.sh inside cicd-project/scripts/deploy.sh:
Make executable:
```bash
chmod +x scripts/deploy.sh
```
---

STEP 10 — Run CI/CD Pipeline
---
Your GitLab pipeline will:
1.Build Docker image
2.Push to GitLab registry
3.SSH into your local machine
4.Run run.sh
5.Deploy the new container

---
🎉 Conclusion
---
You now have a complete CI/CD pipeline:
✔ Local Node app
✔ Dockerized
✔ GitLab CI/CD builds/pushes Docker image
✔ Automatic deployment to local environment
✔ Organized GitHub project with screenshots

