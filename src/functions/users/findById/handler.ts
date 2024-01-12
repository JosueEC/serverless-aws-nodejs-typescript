import { formatJSONResponse } from "@libs/api-gateway";
import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { container } from "src/config/inversify.config";
// import { UsersRepository } from "src/users/entity/user.repository";
import { UserService } from "src/users/services/user.service";

export const main = async (event: APIGatewayProxyEvent, context: Context) => {
    try {
        /**
         * * .pathParameters
         * Es el equivalente a params en una request
        */
        const { id } = event.pathParameters;
        const { awsRequestId } = context;
        // const userService = new UserService(new UsersRepository);
        const userService = container.get(UserService);
    
        return formatJSONResponse({
            awsRequestId,
            message: `${id} is the ID and this is the users findById handler`,
            result: userService.findById(id),
        });
    } catch (error) {
        return formatJSONResponse({
            error: error.message
        });
    }
};