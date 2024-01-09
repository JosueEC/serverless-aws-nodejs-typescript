import { handlerPath } from "@libs/handler-resolver";

export const findByQuery = {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [
        {
            http: {
                method: 'get',
                path: 'users/findByQuery'
            }
        }
    ],
};