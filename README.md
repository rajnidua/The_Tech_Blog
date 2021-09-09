# The_Tech_Blog

A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

# Installations & Dependencies

```md
npm install
npm install sequelize
npm init -y
npm install express --save
npm install dotenv
npm install mysql2
npm install express-handlebars
npm install bcrypt
npm install express-session
npm install connect-session-sequelize
```

Routes

```md
get route for login(homeRoutes.js)
http://localhost:3001/login

get route to view complete profile of logged in(homeRoutes.js)
http://localhost:3001/Profile

post route for logging in(UserRoutes.js)
http://localhost:3001/api/users/login
Body(JSON)
{
"email": "lernantino@gmail.com",
"password": "password12345"
}

post route for new user (userRoutes.js)
http://localhost:3001/api/users/
Bosy(JSON)
{
"fname":"new",
"lname":"user1",
"email": "newuser@gmail.com",
"password": "password12345"
}

get request for all blogpost(homeRoutes.js)
http://localhost:3001/

get request for a single blogpost (homeRoutes.js)
http://localhost:3001/Blogpost/2
('2' is the blogpost id)

post request for blogpost (blogPostRoutes.js)
http://localhost:3001/api/blogpost
BODY(JSON)
{
"title": "The Ultimate Tech Quiz",
"content": "A web app that will give users 10 new technical questions each day and track their progress in things like programming, cybersecurity, database architecture, and more!"

}

delete request for blogpost(blogPostRoutes.js)
http://localhost:3001/api/blogpost/:id
```
