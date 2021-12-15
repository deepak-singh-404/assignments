===============================================================================================================
**URL** : `dev/api/v1/post`

**Method** : `POST`

**Header** : `form-data`

**Auth required** : YES

**Permissions required** : None

## Request Body 

```form-data
{
images: select-file,
docs: select-file,
text: "first_post"
}

```
## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "Post created successfully",
    "response": {
        "images": [
            {
                "id": "70376622-0789-4ccb-8fe1-34253f1fe051",
                "originalname": "Super Big Man Vs My Team - Rope Pulling Challenge.mp4",
                "url": "https://up53bu2083.s3.amazonaws.com/1629821691792?AWSAccessKeyId=AKIAUUTLTHNCZTUAOTH3&Expires=1629822779&Signature=b7iGt53s4PlGaguxaawNX1f9REw%3D",
                "key": "1629821691792"
            }
        ],
        "docs": [
            {
                "id": "49139256-219c-4021-ba6f-7ccb93bd868b",
                "originalname": "Yummy Yummy - Yashraj Mukhate - Dialogue With Beats.webm",
                "url": "https://up53bu2083.s3.amazonaws.com/1629821715967?AWSAccessKeyId=AKIAUUTLTHNCZTUAOTH3&Expires=1629822779&Signature=kl3GXKAaTs8nPOnAdOTj1XFzhPo%3D",
                "key": "1629821715967"
            }
        ],
        "websitesLink": [],
        "_id": "61251bb7fc0aea26e8959644",
        "text": "file to s32",
        "createdBy": "6124feaf80768e22a036c560",
        "createdAt": "2021-08-24T16:17:59.728Z",
        "__v": 0
    }
}
```

===================================================================================================================

**URL** : `dev/api/v1/post/single/${postId}`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "Post found",
    "response": {
        "images": [
            {
                "id": "70376622-0789-4ccb-8fe1-34253f1fe051",
                "originalname": "Super Big Man Vs My Team - Rope Pulling Challenge.mp4",
                "url": "https://up53bu2083.s3.amazonaws.com/1629821691792?AWSAccessKeyId=AKIAUUTLTHNCZTUAOTH3&Expires=1629822779&Signature=b7iGt53s4PlGaguxaawNX1f9REw%3D",
                "key": "1629821691792"
            }
        ],
        "docs": [
            {
                "id": "49139256-219c-4021-ba6f-7ccb93bd868b",
                "originalname": "Yummy Yummy - Yashraj Mukhate - Dialogue With Beats.webm",
                "url": "https://up53bu2083.s3.amazonaws.com/1629821715967?AWSAccessKeyId=AKIAUUTLTHNCZTUAOTH3&Expires=1629822779&Signature=kl3GXKAaTs8nPOnAdOTj1XFzhPo%3D",
                "key": "1629821715967"
            }
        ],
        "websitesLink": [],
        "_id": "61251bb7fc0aea26e8959644",
        "text": "file to s32",
        "createdBy": "6124feaf80768e22a036c560",
        "createdAt": "2021-08-24T16:17:59.728Z",
        "__v": 0
    }
}
```

===================================================================================================================

**URL** : `dev/api/v1/post`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "Post created successfully",
    "response": {
        "images": [
            {
                "id": "70376622-0789-4ccb-8fe1-34253f1fe051",
                "originalname": "Super Big Man Vs My Team - Rope Pulling Challenge.mp4",
                "url": "https://up53bu2083.s3.amazonaws.com/1629821691792?AWSAccessKeyId=AKIAUUTLTHNCZTUAOTH3&Expires=1629822779&Signature=b7iGt53s4PlGaguxaawNX1f9REw%3D",
                "key": "1629821691792"
            }
        ],
        "docs": [
            {
                "id": "49139256-219c-4021-ba6f-7ccb93bd868b",
                "originalname": "Yummy Yummy - Yashraj Mukhate - Dialogue With Beats.webm",
                "url": "https://up53bu2083.s3.amazonaws.com/1629821715967?AWSAccessKeyId=AKIAUUTLTHNCZTUAOTH3&Expires=1629822779&Signature=kl3GXKAaTs8nPOnAdOTj1XFzhPo%3D",
                "key": "1629821715967"
            }
        ],
        "websitesLink": [],
        "_id": "61251bb7fc0aea26e8959644",
        "text": "file to s32",
        "createdBy": "6124feaf80768e22a036c560",
        "createdAt": "2021-08-24T16:17:59.728Z",
        "__v": 0
    }
}
```

===================================================================================================================

**URL** : `dev/api/v1/post`

**Method** : `POST`

**Header** : `form-data`

**Auth required** : YES

**Permissions required** : None

## Request Body 

```form-data
{
images: select-file,
docs: select-file,
text: "first_post"
}

```
## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "1 found",
    "response": [
        {
            "images": [
                {
                    "id": "70376622-0789-4ccb-8fe1-34253f1fe051",
                    "originalname": "Super Big Man Vs My Team - Rope Pulling Challenge.mp4",
                    "url": "https://up53bu2083.s3.amazonaws.com/1629821691792?AWSAccessKeyId=AKIAUUTLTHNCZTUAOTH3&Expires=1629822779&Signature=b7iGt53s4PlGaguxaawNX1f9REw%3D",
                    "key": "1629821691792"
                }
            ],
            "docs": [
                {
                    "id": "49139256-219c-4021-ba6f-7ccb93bd868b",
                    "originalname": "Yummy Yummy - Yashraj Mukhate - Dialogue With Beats.webm",
                    "url": "https://up53bu2083.s3.amazonaws.com/1629821715967?AWSAccessKeyId=AKIAUUTLTHNCZTUAOTH3&Expires=1629822779&Signature=kl3GXKAaTs8nPOnAdOTj1XFzhPo%3D",
                    "key": "1629821715967"
                }
            ],
            "websitesLink": [],
            "_id": "61251bb7fc0aea26e8959644",
            "text": "file to s32",
            "createdBy": "6124feaf80768e22a036c560",
            "createdAt": "2021-08-24T16:17:59.728Z",
            "__v": 0
        }
    ]

```

===================================================================================================================

**URL** : `/dev/api/v1/post/react/${postId}`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "messsage": "Post liked successfully",
    "response": {
        "_id": "61251d18fc0aea26e8959645",
        "postId": "61251bb7fc0aea26e8959644",
        "createdBy": "6124feaf80768e22a036c560",
        "createdAt": "2021-08-24T16:23:52.946Z",
        "__v": 0
    }
}
```

===================================================================================================================

**URL** : `dev/api/v1/post/comment/${postId}`

**Method** : `POST`

**Header** : `application/json`

**Auth required** : YES

**Permissions required** : None

## Request Body 

```
{
    "comment":"Goods"
}

```
## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": false,
    "message": "Commented successfully",
    "response": {
        "_id": "61251d4efc0aea26e8959646",
        "comment": "Goods",
        "postId": "61152851d551e234d8593f64",
        "createdBy": "6124feaf80768e22a036c560",
        "createdAt": "2021-08-24T16:24:46.219Z",
        "__v": 0
    }
}
```

===================================================================================================================

**URL** : `/dev/api/v1/post/like/${postId}`

**Method** : `GET`

**Header** : `appication/json`

**Auth required** : YES

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "1 likes on given post",
    "response": [
        {
            "_id": "61251d18fc0aea26e8959645",
            "postId": "61251bb7fc0aea26e8959644",
            "createdBy": "6124feaf80768e22a036c560",
            "createdAt": "2021-08-24T16:23:52.946Z",
            "__v": 0
        }
    ]
}
```

===================================================================================================================

**URL** : `dev/api/v1/post/comment/{postId}`

**Method** : `GET`

**Header** : `application/json`

**Auth required** : YES

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "0 comments on given post",
    "response": []
}
```

===================================================================================================================


**URL** : `dev/api/v1/post/mostLiked`

**Method** : `GET`

**Header** : `application/json`

**Auth required** : YES

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "Here is the most liked comment",
    "response": [
        {
            "_id": "61251bb7fc0aea26e8959644",
            "count": 1,
            "data": [
                {
                    "_id": "61251d18fc0aea26e8959645",
                    "postId": "61251bb7fc0aea26e8959644",
                    "createdBy": "6124feaf80768e22a036c560",
                    "createdAt": "2021-08-24T16:23:52.946Z",
                    "__v": 0
                }
            ]
        }
    ]
}
```

====================================================================================================


**URL** : `dev/api/v1/post/{postId}`

**Method** : `DELETE`

**Header** : `application/json`

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
        "images": [
            {
                "id": "70376622-0789-4ccb-8fe1-34253f1fe051",
                "originalname": "Super Big Man Vs My Team - Rope Pulling Challenge.mp4",
                "url": "https://up53bu2083.s3.amazonaws.com/1629821691792?AWSAccessKeyId=AKIAUUTLTHNCZTUAOTH3&Expires=1629822779&Signature=b7iGt53s4PlGaguxaawNX1f9REw%3D",
                "key": "1629821691792"
            }
        ],
        "docs": [
            {
                "id": "49139256-219c-4021-ba6f-7ccb93bd868b",
                "originalname": "Yummy Yummy - Yashraj Mukhate - Dialogue With Beats.webm",
                "url": "https://up53bu2083.s3.amazonaws.com/1629821715967?AWSAccessKeyId=AKIAUUTLTHNCZTUAOTH3&Expires=1629822779&Signature=kl3GXKAaTs8nPOnAdOTj1XFzhPo%3D",
                "key": "1629821715967"
            }
        ],
        "websitesLink": [],
        "_id": "61251bb7fc0aea26e8959644",
        "text": "file to s32",
        "createdBy": "6124feaf80768e22a036c560",
        "createdAt": "2021-08-24T16:17:59.728Z",
        "__v": 0
    }
}
```

====================================================================================================
**URL** : `dev/api/v1/post/tag/{tagId}`

**Method** : `GET`

**Header** : `application/json`

**Auth required** : YES

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "message": "1 post found successfully",
    "success": true,
    "response": {
        "tag": {
            "_id": "6130abb960509a74149dcdc6",
            "tagName": "#firstTag",
            "createdAt": "2021-09-02T10:47:21.758Z",
            "__v": 0
        },
        "posts": [
            {
                "_id": "6130abb960509a74149dcdc7",
                "tagId": "6130abb960509a74149dcdc6",
                "postId": {
                    "images": [],
                    "docs": [],
                    "websitesLink": [],
                    "_id": "6130abb960509a74149dcdc5",
                    "text": "new post with tag",
                    "createdBy": "61308c176f905d4d4c757f5c",
                    "createdAt": "2021-09-02T10:47:21.746Z",
                    "__v": 0
                },
                "createdAt": "2021-09-02T10:47:21.760Z",
                "__v": 0
            }
        ]
    }
}
```

====================================================================================================


**URL** : `dev/api/v1/post`

**Method** : `POST`

**Header** : `application/json`

**Auth required** : YES

**Permissions required** : None

```json
{
    "tags": [
        "6130b4697da3d53dd8061f12",
        "6130b4697da3d53dd8061f14"
    ]
}

```

## Success Response 

**Code** : `200`

**Response**

```json
{
    "message": "4 post found successfully",
    "success": true,
    "response": [
        {
            "_id": "6130b4697da3d53dd8061f13",
            "tagId": {
                "_id": "6130b4697da3d53dd8061f12",
                "tagName": "#tag1.1",
                "createdAt": "2021-09-02T11:24:25.394Z",
                "__v": 0
            },
            "postId": {
                "images": [],
                "docs": [],
                "websitesLink": [],
                "_id": "6130b4697da3d53dd8061f11",
                "text": "post1",
                "createdBy": "61308c176f905d4d4c757f5c",
                "createdAt": "2021-09-02T11:24:25.383Z",
                "__v": 0
            },
            "createdAt": "2021-09-02T11:24:25.397Z",
            "__v": 0
        },
        {
            "_id": "6130b98bbc95843aac70916a",
            "tagId": {
                "_id": "6130b4697da3d53dd8061f12",
                "tagName": "#tag1.1",
                "createdAt": "2021-09-02T11:24:25.394Z",
                "__v": 0
            },
            "postId": {
                "images": [],
                "docs": [],
                "websitesLink": [],
                "_id": "6130b98bbc95843aac709169",
                "text": "post2",
                "createdBy": "61308c176f905d4d4c757f5c",
                "createdAt": "2021-09-02T11:46:19.974Z",
                "__v": 0
            },
            "createdAt": "2021-09-02T11:46:19.986Z",
            "__v": 0
        },
        {
            "_id": "6130b4697da3d53dd8061f15",
            "tagId": {
                "_id": "6130b4697da3d53dd8061f14",
                "tagName": "#tag1.2",
                "createdAt": "2021-09-02T11:24:25.401Z",
                "__v": 0
            },
            "postId": {
                "images": [],
                "docs": [],
                "websitesLink": [],
                "_id": "6130b4697da3d53dd8061f11",
                "text": "post1",
                "createdBy": "61308c176f905d4d4c757f5c",
                "createdAt": "2021-09-02T11:24:25.383Z",
                "__v": 0
            },
            "createdAt": "2021-09-02T11:24:25.403Z",
            "__v": 0
        },
        {
            "_id": "6130b98bbc95843aac70916b",
            "tagId": {
                "_id": "6130b4697da3d53dd8061f14",
                "tagName": "#tag1.2",
                "createdAt": "2021-09-02T11:24:25.401Z",
                "__v": 0
            },
            "postId": {
                "images": [],
                "docs": [],
                "websitesLink": [],
                "_id": "6130b98bbc95843aac709169",
                "text": "post2",
                "createdBy": "61308c176f905d4d4c757f5c",
                "createdAt": "2021-09-02T11:46:19.974Z",
                "__v": 0
            },
            "createdAt": "2021-09-02T11:46:19.990Z",
            "__v": 0
        }
    ]
}
```

====================================================================================================
GET ALL TAG CREATED BY USER

**URL** : `dev/api/v1/post/user/tag/{userId}`

**Method** : `GET`

**Header** : `application/json`

**Auth required** : YES

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "message": "4 tags found successfully",
    "success": true,
    "response": [
        {
            "_id": "6130bd8f1b0eeb7248db050b",
            "tagName": "#tag3.1",
            "createdBy": "61308c176f905d4d4c757f5c",
            "createdAt": "2021-09-02T12:03:27.047Z",
            "__v": 0
        },
        {
            "_id": "6130bd8f1b0eeb7248db050d",
            "tagName": "#tag3.2",
            "createdBy": "61308c176f905d4d4c757f5c",
            "createdAt": "2021-09-02T12:03:27.054Z",
            "__v": 0
        },
        {
            "_id": "6130bd8f1b0eeb7248db050f",
            "tagName": "#tag3.3",
            "createdBy": "61308c176f905d4d4c757f5c",
            "createdAt": "2021-09-02T12:03:27.062Z",
            "__v": 0
        },
        {
            "_id": "6130bd8f1b0eeb7248db0511",
            "tagName": "#tag3.4",
            "createdBy": "61308c176f905d4d4c757f5c",
            "createdAt": "2021-09-02T12:03:27.068Z",
            "__v": 0
        }
    ]
}
```

====================================================================================================
GET ALL POST OF ALL FRIENDS

**URL** : `dev/api/v1/post/user`

**Method** : `GET`

**Header** : `application/json`

**Auth required** : YES

**Permissions required** : None

## Success Response 

**Code** : `200`

**Response**

```json
{
    "message": "Here is the post of all connections",
    "success": false,
    "response": []
}
```

====================================================================================================
