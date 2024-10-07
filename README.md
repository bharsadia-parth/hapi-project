HAPI USER CRUD OPERATION PROJECT

To run this project, you need to create an .env file

PORT=8082

MYSQL_USERNAME=username

MYSQL_HOST=host

MYSQL_PORT=3306

MYSQL_PASSWORD=mysql-user-password


Features:

CREATE - Create user.

UPDATE - Update user.

READ - Read user.

DELETE - Delete user.


Method    	Endpoint	    Description

POST	    /user    Create a new user

GET       /user/:id	Get a specific user

GET       /user?limit=10&offset=0  Get list of users (limit & offset are optional; Default limit = 10 and offset = 0)

PUT	      /user/:id	Update an existing user

DELETE	  /user/:id	Delete an user
