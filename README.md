# The Office App

## Description

This is an API REST for managing a collection of characters of The Office serie. It allows you to perform CRUD operations (Create, Read, Update, Delete) on characters.

## Installation and run

- Download and clone the repository:

  - `https://github.com/ErLlu/The-Office-Back.git`

- Before install the dependencies:

  - `npm install`

- Configure the environment variables in a `.env` file.

  - Server configuration

    `PORT=8000`

  - Database configuration

    `MONGODB_URI=mongodb+srv://<user>:<password>@mycluster.tsjfg6i.mongodb.net/the-office-app`

- At last, Start the server:
  - `npm start`

The API is available at `http://localhost:8000` (or the port specified in your environment variables).

## API

#### /characters

- `GET` : Get all characters
