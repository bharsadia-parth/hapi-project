HAPI USER CRUD OPERATION PROJECT

-----------------------------
STEPS TO SETUP
-----------------------------
1. Install Dependency
```
npm install
```

3. To run this project, you need to create an .env file

```
PORT=8082
MYSQL_USERNAME=username
MYSQL_HOST=host
MYSQL_PORT=3306
MYSQL_PASSWORD=mysql-user-password
```

3. Start Project
```
npm run start
```

-----------------------------
FEATURES
-----------------------------

CREATE - Create user.

UPDATE - Update user.

READ - Read user.

DELETE - Delete user.

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | /user | Create a new user |
| GET | /user/:id| Get a specific user |
| GET | /user?limit=10&offset=0 |  Get list of users (limit & offset are optional; Default limit = 10 and offset = 0) |
| PUT	 | /user/:id	| Update an existing user |
| DELETE | /user/:id	| Delete an user |


User Model

| Method | Type | Nullable | Description |
|--------|----------|----------| ----------- |
| fname | String | false | First Name of user |
| lname | String | false | Last Name of user |
| email | String | false | Email Id of user |
| mobile | String | false | Mobile number of user |
| password | String | false | Secret Character combination for verifying user identity |

---------------------------------
STEPS TO START DOCKER CONTAINER
--------------------------------

1. Build Docker image
   ```
   docker build -t <image-name> .
   ```

3. Start Docker container
   ```
   docker run --env-file </path-to-.env-file> -p 8082:8082 <you can use PORT specified in .env file> <image-name>
   ```
