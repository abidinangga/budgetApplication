# Budget Application

Budget Application server

Budget Application is an application to manage your Balance Budget. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

- "POST /register"
- "POST /login"
- "GET /categories"
- "GET /categories/:id"
- "POST /categories"
- "PUT /categories/:id"
- "DELETE /categories/:id"
- "GET /products"
- "GET /products/:id"
- "POST /products"
- "PUT /products/:id"
- "DELETE /products/:id"

---

## post /register

> register user

_Request Header_

```
  not needed
```

_Request Body_

```
{
  "username": "<user username to get insert into>",
  "email": "<user email to get insert into>",
  "password": "<user password to get insert into>
}
```

_Response (201 - Created)_

```
{
  "id": <given id by the system>,
  "username": "<user username>",
  "email": "<user email>",
}
```

_Response (400 - Bad Request)_

```
{
  "message": "validation required"
}
```

_Response (500 - Internal server error)_

```
{
  "message": "Internal server error"
}
```

## POST /login

> login user
> _Request Header_

```
  not needed
```

_Request Body_

```
{
  "email": "<user email to log in to>",
  "password": "<user password to log in to>",
}
```

_Response (200 - Ok!)_

```
{
  "access_token": <access_token>,
}
```

_Response (401 - Invalid credentials)_

```
{
  "message": "Email or Password wrong"
}
```

_Response (500 - Internal server error)_

```
{
  "message": "Internal server error"
}
```

### GET /category

> Get all category

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
  {
    "id": 1,
    "categoryType": "Gaji",
    "categoryTransactionId": 1,
    "createdAt": "2022-05-28T07:03:36.127Z",
    "updatedAt": "2022-05-28T07:03:36.127Z",
    "CategoryTransaction": {
          "id": 1,
          "categoryTransaction": "Pemasukan",
          "createdAt": "2022-05-28T07:03:36.111Z",
          "updatedAt": "2022-05-28T07:03:36.111Z"
      }
  },
  {
    "id": 2,
    "categoryType": "Investasi",
    "categoryTransactionId": 1,
    "createdAt": "2022-05-28T07:03:36.127Z",
    "updatedAt": "2022-05-28T07:03:36.127Z",
    "CategoryTransaction": {
        "id": 1,
        "categoryTransaction": "Pemasukan",
        "createdAt": "2022-05-28T07:03:36.111Z",
        "updatedAt": "2022-05-28T07:03:36.111Z"
    }
  },
]
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### GET /transaction

> Get all transaction

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
    {
        "id": 1,
        "transactionAmount": 100000,
        "description": "gaji",
        "userId": 1,
        "categoryTransactionId": 1,
        "categoryTypeId": 1,
        "date": "31-01-2022",
        "createdAt": "2022-05-28T07:39:25.768Z",
        "updatedAt": "2022-05-28T07:39:25.768Z",
        "CategoryTransaction": {
            "id": 1,
            "categoryTransaction": "Pemasukan",
            "createdAt": "2022-05-28T07:03:36.111Z",
            "updatedAt": "2022-05-28T07:03:36.111Z"
        },
        "CategoryType": {
            "id": 1,
            "categoryType": "Gaji",
            "categoryTransactionId": 1,
            "createdAt": "2022-05-28T07:03:36.127Z",
            "updatedAt": "2022-05-28T07:03:36.127Z"
        }
    }
]
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

### POST /transaction

> Create new transaction

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
  "transactionAmount": "<transaction Amount to get insert into>",
  "description": "<transaction description to get insert into>",
  "categoryTransactionId": "<transaction categoryTransactionId to get insert into >",
  "categoryTypeId": "<transaction categoryTypeId to get insert into >",
  "date": "<transaction date to get insert into >"
}
```

_Response (201 - Created)_

```
{
    "statusCode": 201,
    "data": {
        "transactionAmount": 100000,
        "description": "gaji",
        "userId": 1,
        "categoryTransactionId": 1,
        "categoryTypeId": 1,
        "date": "31-01-2022"
    }
}
```

_Response (400 - Bad Request)_

```
{
  "message": "Bad Request"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

### GET /transaction/income

> Get all income

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
10000000
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

### GET /transaction/expense

> Get all expense

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
10000000
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

### GET /transaction/total

> Get all total

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
10000000
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

### GET /transaction/:id

> Get transaction by id

_URL Params_

Required:

```
id=[integer]

```

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "id": 1,
    "transactionAmount": 100000,
    "description": "gaji",
    "userId": 1,
    "categoryTransactionId": 1,
    "categoryTypeId": 1,
    "date": "31-01-2022",
    "createdAt": "2022-05-28T07:39:25.768Z",
    "updatedAt": "2022-05-28T07:39:25.768Z",
    "CategoryTransaction": {
        "id": 1,
        "categoryTransaction": "Pemasukan",
        "createdAt": "2022-05-28T07:03:36.111Z",
        "updatedAt": "2022-05-28T07:03:36.111Z"
    },
    "CategoryType": {
        "id": 1,
        "categoryType": "Gaji",
        "categoryTransactionId": 1,
        "createdAt": "2022-05-28T07:03:36.127Z",
        "updatedAt": "2022-05-28T07:03:36.127Z"
    }
}
```

_Response (404 - Data Not Found)_

```
{
  "message": "transaction not Found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

### PUT /transaction/:id

> update transaction by Id

_URL Params_

Required:

```
id=[integer]

```

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
  "transactionAmount": "<transaction Amount to get update into>",
  "description": "<transaction description to get update into>",
  "categoryTransactionId": "<transaction categoryTransactionId to get update into >",
  "categoryTypeId": "<transaction categoryTypeId to get update into >",
  "date": "<transaction date to get update into >"
}
```

_Response (200)_

```
{
  "message": "succes edit transaction"
}
```

_Response (400 - Bad Request)_

```
{
  "message": "Bad Request"
}
```

_Response (404 - Not Found)_

```
{
  "message": "transaction not Found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

### DELETE /transaction/:id

> Delete products by Id

_URL Params_

Required:

```
id=[integer]

```

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200-OK!)_

```
{
  "message": "succes delete transaction"
}
```

_Response (404 - Not Found)_

```
{
  "message": "transaction Not Found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```
