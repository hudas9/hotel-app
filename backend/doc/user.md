# User API Spec

## Register User API

Endpoint : POST /api/users/register

Request Body :

```json
{
  "first_name": "Gamelab",
  "last_name": "Indonesia",
  "email": "gamelab@gamelab.id",
  "gender": "Male",
  "password": "rahasia"
}
```

Response Body Success (Status Code: 201 Created) :

```json
{
  "data": {
    "first_name": "Gamelab",
    "last_name": "Indonesia",
    "gender": "Male",
    "email": "gamelab@gamelab.id"
  }
}
```

Response Body Error (Status Code: 400 Bad Request) :

```json
{
  "error": "Email already registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "email": "gamelab@gamelab.id",
  "password": "rahasia"
}
```

Response Body Success (Status Code: 200 OK) :

```json
{
  "data": {
    "token": "jwt-token"
  }
}
```

Response Body Error (Status Code: 401 Unauthorized) :

```json
{
  "errors": "Email or password wrong"
}
```

## Update User API

Endpoint : PATCH /api/users/current

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "Educa", // optional
  "last_name": "Sisfomedia", //optional
  "gender": "Male", // optional
  "email": "educa@gamelab.id", // optional
  "password": "newpassword" // optional
}
```

Response Body Success (Status Code: 200 OK) :

```json
{
  "data": {
    "first_name": "Educa",
    "last_name": "Sisfomedia",
    "gender": "Male",
    "email": "educa@gamelab.id"
  }
}
```

Response Body Error (Status Code: 401 Unauthorized) :

```json
{
  "errors": "Unauthorized"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body Success (Status Code: 200 OK):

```json
{
  "data": {
    "first_name": "Gamelab",
    "last_name": "Indonesia",
    "gender": "Male",
    "email": "gamelab@gamelab.id"
  }
}
```

Response Body Error (Status Code: 401 Unauhtorized) :

```json
{
  "errors": "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :

- Authorization : token

Response Body Success (Status Code: 200 OK) :

```json
{
  "message": "Successfully logged out"
}
```

Response Body Error (Status Code: 401 Unauthorized) :

```json
{
  "errors": "Unauthorized"
}
```

## Delete User API

Endpoint : DELETE /api/users/

### Forgot Password User API

Endpoint : POST /api/users/forgot-password

Request Body :

```json
{
  "email": "gamelab@gamelab.id"
}
```

Response Body Success (Status Code: 200 OK) :

```json
{
  "message": "Password reset link sent"
}
```

Response Body Error (Status Code: 404 Not Found) :

```json
{
  "errors": "Email not found"
}
```
