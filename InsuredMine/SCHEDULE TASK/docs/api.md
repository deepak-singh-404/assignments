====================================================================================================
**URL** : `/scheduleTask`

**Method** : `POST`

**Header** : `application/json`

**Auth required** : None

**Permissions required** : None

## Request Body 

```json
{
    "timestamp":"2021-09-17T20:07:36.941Z",
    "message":"first message"
}
```
## Success Response 

**Code** : `200`

**Response**

```json
{
    "success": true,
    "message": "Your task has been scheduled",
    "response": {
        "timestamp": "2021-09-17T20:07:36.941Z",
        "message": "last message",
        "_id": "6144f558a913e2ade14f238a",
        "createdAt": "2021-09-17T20:06:48.738Z",
        "__v": 0
    }
}
```