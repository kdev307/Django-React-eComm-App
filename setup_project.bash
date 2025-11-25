#!/usr/bin/env bash

# Exit on error
set -e

# Define paths
BACKEND_PATH="backend"
FRONTEND_PATH="frontend"
ENV_PATH="env"

echo "=== Checking Python virtual environment ==="

# Detect OS for correct venv activate path
if [[ "$OSTYPE" == "msys"* || "$OSTYPE" == "cygwin"* ]]; then
    # Windows Git Bash / MSYS2
    ACTIVATE_PATH="$ENV_PATH/Scripts/activate"
else
    # macOS + Linux
    ACTIVATE_PATH="$ENV_PATH/bin/activate"
fi

if [[ ! -f "$ACTIVATE_PATH" ]]; then
    echo "❌ Virtual environment not found. Please create it using:"
    echo "python -m venv env"
    exit 1
fi

echo "=== Activating virtual environment ==="
# shellcheck disable=SC1090
source "$ACTIVATE_PATH"

echo "=== Installing Python dependencies ==="
cd "$BACKEND_PATH"
pip install -r requirements.txt

echo "=== Running Django migrations ==="
python manage.py migrate

echo "=== Installing Node.js dependencies ==="
cd "../$FRONTEND_PATH"
npm install

echo "=== Building frontend ==="
npm run build

echo "=== Returning to project root ==="
cd ..

echo "=== Starting Django backend ==="
# Run Django server in background
(
    source "$ACTIVATE_PATH"
    cd "$BACKEND_PATH"
    python manage.py runserver
) &

echo "=== Starting React frontend ==="
(
    cd "$FRONTEND_PATH"
    npm start
) &

echo "=== Setup complete! Frontend + Backend running. ==="

# Keep the script alive so background processes don't stop
wait
