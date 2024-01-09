import { handlerPath } from '@libs/handler-resolver';

/**
 * El index, es donde van las configuraciones para exponer nuestros
 * handlers, cuestiones como el tipo de metodo HTPP, el path, etc.
 */
export const findAll = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'users/findAll',
      },
    },
  ],
};
