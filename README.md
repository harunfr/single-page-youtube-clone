# YouTube Single Page Clone

This application can be seen [Live](https://harunfr.github.io/single-page-youtube-clone/).

This project bootstrapped with create-react-app

### What did I learned:
* Using styled components as a css in js solution in a reusable way.
* Configuring and installing Prettier, ESLint, Husky for formatting, linting and preventing bad styled codes to reach repository.

### What did I use to implement this app:

* I used [YouTube api](https://developers.google.com/youtube/v3/getting-started) to get related comments and videos.

* I found button with ripple effect similar to subscribe as expected at mui.


### These updates is still needed to improve appearance and functionality of page:
* Favicon.ico needs to be changed to a suitable one.
* Links should be added to channel and video names.
* Uploader profile picture and name, also video datas like name like amount -
can be fetched instead of hard coded values.
* Comments can be fetched sorted by popularity.
* Cursor shape can be changed from default to pointer for clickable elements.
* NextPageToken can be used to fetch new comments and related videos when sliding page down.
* Light / Dark theme can be implemented.
* 'Uploaded now ago' hard-coded value should be changed to actual value.

How to run this project ?

### `yarn start || npm start`
Runs the app in the development mode.

Open http://localhost:3000 to view it in your browser.

One liner to see the project live in development mode and view codes at the same time:
### `git clone git@github.com:harunfr/single-page-youtube-clone.git && cd single-page-youtube-clone/ && code . && yarn &&  yarn start`
