
# Library Management System

A full-stack web application for managing library books built with React, Node.js, Express, and MongoDB.


## Prerequisites
- Node.js (Latest LTS version recommended)
- MongoDB (Local installation or MongoDB Atlas account) 
- Git
## Installation

1. Clone the repo

```bash
git clone https://github.com/charlietjitra/library-management-system.git
cd library-management-system
```
2. Ensure that you set up your own connection and retrieve the URI. For example, "mongodb://localhost:27017/".

3. Create .env file just like .env.example

4. Install Server dependencies
```bash
cd server 
npm i
```
5. Install client dependencies
```bash
cd ../client
npm i 
```



## Run
To run the application you need to run both client and server subsequently
1. Run the server
```bash
cd server
npm run dev
```
The server will start on http://localhost:3000 (or the port you specified in .env file)

2. Run the client
```bash
cd ../client
npm run dev
```
The client development server will start and the application will be available at http://localhost:5173


## Tech Stack

**Frontend**: React, Tailwind CSS, Axios, Notistack, Font Awesome

**Backend**: Node.js, Express

**Database**: MongoDB, Mongoose

**Other**: Vite, React Router

