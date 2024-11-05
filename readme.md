# Task Management API

This is a simple task management API built with Node.js. It allows users to create, read, update, and delete tasks. The API supports file uploads for task images and stores tasks in a JSON file.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features
- Create, read, update, and delete tasks
- Upload images for tasks
- Store tasks in a JSON file
- Handle errors gracefully

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/najiibmohamed11/taskfy.git
   cd task-management-api
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

## Usage

1. Start the server:
   ```bash
   npm run dev
   ```

2. The server will run on `http://localhost:9000`.

3. You can use tools like Postman or cURL to interact with the API.

## API Documentation

### Base URL

```
http://localhost:9000/tasks
```

### Endpoints

#### 1. Get All Tasks
- **Method:** `GET`
- **URL:** `/tasks`
- **Response:** Returns a list of all tasks.

#### 2. Create a Task
- **Method:** `POST`
- **URL:** `/tasks`
- **Request Body:** `multipart/form-data`
- **Response:** Returns the created task.

#### 3. Update a Task
- **Method:** `PATCH`
- **URL:** `/tasks/:id`
- **Request Body:** `multipart/form-data`
- **Response:** Returns the updated task.

#### 4. Delete a Task
- **Method:** `DELETE`
- **URL:** `/tasks/:id`
- **Response:** Returns a success message.

### Error Responses
- **400 Bad Request:** Indicates an error in the request.
- **404 Not Found:** Indicates that the task was not found.

