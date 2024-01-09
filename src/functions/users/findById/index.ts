import { handlerPath } from "@libs/handler-resolver";

/**
 * En esta funcion, el path recibira un dato por params,
 * Observa que en Express esto se representa asi:
 * * users/findById/:id
 * 
 * Pero aqui en serverles se representa asi:
 * * users/findById/{id}
 * 
 * Es igual que los path de Spring-Boot
 */
export const findById = {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [
        {
            http: {
                method: 'get',
                path: 'users/findById/{id}',
            }
        }
    ]
};