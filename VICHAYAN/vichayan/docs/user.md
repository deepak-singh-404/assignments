===============================================================================================================
**URL** : `/dev/api/v1/user/register`

**Method** : `POST`

**Header** : `application/json`

**Auth required** : None

**Permissions required** : None

## Request Body 

```json
{
    "name":"Piyush Singh",
    "email":"piyush.singh@gmail.com",
    "phoneNumber":9415332241,
    "password":"piyush",
    "isThirdPartyUser":false
}
```
## Success Response 

**Code** : `200`

**Response**

```json
{
    "message": "User registerd successfully, kindly login",
    "success": true,
    "response": {
        "isVerified": false,
        "otp": -1,
        "skills": [],
        "languages": [],
        "sequence": 1,
        "_id": "61251316400b7e46ccbf9cf7",
        "name": "Piyush Singh",
        "email": "piyush.singh@gmail.com",
        "password": "$2a$15$eDsKgT5/BspL6lTHKz3N6eKcQW7/3.E2OsfjCe9hvRiPvH1mSRkIG",
        "isThirdPartyUser": false,
        "phoneNumber": 9415332241,
        "createdAt": "2021-08-24T15:41:10.051Z",
        "__v": 0
    }
}
```

===================================================================================================================

**URL** : `dev/api/v1/user/login`

**Method** : `POST`

**Header** : `application/json`

**Auth required** : None

**Permissions required** : None

## Request Body 

```json
{
    "email":"web.dev.deepaksingh@gmail.com",
    "password":"deepak"
}
```
## Success Response 

**Code** : `200`

**Response**

```json
{
    "message": "User logged in successfully",
    "success": true,
    "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTI0ZmVhZjgwNzY4ZTIyYTAzNmM1NjAiLCJuYW1lIjoiRGVlcGFrIFNpbmdoIiwicGhvbmVOdW1iZXIiOjk0MTUzMzIyNDIsImVtYWlsIjoid2ViLmRldi5kZWVwYWtzaW5naEBnbWFpbC5jb20iLCJpYXQiOjE2Mjk4MTcxMTYsImV4cCI6MTYyOTgyNDMxNn0.Oe-jnMSnUP7jAQVrEy2V9L0jmLyzaAc9-HlCOccbCL0"
}
```
===================================================================================================================

**URL** : `dev/api/v1/user/sendOTP`

**Method** : `POST`

**Header** : `application/json`

**Auth required** : None

**Permissions required** : None

## Request Body 

```json
{
    "email":"web.dev.deepaksingh@gmail.com",
}
```
## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "OTP has been sent to email, it will be only valid for 5 minutes"
}
```
===================================================================================================================

**URL** : `dev/api/v1/user/verifyOTP`

**Method** : `POST`

**Header** : `application/json`

**Auth required** : None

**Permissions required** : None

## Request Body 

```json
{
    "email":"deepakshivam1998@gmail.com",
    "otp":606379,
    "newPassword":"shivam"
}
```
## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "Password has been change successfully",
    "response": {
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
        "sequence": 0,
        "_id": "6124feaf80768e22a036c560",
        "name": "Deepak Singh",
        "email": "web.dev.deepaksingh@gmail.com",
        "password": "$2a$10$IXukD2dSuTQ4LZ4wMsx70uQhj7EgTfp6RTrXVES9YBS5Wi7D5bSoe",
        "isThirdPartyUser": false,
        "phoneNumber": 9415332242,
        "createdAt": "2021-08-24T14:14:07.646Z",
        "__v": 1
    }
}
```
===================================================================================================================

**URL** : `/dev/api/v1/user/profilePicture`

**Method** : `PUT`

**Header** : `form-data`

**Auth required** : Yes

**Permissions required** : None

## Request Body 

```form-data
profilePicture: selectFile
```
## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "Profile picture updated successfully",
    "response": {
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
        "sequence": 0,
        "_id": "6124feaf80768e22a036c560",
        "name": "Deepak Singh",
        "email": "web.dev.deepaksingh@gmail.com",
        "password": "$2a$10$IXukD2dSuTQ4LZ4wMsx70uQhj7EgTfp6RTrXVES9YBS5Wi7D5bSoe",
        "isThirdPartyUser": false,
        "phoneNumber": 9415332242,
        "createdAt": "2021-08-24T14:14:07.646Z",
        "__v": 1,
        "profilePicture": {
            "originalname": "Screenshot (1).png",
            "url": "https://up53bu2083.s3.amazonaws.com/1629821231640?AWSAccessKeyId=AKIAUUTLTHNCZTUAOTH3&Expires=1629822134&Signature=PHdCQLHALOOq8Skf87s%2Fs38Vd7A%3D",
            "key": "1629821231640"
        }
    }
}
```
===================================================================================================================

**URL** : `dev/api/v1/user/backgroundPicture`

**Method** : `PUT`

**Header** : `application/json`

**Auth required** : YES

**Permissions required** : None

## Request Body 

```form-data
backgroundPicture: select-file
```
## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "Profile picture updated successfully",
    "response": {
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
        "sequence": 0,
        "_id": "6124feaf80768e22a036c560",
        "name": "Deepak Singh",
        "email": "web.dev.deepaksingh@gmail.com",
        "password": "$2a$10$IXukD2dSuTQ4LZ4wMsx70uQhj7EgTfp6RTrXVES9YBS5Wi7D5bSoe",
        "isThirdPartyUser": false,
        "phoneNumber": 9415332242,
        "createdAt": "2021-08-24T14:14:07.646Z",
        "__v": 1,
        "profilePicture": {
            "originalname": "Screenshot (1).png",
            "url": "https://up53bu2083.s3.amazonaws.com/1629821231640?AWSAccessKeyId=AKIAUUTLTHNCZTUAOTH3&Expires=1629822134&Signature=PHdCQLHALOOq8Skf87s%2Fs38Vd7A%3D",
            "key": "1629821231640"
        }
    }
}
```
===================================================================================================================

**URL** : `dev/api/v1/user/${userId}`

**Method** : `Get`

**Header** : `application/json`

**Auth required** : Yes

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "User found",
    "response": {
        "isVerified": false,
        "otp": 309773,
        "skills": [
            "Backend Developer",
            "Deveops"
        ],
        "languages": [
            "C",
            "Python",
            "Javascript"
        ],
        "_id": "6124feaf80768e22a036c560",
        "name": "Deepak Singh",
        "email": "web.dev.deepaksingh@gmail.com",
        "password": "$2a$15$1vjmhjBN.8Je2YAu7tATS.6XnkYii/XzByHeK0WIOt4NPsyVBMXTO",
        "isThirdPartyUser": false,
        "phoneNumber": 9415332242,
        "createdAt": "2021-08-24T14:14:07.646Z",
        "__v": 1
    }
}
```
===================================================================================================================

**URL** : `dev/api/v1/user`

**Method** : `PUT`

**Header** : `application/json`

**Auth required** : Yes

**Permissions required** : None

## Request Body 

```json
{
    "skills":["Backend Developer", "Deveops"],
    "languages":["C","Python", "Javascript"]
}
```
## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "User updated successfully",
    "response": {
        "isVerified": false,
        "otp": 309773,
        "skills": [
            "Backend Developer",
            "Deveops"
        ],
        "languages": [
            "C",
            "Python",
            "Javascript"
        ],
        "_id": "6124feaf80768e22a036c560",
        "name": "Deepak Singh",
        "email": "web.dev.deepaksingh@gmail.com",
        "password": "$2a$15$1vjmhjBN.8Je2YAu7tATS.6XnkYii/XzByHeK0WIOt4NPsyVBMXTO",
        "isThirdPartyUser": false,
        "phoneNumber": 9415332242,
        "createdAt": "2021-08-24T14:14:07.646Z",
        "__v": 1
    }
}
```
===================================================================================================================
