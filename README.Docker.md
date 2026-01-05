# AppFa002

To build the image, run:

```bash
docker build --tag app-fa-002 .
```

To View local images, run:

```bash
docker images
```

To Run the containerized application

```bash
docker compose up --build
```

To Run the application in the background

```bash
docker compose up --build -d
```

To confirm that the container is running, run:

```bash
docker ps
```

To stop the application, run:

```bash
docker compose down
```
