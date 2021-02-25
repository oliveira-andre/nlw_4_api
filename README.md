# Next Level Week 4 API

## Development

running migrations
```
yarn typeorm migration:run
```

creating migrations
```
yarn typeorm migration:create -n CreateTableName
```

running tests
```
yarn test
```

running the server
```
yarn dev
```

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


### Surveys

<details>
  <summary>Create</summary>

  curl
  ```
  curl -kv -H 'content-type: application/json' -d ' { "title": "queremos ouvir sua opiniao", "description":" de 0 a 10 o quanto vc recomendaria esse codigo para um amigo?" }' -X 'POST' 'http://localhost:3333/surveys' | jq
  ```

  status code `201 Created`

  response
  ```json
  {
    "id": "82739f53-0adb-4ccc-98a0-4b0ba1fa597b",
    "title": "queremos ouvir sua opiniao",
    "description": " de 0 a 10 o quanto vc recomendaria esse codigo para um amigo?",
    "created_at": "2021-02-24T23:30:17.000Z"
  }
  ```
</details>

<details>
  <summary>Show</summary>

  curl
  ```
  curl -kv -H 'content-type: application/json' -X 'GET' 'http://localhost:3333/surveys' | jq
  ```

  status code `200 OK`

  response
  ```json
  [
    {
      "id": "82739f53-0adb-4ccc-98a0-4b0ba1fa597b",
      "title": "queremos ouvir sua opiniao",
      "description": " de 0 a 10 o quanto vc recomendaria esse codigo para um amigo?",
      "created_at": "2021-02-24T23:30:17.000Z"
    }
  ]
  ```
</details>
