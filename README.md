# Next Level Week 4 API

## Requests

### Users

<details>
  <summary>Create</summary>

  curl
  ```
  curl -kv -H 'content-type: application/json' -d '{ "name": "Andre Oliveira", "email": "root@root.com" }' -X 'POST' 'http://localhost:3333/users' | jq
  ```

  status code `201 Created`

  response
  ```json
  {
    "id": "43a2d075-aa41-4cc5-bdc6-e68a7873c39f",
    "name": "Andre Oliveira",
    "email": "root@root.com",
    "created_at": "2021-02-24T01:10:55.000Z"
  }
  ```
</details>
