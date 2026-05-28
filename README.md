# Intern Registration REST API

## Project Description

Intern Registration REST API is a backend application developed using Node.js and Express.js. This project allows users to register interns and retrieve intern details using REST API endpoints.

---

## Features

* Register New Interns
* Retrieve Intern Data
* REST API Implementation
* JSON Request & Response Handling

---

## Technologies Used

* Node.js
* Express.js
* Postman
* VS Code

---

## Installation Steps

### Initialize Node Project

```bash
npm init -y
```

### Install Express

```bash
npm install express
```

---

## Run Server

```bash
node server.js
```

### Output

```text
Server running on port 3000
```

---

## API Endpoints

### Home Route

```http
GET /
```

URL:

```text
http://localhost:3000
```

---

### Get All Interns

```http
GET /interns
```

URL:

```text
http://localhost:3000/interns
```

---

### Register Intern

```http
POST /interns
```

URL:

```text
http://localhost:3000/interns
```

### Sample JSON

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "domain": "Web Development"
}
```

---

## How It Works

1. Client sends request using Browser or Postman
2. Express server processes request
3. Intern data is stored
4. Response is returned to client

---

## Conclusion

This project demonstrates the implementation of a REST API using Node.js and Express.js for intern registration and data management.
