<<<<<<< HEAD
# shopsphere
E-commerce site deployment using ansible
=======
# ShopSphere — E-commerce DevOps Pilot Project

ShopSphere is a production-style e-commerce MVP used to practice Docker, Docker Compose, Ansible and GitHub Actions.

## Architecture

Browser → Nginx → Frontend / Backend API → PostgreSQL + Redis

## Stack

- Frontend: HTML/CSS/JavaScript
- Backend: Node.js + Express
- Database: PostgreSQL
- Cache: Redis
- Reverse proxy: Nginx
- Containers: Docker + Docker Compose
- Automation: Ansible
- CI/CD: GitHub Actions
- Registry: GitHub Container Registry (GHCR)

## Local run

```bash
cp .env.example .env
docker compose up -d --build
docker compose ps
curl http://localhost/api/health
```

Open http://localhost

## Ansible

Update `ansible/inventory/hosts` with your server IP and SSH settings.

Test:

```bash
ansible production -i ansible/inventory/hosts -m ping
```

Deploy:

```bash
ansible-playbook -i ansible/inventory/hosts ansible/playbooks/deploy.yml
```

## CI/CD

- `ci.yml`: installs dependencies, runs tests, and builds images.
- `cd.yml`: intended for a self-hosted runner that can reach the deployment server. It builds/pushes images to GHCR and runs the Ansible deployment.

For the VirtualBox lab, a self-hosted runner is appropriate because a GitHub-hosted runner cannot normally reach a private `192.168.x.x` VM directly.

## Important

Do not commit `.env`, private SSH keys, or production passwords.
>>>>>>> 1a00009 (Add Redis healthcheck)
