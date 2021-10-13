import { APIGatewayProxyHandler } from "aws-lambda";
import { documentDB } from "src/utils/dynamodbClient";

export const handle: APIGatewayProxyHandler = async (event) => {
  const { user_id } = event.pathParameters;

  const response = await documentDB
    .query({
      TableName: "todos",
      KeyConditionExpression: "id = :user_id",
      ExpressionAttributeValues: {
        ":user_id": user_id,
      },
    })
    .promise();
  const userAlreadyExists = response.Items[0];

  if (!userAlreadyExists) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "User does not exist",
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      Todo: [
        {
          id: userAlreadyExists.id,
          user_id: userAlreadyExists.user_id,
          title: userAlreadyExists.title,
          done: userAlreadyExists.done,
          deadline: userAlreadyExists.deadline,
        },
      ],
    }),
  };
};
