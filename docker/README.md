# Docker Development Environment

This project provides a complete full-stack development environment using Docker Compose, including a frontend, backend, database, and an Nginx reverse proxy.

## Prerequisites

Before you begin, ensure you have Docker installed on your system.

### Install Docker

*   **Windows / macOS**: Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop/). This package includes Docker Engine and Docker Compose.
*   **Linux**: Install Docker Engine and Docker Compose. For Ubuntu/Debian, use the following commands:

    ```bash
    # Update package list
    sudo apt update

    # Install Docker Engine and Docker Compose
    sudo apt install docker.io docker-compose

    # Start and enable the Docker service
    sudo systemctl start docker
    sudo systemctl enable docker

    # Add your user to the 'docker' group to run Docker commands without sudo
    sudo usermod -aG docker $USER

    # Log out and log back in, or restart your terminal, for the group change to take effect.
    ```

### Environment Configuration

1.  **Create your environment file**: Copy the example environment file to create your local configuration:

    ```bash
    cp .env.example .env
    ```

2.  **Update values**: Open the newly created `.env` file and modify the variables as needed for your development setup.

## Running the Environment

1.  **Start the services**: Navigate to the root directory of this project in your terminal and run:

    ```bash
    docker compose up -d
    ```
    The `-d` flag runs the services in detached mode (in the background).

    *   **Port Conflict**: If another application is already using port 80 on your host machine, you can change the Nginx port mapping. Locate the `nginx` service in your `docker-compose.yml` file and modify the `ports` section (e.g., `8080:80` to use port 8080 on your host).

2.  **Access the application**: Once the services are running, you can access them via your web browser:
    *   **Frontend**: [http://localhost](http://localhost)
    *   **Backend API**: [http://localhost/api](http://localhost/api)

## Stopping the Environment

1.  **Stop the services**: To stop all running services without removing their data, run:

    ```bash
    docker compose stop
    ```

2.  **Stop and remove services/volumes**: To stop all services and remove the containers, networks, and volumes associated with the project (useful for a clean slate), run:

    ```bash
    docker compose down
    ```
