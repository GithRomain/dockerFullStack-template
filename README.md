# dockerFullStack-template

Fullstack template app with dependencie includes. To run in local use docker and to deploy run the bash command follow the next instructions :

## Requirements
[Create mongo account and new cluster](https://www.mongodb.com)

[Docker-Windows](https://docs.docker.com/desktop/install/windows-install/)

[Docker-Mac](https://docs.docker.com/desktop/install/mac-install/)

[Create an Heroku account](https://dashboard.heroku.com/)

### Technologies

- MongoDB API
- Vue.js / Vuex
- Node.js
- Express.js

### Deploiement on Heroku
- Heroku

# /Settings :
Connect your database :
---
    cd Backend/
    MONGOUSER="yourURL"
    MONGOPASSWORD="yourPassword"
    

Connect your heroku repository :
---
    cd deploy-init
On heroku click on new app and go to deploy and in the file replace "heroku git:remote -a 'nomApp'"


# /Local :

In the root :
---
    cd dockerFullstack-template

On every OS and everywhere to run the app in local just run (Back is runnning on port 5000 and Front on port 8081) :
---
    (docker-compose up -d) Previous version need some update do (while existing a Docker folder):
    bash connect
In your web application go to : http://localhost:8081/ to access to your front app and : http://localhost:5000/ to access to your back app

And to shut down the app in local just run : 
---
    (docker-compose down)
    bash disconnect

# /Serveur :

And to deploy the app for the fist time just run  :
---
    bash deploy-init

And to deploy the app for all the other time time just run  :
---
    bash deploy-common