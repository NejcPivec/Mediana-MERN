# Mediana web app

CRUD application for creating surveys.

### Technology

- NodeJs
- React
- MongoDb
- Express

### How to install and run project

- Clone repository
- Run command
  `docker-compose up`

Open website on : http://localhost:3000/

### Api calls

For API calls testing i recommend `Postman`
In project root there is a file `Mediana.postman_collection.json`, you imported in Postman and get all currently build API calls.

##### Help for importing

`https://learning.postman.com/docs/getting-started/importing-and-exporting-data/`

### Database

For inspecting local mongo database i recommend using `MongoBD Compass`.
For connecting to your own database: - Hostname: localhost - Port: 27018

##### Download Compass:

`https://www.mongodb.com/try/download/compass`

### Mobile app

`https://github.com/NejcPivec/Mediana`

## Generating survey JSON

For generating survey you can use https://surveyjs.io/.
`WARNING:`
If you use surveyJS, you must be careful because their software doesn't write valid json. Example:

###### SurveyJS JSON:

```json
{
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "checkbox",
          "name": "question1",
          "title": "Favorite NBA team?",
          "choices": [
            {
              "value": "item1",
              "text": "LA Lakers"
            },
            {
              "value": "item2",
              "text": "LA Clippers"
            }
          ]
        }
      ]
    }
  ]
}
```

###### Mediana JSON:

```json
{
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "checkbox",
          "name": "question1",
          "title": "Favorite NBA team?",
          "choices": [
            {
              "value": "item1",
              "text": "LA Lakers"
            },
            {
              "value": "item2",
              "text": "LA Clippers"
            }
          ]
        }
      ]
    }
  ]
}
```

### Screenshots

![Mediana](https://github.com/NejcPivec/Mediana-mern/blob/main/screenshots/mediana.png)
