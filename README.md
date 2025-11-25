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
## 🛠️ Tools & Technologies

<p align="left">

  <!-- Programming Languages -->
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />

  <!-- DevOps Tools -->
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/GitLab-CI%2FCD-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />

  <!-- Deployment / Environment -->
  <img src="https://img.shields.io/badge/Linux-1793D1?style=for-the-badge&logo=linux&logoColor=white" />
  <img src="https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white" />

  <!-- Editors -->
  <img src="https://img.shields.io/badge/VS_Code-0078D4?style=for-the-badge&logo=visual-studio-code&logoColor=white" />

</p>


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
<img width="1355" height="572" alt="Final app running" src="https://github.com/user-attachments/assets/92744359-482d-4898-b03f-bad28cf0fd7a" />

---

STEP 5 — Dockerize the Application
---
Create Dockerfile
Build + Run:
```bash
docker build -t node-cicd-app .
docker run -p 3001:3000 node-cicd-app
```
<img width="1363" height="352" alt="docker-build" src="https://github.com/user-attachments/assets/27bac36f-a459-4aa7-9f12-012af4148c24" />

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
<img width="795" height="540" alt="gitlab-project" src="https://github.com/user-attachments/assets/f925ad07-9e56-49b2-9808-06d93766c910" />

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
<img width="737" height="203" alt="run-sh-execution" src="https://github.com/user-attachments/assets/6ca579d9-fb88-4d9b-a49a-c7cbab3da65f" />

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

<img width="1308" height="478" alt="gitlab-pipeline-passed" src="https://github.com/user-attachments/assets/dbf15043-c02a-48d1-a502-2677c0f12eca" />

---
🎉 Conclusion
---
You now have a complete CI/CD pipeline:
✔ Local Node app
✔ Dockerized
✔ GitLab CI/CD builds/pushes Docker image
✔ Automatic deployment to local environment
✔ Organized GitHub project with screenshots

