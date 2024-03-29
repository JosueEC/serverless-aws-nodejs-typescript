import { formatJSONResponse } from "@libs/api-gateway";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

export const main = async (event: APIGatewayProxyEvent, context: Context) => {
    try {
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
    } catch (error) {
        return formatJSONResponse({
            error: error.message,
        });
    }
};