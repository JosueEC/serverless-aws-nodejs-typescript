import { formatJSONResponse } from "@libs/api-gateway";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

const findById = async (event: APIGatewayProxyEvent, context: Context) => {
    try {
        /**
         * * .pathParameters
         * Es el equivalente a params en una request
        */
        const { id } = event.pathParameters;
        const { awsRequestId } = context;
    
        return formatJSONResponse({
            message: `${id} is the ID and this is the users findById handler`,
            awsRequestId,
        });
    } catch (error) {
        return formatJSONResponse({
            error: error.message
        });
    }
};

export const main = findById;