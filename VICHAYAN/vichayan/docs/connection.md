====================================================================================================
SEND REQUEST TO USER
**URL** : `dev/api/v1/connection/send/{userId}`

**Method** : `GET`

**Header** : `application/json`

**Auth required** : YES

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "message": "Connection already exist",
    "success": false,
    "response": {}
}
```
====================================================================================================
ACCEPT REQUEST OF USER

**URL** : `dev/api/v1/connection/accept/{connectionId}`

**Method** : `GET`

**Header** : `application/json`

**Auth required** : YES

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "message": "Connection already exist",
    "success": false,
    "response": {}
}
```
====================================================================================================

GET ALL CONNECTIONS

**URL** : `dev/api/v1/connection/{userId}`

**Method** : `GET`

**Header** : `application/json`

**Auth required** : YES

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "message": "1 connections found",
    "success": true,
    "response": [
        {
            "_id": "613090a93b4deb60742870be",
            "user1": {
                "isEmailVerified": false,
                "isVerified": false,
                "otp": -1,
                "skills": [],
                "languages": [],
                "sequence": 9,
                "_id": "61308dc46f905d4d4c757f5f",
                "name": "Test 1",
                "email": "test1@gmail.com",
                "password": "$2a$15$pgAS..7OUFtJUGCfO3JUOuBVZveHf5J1/guBYgtK/44iQDQa4jre.",
                "isThirdPartyUser": false,
                "phoneNumber": 9415332242,
                "createdAt": "2021-09-02T08:39:32.555Z",
                "__v": 0
            },
            "user2": {
                "isEmailVerified": false,
                "isVerified": false,
                "otp": -1,
                "skills": [
                    "Backend Developer",
                    "Deveops"
                ],
                "languages": [
                    "C",
                    "Python",
                    "Javascript"
                ],
                "sequence": 6,
                "_id": "61308c176f905d4d4c757f5c",
                "name": "Test 5",
                "email": "test5@gmail.com",
                "password": "$2a$15$JScjExccBhfag597.01ToORrp3g/q/NSKJ/YYz5Cz1ht.Sfuaf80u",
                "isThirdPartyUser": false,
                "phoneNumber": 9415332242,
                "createdAt": "2021-09-02T08:32:23.366Z",
                "__v": 1
            },
            "createdAt": "2021-09-02T08:51:53.078Z",
            "__v": 0
        }
    ]
}
```
====================================================================================================

IGNORE CONNECTION

**URL** : `dev/api/v1/connection/ignore/{userId}`

**Method** : `GET`

**Header** : `application/json`

**Auth required** : YES

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "message": "Invalid Request",
    "success": false,
    "response": {}
}
```
====================================================================================================