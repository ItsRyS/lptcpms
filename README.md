# LPTCITMS Docker Compose Manual

## Project Structure

- `server/`: Express API (Node.js)
- `client/`: React frontend
- `db/`: `init.sql` to initialize database and user
- `secrets/`: Secrets such as MySQL and MinIO passwords
- `nginx/`: `default.conf` for reverse proxy configuration

## Required Secrets

```bash
secrets/mysql_user
secrets/mysql_pass
secrets/mysql_root_pass
secrets/minio_user
secrets/minio_pass
```

**Important**: All files must be **plain text without newline (\n)** or `-n`.

## Startup Commands

```bash
docker-compose down -v
docker-compose up --build
```

## Service Ports & Access

| Service | Port | URL | Description |
|---------|------|-----|-------------|
| nginx | 80 | http://localhost | Reverse proxy |
| server | 3000 | http://localhost:3000 | Express API |
| db | 3306 | - | MySQL Database |
| adminer | 8080 | http://localhost:8080 | MySQL GUI |
| minio | 9001 | http://localhost:9001 | MinIO Web Console |

## System Design Notes

- NGINX reverse proxies requests to Express API
- Secrets securely handle passwords for MySQL and MinIO
- Healthchecks ensure services start in correct order
- Volumes persist database and file storage outside containers

## Diagnostics & Maintenance

### View logs

```bash
docker logs lptcitms-server-1
docker logs lptcitms-db-1
docker logs lptcitms-minio-1
```

### Access container shells

```bash
docker exec -it lptcitms-server-1 bash
docker exec -it lptcitms-db-1 bash
```

### Check container health

```bash
docker ps
```

Look for `STATUS` = `healthy` to confirm readiness

## Deployment Notes

- Can deploy directly to **Raspberry Pi** (same Docker setup)
- Add HTTPS support using **nginx + certbot**
- Build React frontend and mount into nginx for production

## Maintainer

- **Developer**: nutmachi
- **Assistant**: ChatGPT
- **Date**: 2025-05-27