# COMP3006 Assessment 2

**Library System** Web Service Application

---

## Client

Frontend Node.js application using React

Skeleton from: [Parcel React skeleton](https://parceljs.org/recipes/react/)

## Server

Backend Node.js application using Express.js

Skeleton from: [Express application skeleton](https://expressjs.com/en/starter/generator.html)

## Images

MongoDB is used for the database supporting the service and Node.js is used to run the frontend and backend web servers.

- MongoDB: [mongo](https://hub.docker.com/_/mongo) Docker image. 
- Node.js [node](https://hub.docker.com/_/node) image.

---

## Running

All the containers can be started using:
```bash
./run.sh
```

### Container URLs:

| Container | URL |
|---|---|
| client | http://localhost:8080 |
| server | http://localhost:3000 |
| mongo | container only |

### Stop

To stop the containers:

```bash
docker compose down
```