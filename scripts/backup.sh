#!/usr/bin/env bash
set -euo pipefail
mkdir -p backups
docker compose exec -T postgres pg_dump -U "${POSTGRES_USER}" "${POSTGRES_DB}" > "backups/shopsphere-$(date +%Y%m%d-%H%M%S).sql"
