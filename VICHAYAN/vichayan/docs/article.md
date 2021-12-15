===============================================================================================================
**URL** : `/dev/api/v1/article`

**Method** : `POST`

**Header** : `form-data`

**Auth required** : YES

**Permissions required** : None

## Request Body 

```form-data
text:"text",
images:select-file
```
## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "Article created successfully",
    "response": {
        "images": [
            {
                "id": "be4bd2a4-b48f-4e0e-960b-2ce0c9eb38a9",
                "originalname": "Screenshot (1).png",
                "url": "https://up53bu2083.s3.amazonaws.com/1629824151653?AWSAccessKeyId=AKIAUUTLTHNCZTUAOTH3&Expires=1629825054&Signature=RToaB6sH8QpGO31F%2BZavSGYSjxk%3D",
                "key": "1629824151653"
            }
        ],
        "link": [],
        "_id": "6125249aa030e63590c08004",
        "text": "hey man",
        "createdBy": "6124feaf80768e22a036c560",
        "createdAt": "2021-08-24T16:55:54.537Z",
        "__v": 0
    }
}
```

===============================================================================================================
**URL** : `/dev/api/v1/article`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "1 articles found",
    "response": [
        {
            "images": [
                {
                    "id": "be4bd2a4-b48f-4e0e-960b-2ce0c9eb38a9",
                    "originalname": "Screenshot (1).png",
                    "url": "https://up53bu2083.s3.amazonaws.com/1629824151653?AWSAccessKeyId=AKIAUUTLTHNCZTUAOTH3&Expires=1629825054&Signature=RToaB6sH8QpGO31F%2BZavSGYSjxk%3D",
                    "key": "1629824151653"
                }
            ],
            "link": [],
            "_id": "6125249aa030e63590c08004",
            "text": "hey man",
            "createdBy": "6124feaf80768e22a036c560",
            "createdAt": "2021-08-24T16:55:54.537Z",
            "__v": 0
        }
    ]
}
```

===============================================================================================================
**URL** : `/dev/api/v1/article/{articleId}`

**Method** : `DELETE`

**Auth required** : YES

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "Article deleted successfully",
    "response": {
        "images": [
            {
                "id": "be4bd2a4-b48f-4e0e-960b-2ce0c9eb38a9",
                "originalname": "Screenshot (1).png",
                "url": "https://up53bu2083.s3.amazonaws.com/1629824151653?AWSAccessKeyId=AKIAUUTLTHNCZTUAOTH3&Expires=1629825054&Signature=RToaB6sH8QpGO31F%2BZavSGYSjxk%3D",
                "key": "1629824151653"
            }
        ],
        "link": [],
        "_id": "6125249aa030e63590c08004",
        "text": "hey man",
        "createdBy": "6124feaf80768e22a036c560",
        "createdAt": "2021-08-24T16:55:54.537Z",
        "__v": 0
    }
}
```
