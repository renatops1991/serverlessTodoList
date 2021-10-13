import { APIGatewayProxyHandler } from "aws-lambda";
import { documentDB } from "../utils/dynamodbClient";

interface ICreateTodoPayload {
  id: string;
  title: string;
  done: boolean;
  deadline: Date;
}

export const handle: APIGatewayProxyHandler = async (event) => {
  const { user_id } = event.pathParameters;
  const { id, title, done, deadline } = JSON.parse(
    event.body
  ) as ICreateTodoPayload;

  await documentDB
    .put({
      TableName: "todos",
      Item: {
        id,
        user_id,
        title,
        done: done ?? false,
        deadline,
      },
    })
    .promise();

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Todo created successfully",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
