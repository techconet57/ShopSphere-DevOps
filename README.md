# ShopSphere — E-commerce DevOps Pilot Project

ShopSphere is a containerized e-commerce pilot project developed to practice and demonstrate real-world DevOps concepts, including Docker, Ansible automation, GitHub Actions CI/CD, container image management, and Linux server deployment.

The project provides a simple e-commerce interface where users can view products and add items to a cart counter. Its primary focus is learning how to build, containerize, automate, and deploy a multi-service application.

## 🚀 Project Objectives

- Develop a simple e-commerce application.
- Containerize frontend and backend services using Docker.
- Use PostgreSQL for product data storage.
- Use Redis for caching and service health checks.
- Configure Nginx as a reverse proxy.
- Automate server configuration and deployment with Ansible.
- Implement CI/CD pipelines using GitHub Actions.
- Build and publish Docker images to GitHub Container Registry (GHCR).
- Practice deployment in a Linux VirtualBox lab environment.

## 🏗️ System Architecture

```text
                    User / Browser
                          |
                          v
                   Nginx Reverse Proxy
                          |
             +------------+------------+
             |                         |
             v                         v
        Frontend                  Backend API
     HTML/CSS/JS               Node.js + Express
                                       |
                         +-------------+-------------+
                         |                           |
                         v                           v
                    PostgreSQL                    Redis
                    Product Data                 Caching
```

## 🛠️ Technology Stack

| Component | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | PostgreSQL 16 |
| Cache | Redis 7 |
| Reverse Proxy | Nginx |
| Containerization | Docker |
| Container Orchestration | Docker Compose |
| Automation | Ansible |
| CI/CD | GitHub Actions |
| Container Registry | GitHub Container Registry |
| Deployment Environment | Linux VirtualBox Lab |

## 📁 Project Structure

```text
shopsphere/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── cd.yml
├── ansible/
│   ├── inventory/
│   ├── playbooks/
│   └── templates/
├── backend/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── index.html
│   ├── app.js
│   ├── styles.css
│   └── Dockerfile
├── database/
│   └── init/
├── nginx/
│   └── nginx.conf
├── scripts/
├── docker-compose.yml
├── docker-compose.prod.yml
└── .env.example
```

## ⚙️ Application Features

- Product listing through a backend API.
- Product information retrieved from PostgreSQL.
- Simple frontend shopping cart counter.
- Backend health-check endpoint.
- Database and Redis health checks.
- Nginx routing for frontend and backend requests.
- Containerized application services.
- Automated Docker image build and publishing.
- Ansible-based deployment automation.

## 🐳 Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/ShopSphere-DevOps.git
cd ShopSphere-DevOps
```

### 2. Configure Environment Variables

```bash
cp .env.example .env
```

Update the environment variables according to your local configuration.

### 3. Build and Start the Services

```bash
docker compose up -d --build
```

### 4. Check Running Containers

```bash
docker compose ps
```

### 5. Test the Backend Health Endpoint

```bash
curl http://localhost/api/health
```

### 6. Open the Application

Visit the following address in your browser:

```text
http://localhost
```

## 🔄 CI/CD Pipeline

The project uses GitHub Actions to automate the development and deployment workflow.

### Continuous Integration

The CI pipeline:

1. Checks out the source code.
2. Installs Node.js dependencies.
3. Runs frontend and backend tests.
4. Builds the frontend application.
5. Validates the Docker Compose configuration.
6. Builds frontend and backend Docker images.

### Continuous Deployment

The CD pipeline:

1. Checks out the repository.
2. Logs in to GitHub Container Registry.
3. Builds frontend and backend Docker images.
4. Pushes images to GHCR.
5. Installs required Ansible collections.
6. Uses Ansible Vault for protected configuration.
7. Verifies the deployment host.
8. Deploys the application using Ansible.

## 🚢 Ansible Deployment

Update the deployment server details in:

```text
ansible/inventory/hosts
```

Test the connection:

```bash
ansible production \
  -i ansible/inventory/hosts \
  -m ping
```

Deploy the application:

```bash
ansible-playbook \
  -i ansible/inventory/hosts \
  ansible/playbooks/deploy.yml
```

For complete environment setup, use the relevant Ansible playbooks and configure the required variables securely.

## 🔐 Security Practices

- Production configuration is protected using Ansible Vault.
- Sensitive passwords should not be committed as plain text.
- Private SSH keys must not be stored in the repository.
- Environment files containing secrets should be excluded from Git.
- GitHub Actions secrets are used for sensitive CI/CD credentials.

## 📚 Learning Outcomes

This project helps develop practical knowledge of:

- Linux server administration.
- Docker and Docker Compose.
- Container networking.
- PostgreSQL and Redis service integration.
- Nginx reverse proxy configuration.
- Ansible inventory and playbooks.
- Ansible Vault secret management.
- Git and GitHub workflows.
- GitHub Actions CI/CD automation.
- Container image publishing with GHCR.
- Deployment troubleshooting and infrastructure automation.

## ⚠️ Project Status

This is an educational DevOps pilot project created for hands-on learning and experimentation. It is not intended to be used as a production-ready e-commerce platform without additional security, testing, monitoring, and business functionality.

## 👨‍💻 Author

**Shyam Raut**

This project was developed as part of my practical learning journey in DevOps, cloud infrastructure, automation, and continuous delivery.
