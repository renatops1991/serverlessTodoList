# To-do list using serverless

This project aims to recreate the To-do list that was developed in the "Conceito do Node JS" challenge, using the knowledge of the Serverless module from the NodeJs trail.  <a href="https://www.notion.so/Desafio-01-Construindo-com-serverless-1fdde2c717a94f7aa077e746cb077bec" target="_blank">Challenge Link</a>

## Used libraries:
 - Typescript
 - Serverless
 - Serverless-offline
 - Serverless-webpack
 - Serverless-dynamodb-local
 - Webpack
 - Aws Lambda

## <b>Get started with installation:</b>
Clone the project and run the following command to download dependencies:

<b>Yarn:</b>
```bash
yarn
```
Then run the following command to install dynamodb locally:
```bash
yarn serverless dynamodb install 
```
With dynamodb installed on your local machine, enter the following command to run the database locally.

```bash
yarn serverless dynamodb start
#ou
yarn dynamodb:start
```
With the database already running on your machine, type the following command to be able to run the application:
```bash
yarn serverless offline
#ou
yarn dev
```

## <b>Create To-do:</b> `POST`
`http://localhost:3000/dev/todo/{user_id}/create`

<b>Payload:</b>
```json
{
	"id": "e6ee0b87-9776-4031-828e-59d09fb14a71",
	"title": "foo bar",
	"done": false,
	"deadline": "2021-10-13 20:34"
}
```

##  <b>Show To-do:</b> `GET`
`http://localhost:3000/dev/todo/{user_id}/show`

<b>OutPut:</b>
```json
{
  "Todo": [
    {
      "id": "e6ee0b87-9776-4031-828e-59d09fb14a71",
      "user_id": "b3b8ab9f-2a6f-4d1d-ab7f-6bd759799260",
      "title": "foo bar",
      "done": true,
      "deadline": "2021-10-13 20:34"
    }
  ]
}
```

