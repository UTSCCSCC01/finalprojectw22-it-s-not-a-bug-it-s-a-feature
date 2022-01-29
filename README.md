# Heading:
[PLACEHOLDER NAME]

## Motivation:

We seek to provide a safer, more efficient and more user friendly entertainment platform for both content creators. Our product not only serves as a way for users to watch the streams of their favorite content creators and influencers, but it also builds upon that with a dedicated social media functionality. Now the user can not only interact with their favorite streamer, they can also talk to other fans and build a great community. All of this takes place within one platform and as one package.

On the other hand our product eliminates the need for creators to divide their communities across different platforms and can grow in place under the umbrella of the amazing functionalities our product seeks to offer.

Our mission is to create a safe and friendly environment for users of all background to interact and watch whatever content they please to.

## Installation:
This is a full stack project. The backend is set to the Django framework, frontend is set to React.js and we use MySQL as database.

### Frontend
The Front end has been set to Node.js. If you do not plan on making changes to the script, feel free to move on to the next step. However, in the chance that you do plan on making changes, the following is necessary.
- Node.js needs to be installed locally on your computer
- in the case that your Node.js is outdated, ** make sure to update both Node and npm **. you can find your version of these apps by simply typing into the command the following
node -v
npm -v

Given the above is true, after all the changes are made and saved simply type into the command while you are in the directory of the frontend files

npm run build


At this point your build of the front end has successfully been built and you may move on to backend Installation

### backend
The backend of this fullstack project has been set to Django. Before proceeding to running the server, there are a few steps we need to take.

- Firstly, run the environment folder provided in the files. You can do so by simply typing in:
Enviornments\project_env\Scripts\activate.bat
And with that done, you are in the virtual environment. Afterwards, please navigate to the main_project folder. In here there exists a requirements.txt file that includes all the packages you are going to need moving forward. Please install these packages with the following command
pip install -r requirements.txt

- You are now ready to move on to running the server. *IT IS CRITICAL THAT YOU HAVE PYTHON INSTALLED FOR THE NEXT PART*. While in the main_project folder simply write the following command:
python manage.py runserver

*ATTENTION: please undestand that before running the server you need to change the directory of the static HTML, CSS and other fils in the settings.py within the folder names main_project to the correct directory within your own computer*

congratulations, you are now running a build of our product.


## Contribution
- We do use gitflow. And the branches are named after the implementation they are focused on.
- We use Github as our ticketing website
- We do use pull requests











































Purpose: This site is created as an ease of access to content creators and consumers and allowing them to communicate with each other easier. The content creators (streamers) are able to create links to their social media pages and make updates through their posts. The content consumers (watchers) can find their favorite and suitable content and communicate with each other through streams. The platform also allows the streamers and the watchers to communicate with each other through stream chat as well. This is created as a streaming site but with a built-in social media platform. Our objective is to build a streaming platform that includes a built-in social media which allows more effective and convenient communication and interaction between streamers and their community, without the need to leave the platform. The built-in social media would have both posting and direct messaging functionalities.


Installation:
Contribution: Merge branch 'main' of
https://github.com/UTSCCSCC01/finalprojectw22-it-s-not-a-bug-it-s-a-feature
Currently we don’t use Git Flow, Github issues or pull requests.
