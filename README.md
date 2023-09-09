# Welcome to Flight Service


# project setup
 -clone repository using git clone `repository address` on your local
 -`npm install` on same path as of your root directory of downloded project
 -Create .env file in the root directory and the following environment variable 
   -`PORT=3000`
  -inside src/config folder create config.json file and add following piece of code
    {
  "development": {
    "username": <YOUR_DB_LOGIN>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Fligh_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
    }
once you've added your  db config as listed above, go to src folder from your terminal and execute `npx sequilize db:create`
     
  