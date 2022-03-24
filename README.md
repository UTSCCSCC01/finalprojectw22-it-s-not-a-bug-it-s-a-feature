

## Motivation:

We seek to provide a safer, more efficient and more user friendly entertainment platform for both content creators. Our product not only serves as a way for users to watch the streams of their favorite content creators and influencers, but it also builds upon that with a dedicated social media functionality. Now the user can not only interact with their favorite streamer, they can also talk to other fans and build a great community. All of this takes place within one platform and as one package.

On the other hand our product eliminates the need for creators to divide their communities across different platforms and can grow in place under the umbrella of the amazing functionalities our product seeks to offer.

Our mission is to create a safe and friendly environment for users of all background to interact and watch whatever content they please to.

## Installation:
This is a full stack project. The backend is set to the Django framework, frontend is set to React.js and we use MySQL as database. Please follow the following instructions from the top to bottom as they are written in order.


### backend
The backend of this fullstack project has been set to Node.js. Before proceeding to running the server, there are a few steps we need to take.

- Firstly, ffmpeg is vital to running the video server. You can use the link below as a guide to install it on Windows. Users on Mac and Linux should already have ffmpeg installed.
https://www.youtube.com/watch?v=r1AtmY-RMyQ&start=10

- Once ffmpeg is installed, change the installation path in backend/livestream/backend/config/default.js to your machine's installation path for ffmpeg. 
- once in the local livestream folder, run "npm run watch" to run the webpack
- then run "npm run start to run the server"


### Frontend
The Front end has been set to Node.js. If you do not plan on making changes to the script, feel free to move on to the next step. However, in the chance that you do plan on making changes, the following is necessary.
- Node.js needs to be installed locally on your computer
- in the case that your Node.js is outdated, ** make sure to update both Node and npm **. you can find your version of these apps by simply typing into the command the following
node -v
npm -v

Given the above is true, after all the changes are made and saved simply type into the command while you are in the directory of the frontend files

npm install

npm run build


At this point your build of the front end has successfully been built.
To run the front end, use the command:

npm start


congratulations, you are now running a build of our product.


## Contribution
- We do use gitflow. And the branches are named after the implementation they are focused on.
- We use Github as our ticketing website
- We do use pull requests




