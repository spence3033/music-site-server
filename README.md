# Overview

In this, I created a simple start of a website with a server. There isn't a lot of interaction but I plan to further work on this until I can use it for a future time to help music teachers.

The code for the website is found at https://github.com/spence3033/Music-App.git. I made a different angular project with the server. When the server is pulled up in vscode, you run "node app.js". That will start it running.
Then to run the Web App you'll open the angular project on vscode and run "ng serve --proxy-config proxy.conf.json".

I wrote this software to learn how to work with a node.js server and to learn how to work with a firebase database.

[Software Demo Video](https://youtu.be/5vkkPOQtyxw)

# Cloud Database

I'm using a firebase database.

I'm using a collection called "Access". This holds documents that contain {username: "", password: ""}.

# Development Environment

I used node.js. I already had a server created. But I had to add to the server to connect it to the database.
I also developed more of the website in Angular. I wanted to see the server continue to communicate with the main webpage because the users will not see the server, they will be interacting with a webpage.

I used a library called 'firebase-admin' I think. Because after using my key credentials to access the database I could then start working with the database.

# Useful Websites

* [Youtube - Getting Started with Cloud Firestore with Node.js](https://youtu.be/5vkkPOQtyxw)

# Future Work

* I have more things I want to do with the database. But I focused just on login credentials and getting that to work. But eventually I want to store assignments and lists of teaching materials in the database.
