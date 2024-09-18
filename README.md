# Full-stack-to-do-list

# Features:
* Simaple Todo List Web App
* Support all CRUD operations for tasks in Todo List



# Technologies Used

Frontend
* Next.js
* ShadCN
* Tailwind CSS

Backend:
* Node.js
* Express.js
* PostgreSQL
* Supabase



# Getting Started
Prerequisites
* Node.js(18.18 or higher)
* npm



# Installation

Clone the repository
```
git clone https://github.com/yourusername/your-repo-name.git
```

Navigate to the project directory
```
cd your-repo-name
```

Install dependencies for both frontend and backend
```
cd frontend && npm install
cd ../backend && npm install
```

Set up environment variables
frontend .env file
```
NEXT_PUBLIC_SERVER_URL =
```

backend .env file
```
DATABASE = 
USER = 
PASSWORD = 
HOST = 
DIALECT = 
PORT = 
CLIENT_URL = 
```



# Usage:
To run Frontend, in frontend directory run following command
```
npm run dev
```

To run Backend server, in frontend directory run following command
```
node index.js
```



# API Documentation:
```
GET /tasks
Retrieves all tasks

Response: 
[
	{
        "id": 5,
        "task": "Task 5",
        "status": "Incomplete",
        "created_at": "2024-09-18T11:08:54.121Z"
    },
    {
        "id": 9,
        "task": "Task 9",
        "status": "Incomplete",
        "created_at": "2024-09-18T11:09:04.032Z"
    }
]
```

```
POST /createTask
Add new task to todo list

Request Body:
{
    "task": "Task 21",
    "status": "Incomplete"
}
Response:
{
    "message": "Task created successfully",
    "createdTask": {
        "id": 24,
        "task": "Task 21",
        "status": "Incomplete",
        "created_at": "2024-09-18T14:22:02.796Z"
    }
}
```

```
DELETE /task/:id
Delete a task with id 'id'

Response:
{
    "message": "Task deleted successfully"
}
```

```
PUT /task/:id
Update a task with id 'id'

Request Body:
{
    "status": "Completed",
    "task": "Task 6"
}
Response:
{
    "message": "Task updated successfully",
    "task": [
        1
    ]
}
```