===============================================================================================================
**URL** : `/dev/api/v1/education`

**Method** : `POST`

**Header** : `application/json`

**Auth required** : YES

**Permissions required** : None

## Request Body 

```json
{
    "school": "Naval's Academy",
    "degree": "12th",
    "userName": "Deepak Singh",
    "fieldOfStudy": "PCM",
    "grade": "76.%",
    "startDate": "2014-06-06",
    "endDate": "2015-06-06",
    "isPresent": false,
    "description": "Test"
}
```
## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "Education added successfully",
    "response": {
        "isPresent": false,
        "_id": "61250b9235c2511b0c1579ec",
        "school": "Naval's Academy",
        "degree": "12th",
        "fieldOfStudy": "PCM",
        "grade": "76.%",
        "startDate": "2014-06-06T00:00:00.000Z",
        "endDate": "2015-06-06T00:00:00.000Z",
        "userName": "Deepak Singh",
        "description": "Test",
        "createdBy": "6124feaf80768e22a036c560",
        "createdAt": "2021-08-24T15:09:06.316Z",
        "__v": 0
    }
}
```

===============================================================================================================
**URL** : `/dev/api/v1/education`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "1 found",
    "response": [
        {
            "isPresent": false,
            "_id": "6125093435c2511b0c1579ea",
            "school": "Naval's Academy",
            "degree": "10th",
            "fieldOfStudy": "PCM",
            "grade": "89.3 %",
            "startDate": "2012-06-06T00:00:00.000Z",
            "endDate": "2013-06-06T00:00:00.000Z",
            "userName": "Deepak Singh",
            "description": "Test",
            "createdBy": "6124feaf80768e22a036c560",
            "createdAt": "2021-08-24T14:59:00.146Z",
            "__v": 0
        }
    ]
}
```

===============================================================================================================
**URL** : `/dev/api/v1/education/{educationId}`

**Method** : `PUT`

**Header** : `application/json`

**Auth required** : YES

**Permissions required** : None

## Request Body 

```json
{
    "grade": "89.3 %"
}
```
## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "education updated successfully",
    "response": {
        "isPresent": false,
        "_id": "6125093435c2511b0c1579ea",
        "school": "Naval's Academy",
        "degree": "10th",
        "fieldOfStudy": "PCM",
        "grade": "89.3 %",
        "startDate": "2012-06-06T00:00:00.000Z",
        "endDate": "2013-06-06T00:00:00.000Z",
        "userName": "Deepak Singh",
        "description": "Test",
        "createdBy": "6124feaf80768e22a036c560",
        "createdAt": "2021-08-24T14:59:00.146Z",
        "__v": 0
    }
}
```

===============================================================================================================
**URL** : `/dev/api/v1/education/{educationId}`

**Method** : `DELETE`

**Auth required** : YES

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "messsage": "education Deleted successfully",
    "response": {
        "isPresent": false,
        "_id": "6125095135c2511b0c1579eb",
        "school": "Naval's Academy",
        "degree": "12th",
        "fieldOfStudy": "PCM",
        "grade": "76.%",
        "startDate": "2014-06-06T00:00:00.000Z",
        "endDate": "2015-06-06T00:00:00.000Z",
        "userName": "Deepak Singh",
        "description": "Test",
        "createdBy": "6124feaf80768e22a036c560",
        "createdAt": "2021-08-24T14:59:29.201Z",
        "__v": 0
    }
}
```
