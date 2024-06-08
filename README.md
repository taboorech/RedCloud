# RedCloud

RedCloud is a web application similar to Spotify, designed for users to enjoy seamless music streaming. 
It features user authentication, playlist creation, and song playback. 
The project is built using modern web technologies such as React, Redux, Axios, RTK Query, React Router DOM, Materialize, and Node-Sass.

## Table of Contents

  * [Features](#Features)
  * [Tech Stack](#tech-stack)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Configuration](#Configuration)

## Features

 * **User Authentication**: Sign up and log in securely.
 * **Playlist Creation**: Create, edit, and delete playlists.
 * **Music Streaming**: Play, pause, and skip songs.
 * **User Interface**: Modern and responsive design using Materialize.
 * **State Management**: Efficient state handling with Redux and RTK Query.
 * **Routing**: Smooth navigation with React Router DOM.

## Tech Stack

  * React
  * Redux
  * RTK Query
  * Axios
  * React Router DOM
  * Materialize
  * Node-Sass

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/taboorech/RedCloud.git
   ```
2. Install dependencies
   ```
   npm install
   ```
If you have the latest version of node js, you need to install node-sass yourself. You can check current vesion on [site](https://www.npmjs.com/package/node-sass)
  ```
  npm install node-sass@current_vesion
  ```

## Usage

1. Need to start [server](https://github.com/taboorech/RedCloud-backend.git) firstly
2. Start react app
     ```
     npm run start
     ```
3. Open your browser and navigate to
   ```
   http://localhost:3000
   ```

## Configuration

Change route in [mainInstance.js](src/api/mainInstance.js)
  ```
 const mainInstance = axios.create({
   baseURL: 'http://localhost:3001'
 });
 
 const mainInstanceRetry = axios.create({
   baseURL: 'http://localhost:3001'
 });
  ```
to
  ```
 const mainInstance = axios.create({
   baseURL: '__your_path__'
 });
 
 const mainInstanceRetry = axios.create({
   baseURL: '__your_path__'
 });
  ```
