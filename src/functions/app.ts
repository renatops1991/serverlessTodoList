import { APIGatewayProxyHandler } from "aws-lambda";

export const handle: APIGatewayProxyHandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Api health <3",
    }),
    headers: {
      "Content-type": "application/json",
    },
  };
};
