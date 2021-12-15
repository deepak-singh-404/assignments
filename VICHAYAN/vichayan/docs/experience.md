====================================================================================================
**URL** : `/dev/api/v1/experience`

**Method** : `POST`

**Header** : `application/json`

**Auth required** : YES

**Permissions required** : None

## Request Body 

```json
{
    "title":"Software Developer Enginner",
    "employmentType":"Full Time",
    "userName":"Shivam Singh",
    "company":"biz2credit",
    "location":{"city":"Noida", "pincode":"201305"},
    "startDate":"2021-01-04",
    "endDate":"",
    "isPresent":true,
    "description":"Mostly worked with microservices"
}
```
## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "experience created successfully",
    "response": {
        "isPresent": true,
        "_id": "6124f7d9cb543d4f3431b7a0",
        "title": "Software Developer Enginner",
        "employmentType": "Full Time",
        "company": "biz2credit",
        "location": {
            "city": "Noida",
            "pincode": "201305"
        },
        "startDate": "2021-01-04T00:00:00.000Z",
        "endDate": null,
        "userName": "Shivam Singh",
        "description": "Mostly worked with microservices",
        "createdBy": "61234cb538ff015120b5ca56",
        "createdAt": "2021-08-24T13:44:57.665Z",
        "__v": 0
    }
}
```

===============================================================================================================
**URL** : `/dev/api/v1/experience`

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
            "isPresent": true,
            "_id": "6124f7d9cb543d4f3431b7a0",
            "title": "Software Developer Enginner",
            "employmentType": "Full Time",
            "company": "biz2credit",
            "location": {
                "city": "Noida",
                "pincode": "201305"
            },
            "startDate": "2021-01-04T00:00:00.000Z",
            "endDate": null,
            "userName": "Shivam Singh",
            "description": "Mostly worked with microservices",
            "createdBy": "61234cb538ff015120b5ca56",
            "createdAt": "2021-08-24T13:44:57.665Z",
            "__v": 0
        }
    ]
}
```

===============================================================================================================
**URL** : `/dev/api/v1/experience/{expericeId}`

**Method** : `PUT`

**Header** : `application/json`

**Auth required** : YES

**Permissions required** : None

## Request Body 

```json
{
    "title":"Full Stack Developer"
}
```
## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "experience updated successfully",
    "response": {
        "isPresent": true,
        "_id": "6124f7d9cb543d4f3431b7a0",
        "title": "Software Developer Enginner",
        "employmentType": "Full Time",
        "company": "biz2credit",
        "location": {
            "city": "Noida",
            "pincode": "201305"
        },
        "startDate": "2021-01-04T00:00:00.000Z",
        "endDate": null,
        "userName": "Shivam Singh",
        "description": "Mostly worked with microservices",
        "createdBy": "61234cb538ff015120b5ca56",
        "createdAt": "2021-08-24T13:44:57.665Z",
        "__v": 0
    }
}
```

===============================================================================================================
**URL** : `/dev/api/v1/experience/{experienceId}`

**Method** : `DELETE`

**Auth required** : YES

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "messsage": "Post Deleted successfully",
    "response": {
        "isPresent": false,
        "_id": "6124f793cb543d4f3431b79f",
        "title": "Full Stack Developer",
        "employmentType": "Full Time",
        "company": "Edunomics Tech Solution",
        "location": {
            "city": "Indore",
            "pincode": "201305"
        },
        "startDate": "2020-08-01T00:00:00.000Z",
        "endDate": "2020-12-27T00:00:00.000Z",
        "userName": "Shivam Singh",
        "description": "Mostly worked with backend",
        "createdBy": "61234cb538ff015120b5ca56",
        "createdAt": "2021-08-24T13:43:47.162Z",
        "__v": 0
    }
}
```
