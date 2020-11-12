# VibeCheck

VibeCheck is an app for music enthusiasts with synesthesia who want to document and organize individual tracks based on the dominant color they evoke as well as any associated visualizations and emotions. Users will be able to Create, Read, Update, and Delete entries, generate data that relates to them as an individual, and never have to navigate away from a single page.

Vibecheck is written with React, Javascript, HTML, and CSS.

## Setup
1. `git clone git@github.com:BeatleyTQD/VibeCheck.git`
1. `cd` into the created directory
1. `mkdir API`
1. `touch API/database.json`
1.  add `{"users":[], "tracks":[], "colors":[]}` to database. You will need to add your own color ids and associated terminology here. List of hard-coded colors are in the TrackCard.css file.
1. `json-server -p 8088 -w API/database.json`
1. Type `npm start` to auto host the app.

## Using VibeCheck
1. Register a new account. This is not true authentication - login information is saved to the JSON database and will be visible to anyone with access to your terminal. Do not store any sensitive information in this app!
1. To add a new track click the Start button in the bottom left hand corner and navigate to Library. Click the "Add Track" button and fill out the forms as directed. Once filled, click "Add Track" and it will automatically redirect you back to the Library page with the newly added track. 
1. From here you can listen to the track via the Spotify play button.
1. If you wish to remove a track from the library, simply press the "X" button in the top right corner of the selected track.
1. To view the details of a given track, press the "Details" button. This will automatically redirect you to a larger singular view of a track that will display with a larger Spotify button as well as any information that was added when the track was created. From here you can press the "Edit" button to edit the descriptive elements. Saving will redirect back to the track details page. You can also navigate to the Library or Playlist view directly from the track window.
1. If you want to organize your library of songs based on color click the "Playlist" button to be directed to the Playlist page. From here, click on a color to display only those tracks.
Delete works the same here as on the Library page.
1. When you're done, click "Start', then "Logout".

## Planning
* [ERD](https://dbdiagram.io/d/5f188be01e6ca02dc1a44345)
* [Wireframe](https://sketchboard.me/rCe0AMHXqCea#/)

## Technologies Used: 
[React](https://reactjs.org/)
[React Bootstrap](https://react-bootstrap.github.io/)
JavaScript
CSS





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
