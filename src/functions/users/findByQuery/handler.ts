import { formatJSONResponse } from "@libs/api-gateway";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

const findByQuery = async (event: APIGatewayProxyEvent, context: Context) => {
    const { awsRequestId } = context;
    /**
     * * .queryStringParameters
     * Es el equivalente a .query en Express, de esta forma podemos
     * recuperar queries desde el event.
     */
    const { age } = event.queryStringParameters;

    return formatJSONResponse({
        message: `The query is ${age} and this is the users findByQuery handler`,
        awsRequestId,
    });
};

export const main = findByQuery;