Software - VS Code, Nodejs, Postman/Insomnia/Thunderclient/Rapidapi client, MySQL Workbench


Pre-requisite
HTML, CSS, Bootstrap
JavaScript

Front - React/Angular

Database - SQL/NoSQL - MySQL / MongoDB


HTTP - Hyper Text Transfer Protocol / SMTP-Mail / FTP-File Transfer / SSH
API - Application Programming Interface

Architecture - Monolithic, Microservices, Micro-frontend, Monorepo

Server Side Oriented - Finaly html
----Perfomance issue
----Dev Effort


Myntra Web
Myntra Ios
Myntra Android

Myntra BE - web fe, hybrid mobile app (ios fe, android fe)






REST API (JSON) - Representational State Transfer (SOAP-xml, GraphQL)
JSON - JavaScript Object Notation

GET, POST, PUT/PATCH, DELETE
Read, Create, Update, Delete


Node - 
Node-2009 - v8 engine + libuv + node built in packages

npm - node package manager

Express


Connection Flow

Front End ------------------- Back End + Database

//////////////////////////////////////////////////////////

Node-2009 - v8 engine + libuv + node built in packages
Events
HTTP - Server
file - fs
folder - fs
os
path
readline - input, output
buffer/stream - to handle/store input output data



Express - Framework based on Nodejs for mainly API Development


Nodejs - https://nodejs.org/docs/latest/api/
Expressjs - https://expressjs.com/


Day 1 - Intro, setup
Day 2 - api dev - express - express, app, req, res, router, status code
Day 3 - back end crud, sql queries - search one sample table of any project
Day 4 - jwt, bcrypt, ejs
Day 5 - git 
Day 6 - node packages




//////////////////////////////////////////////////////


express() - to create an express application


app.use() - Middleware
app.listen - to run a server on any port
app.get/post/put/delete
app.set - set engines

router.get/post/put/delete



req - it includes everything coming from FE to BE - data, headers, type, params, tokens
req.params - to read data coming in url
req.body - body data
req.query - query parameters data


res - it includes everything coming from BE to FE - data, headers, status code
res.send - to send generalised data
res.json - to send json data
res.render - to return html pages
res.status - to return status codes


cannot get/post cors - cors | route name is incorrect/ route type is incorrect


HTTP Status Codes - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
200 - api good
400 - api failed
201 - data creation successfull
401 - unauthorised
500 - server error