# Next Level Week 4 API

## Development

create dotenv file
```
touch .env
```

setting environments on dotenv file
```
URL_MAIL=http://localhost:3333/answers
```

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


### SurveysUsers

<details>
  <summary>SendEmail</summary>

  curl
  ```
  curl -kv -H 'content-type: application/json' -d '{ "email": "root@root.com", "survey_id": "a11b2a0c-7339-40fe-b085-c693ccbc861e" }' -X 'POST' 'http://localhost:3333/sendMail' | jq
  ```

  status code `202 Accepted`

  response
  ```json
  {
    "surveyUser": {
      "id": "cf0f9bb5-0ad9-4a97-80ac-0600600b91a8",
      "user_id": "86816aa9-3c99-4d44-a9f5-aea827cb8f65",
      "survey_id": "a11b2a0c-7339-40fe-b085-c693ccbc861e",
      "created_at": "2021-02-26T01:22:21.000Z"
    }
  }
  ```
</details>

### Answers

<details>
  <summary>Show And Vote</summary>

  curl
  ```
  curl -kv -H 'content-type: application/json' -X 'GET' 'http://localhost:3333/answers/10?u=0b9f78f9-246c-4a02-a51e-7cd69e56ae67' | jq
  ```
  
  status code `202 Accepted`

  response
  ```json
  {
    "id": "0b9f78f9-246c-4a02-a51e-7cd69e56ae67",
    "user_id": "86816aa9-3c99-4d44-a9f5-aea827cb8f65",
    "survey_id": "a11b2a0c-7339-40fe-b085-c693ccbc861e",
    "value": 10,
    "created_at": "2021-02-26T03:09:04.000Z"
  }
  ```
</details>

### Nps

<details>
  <summary>Show</summary>

  curl
  ```
  curl -kv -H 'content-type: application/json' -X 'GET' 'http://localhost:3333/nps/a11b2a0c-7339-40fe-b085-c693ccbc861e' | jq
  ```

  status code: `200 OK`

  response
  ```json
  {
    "detractors": 0,
    "passives": 0,
    "promoters": 1,
    "totalAnswers": 1,
    "nps": 100
  }
  ```
</details>
