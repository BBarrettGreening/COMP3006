#!/usr/bin/env bash
set -e

# Build the docker containers
cd "$(dirname "$0")"
docker compose up --build "$@"
