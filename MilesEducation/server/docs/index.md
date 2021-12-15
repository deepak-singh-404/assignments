====================================================================================================
`ADD CUSTOMER`
**URL** : `/dev/api/v1/customer`

**Method** : `POST`

**Header** : `application/json`

**Auth required** : None

**Permissions required** : None

## Request Body 

```json
{
    "name":"Shivangi Singh",
    "email":"shivamgisingh@gmail.com",
    "mobileNumber":7080363723
}
```
## Success Response 

**Code** : `201`

**Response**

```json
{
    "success": true,
    "message": "New customer added successfully",
    "response": {
        "name":"Shivangi Singh",
        "email":"shivamgisingh@gmail.com",
        "mobileNumber":7080363723,
        "_id": "6161d4738246da0da89b68ad",
        "createdAt": "2021-10-09T17:42:11.934Z",
        "__v": 0
    }
}
```

====================================================================================================
`ADD PRODUCT`
**URL** : `/dev/api/v1/product`

**Method** : `POST`

**Header** : `application/json`

**Auth required** : None

**Permissions required** : None

## Request Body 

```json
{
    "productName":"Towel",
    "status":"available"
}
```
## Success Response 

**Code** : `201`

**Response**

```json
{
    "success": false,
    "message": "New Product added successfully",
    "response": {
        "productName": "Towel",
        "status": "available",
        "_id": "6161d4b98246da0da89b68b0",
        "createdAt": "2021-10-09T17:43:21.784Z",
        "__v": 0
    }
}
```


====================================================================================================
`LIKE PRODUCT`
**URL** : `/dev/api/v1/product/${productId}/${customerId}`

**Method** : `GET`

**Auth required** : None

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "Product liked successfully",
    "response": {
        "productId": "6161d4b98246da0da89b68b0",
        "customerId": "6161d4738246da0da89b68ad",
        "_id": "6161d56c8246da0da89b68b3",
        "createdAt": "2021-10-09T17:46:20.420Z",
        "__v": 0
    }
}
```

====================================================================================================`GET PRODUCTS`
**URL** : `/dev/api/v1/product?productId=["6161a7ad9d66151ed8c5ced3","6161a7d39d66151ed8c5cee2"]`

**Method** : `GET`

**Header** : `application/json`

**Auth required** : None

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "response": [
        {
            "product": {
                "_id": "6161a7d39d66151ed8c5cee2",
                "productName": "Phone",
                "status": "available",
                "createdAt": "2021-10-09T14:31:47.007Z",
                "__v": 0
            },
            "customer": [
                {
                    "_id": "6161a7569d66151ed8c5cec6",
                    "name": "Shivangi Singh",
                    "email": "shivamgisingh@gmail.com",
                    "mobileNumber": 7080363723,
                    "createdAt": "2021-10-09T14:29:42.362Z",
                    "__v": 0
                },
                {
                    "_id": "6161a76b9d66151ed8c5cec9",
                    "name": "Deepak Singh",
                    "email": "web.dev.deepaksingh@gmail.com",
                    "mobileNumber": 9415332242,
                    "createdAt": "2021-10-09T14:30:03.469Z",
                    "__v": 0
                },
                {
                    "_id": "6161a79f9d66151ed8c5cecc",
                    "name": "Pushkar Singh",
                    "email": "pushkarsingh@gmail.com",
                    "mobileNumber": 9884320198,
                    "createdAt": "2021-10-09T14:30:55.455Z",
                    "__v": 0
                }
            ]
        },
        {
            "product": {
                "_id": "6161a7ad9d66151ed8c5ced3",
                "productName": "Bed",
                "status": "available",
                "createdAt": "2021-10-09T14:31:09.916Z",
                "__v": 0
            },
            "customer": [
                {
                    "_id": "6161a79f9d66151ed8c5cecc",
                    "name": "Pushkar Singh",
                    "email": "pushkarsingh@gmail.com",
                    "mobileNumber": 9884320198,
                    "createdAt": "2021-10-09T14:30:55.455Z",
                    "__v": 0
                }
            ]
        }
    ]
}
```
