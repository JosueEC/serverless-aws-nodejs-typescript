import { formatJSONResponse } from "@libs/api-gateway";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

const findById = async (event: APIGatewayProxyEvent, context: Context) => {
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
};

export const main = findById;