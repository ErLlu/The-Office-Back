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

## BODY

# Get all Characters

When the response is succesfull in the body he will return, for exemple:
[{
"_id": "6659d787a96208e9cdc68d3b",
"name": "Michael Scott",
"age": 54,
"position": "ex-president",
"state": false,
"urlImage": "https://en.wikipedia.org/wiki/Michael_Scott_%28The_Office%29#/media/File:MichaelScott.png",
"alternativeText": "Imagen de Michael Scott en su mesa",
"description": "Michael es el gerente regional de la sucursal de Dunder Mifflin, una empresa papelera en Scranton, Pensilvania, durante la mayor parte de la serie. Al igual que su homólogo en la versión británica original del programa, David Brent, se caracteriza por ser un jefe en gran medida incompetente, improductivo y poco profesional, aunque se lo describe como más amable y, en ocasiones, se muestra eficaz en su trabajo en momentos clave.",
"seasons": "1-7"
}]

## Errors

In case of errors, the API will return responses in the following format:

Error Response:
error: Descriptive error message
