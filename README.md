# Find A Meeting

"Find A Meeting" is a supremely user-friendly app that allows a user to easily navigate the page to find an AA meeting nearby and add a new meeting if the user is wanting to create one.

# Dependencies  
   "bcryptjs": "^2.4.3",
   "body-parser": "^1.18.2",
   "cors": "^2.8.4",
   "dotenv": "^4.0.0",
   "express": "^4.16.2",
   "jwt-simple": "^0.5.1",
   "moment": "^2.19.1",
   "pg": "^7.3.0",
   "sequelize": "^4.15.0"

 # DevDependencies
    "mocha": "^4.0.1",
    "chai": "^4.1.2",
    "chai-http": "^3.0.0"

# How to run:

1. Clone the repo into desired location
2. Go to https://github.com/bshunk/FindAMeeting_AngularJS and clone my frontend repo.
3. In the command line, run ```npm install```
4. Next, run ```sequelize db:migrate:undo:all```, ```sequelize db:migrate```, ```sequelize db:seed:all```, ```npm start```
5. Once the above commands are run, and the front end repo has been cloned and its directions followed, you now are able to use Find A Meeting!


# Future versions:

1. Add all Alcoholics Anonymous, Narcotics Anonymous, Adult Children of Alcoholics, and Al-Anon meetings in middle Tennesse to the database, which will allow the user to find any meeting they are in need of.
2. Convert the back end into Mongo, and then deploy API
3. Future versions hope to have every meeting in the United states added to the database so that if anyone, anywhere needs a meeting- all they have to do is download "Find A Meeting"
