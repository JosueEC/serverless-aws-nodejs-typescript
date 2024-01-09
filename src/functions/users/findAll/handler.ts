import { formatJSONResponse } from '@libs/api-gateway';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

/**
 * Los 'handler', son la funciones que contendran la logica para
 * realizar alguna accion o resolver un problema en nuestra aplicacion
 * 
 * Estas funciones son expuestas a traves del index que esta en esta
 * misma carpeta de /functions
 * 
 * Estas funciones reciben los parametros 'event' y 'context'. Dentro
 * de event podemos encontrar los mismos datos que en una request,
 * cosas como el body, query, params, y demas datos.
 * 
 * El conext es la informacion en el cual se esta ejecutando la
 * request.
 * 
 * El tipado de estos parametros, para este caso, viene de aws-lambda
 */
const findAll = async (event: APIGatewayProxyEvent, context: Context) => {

  /**
   * Esta es una forma, en la que podemos obtener un dato del body,
   * el cual no esta tipado dentro del mismo.
   */
  const { name } = JSON.parse(event.body) as { name: string };
  /**
   * * awsRequestId
   * Es un dato importante el cual nos permite identificar
   * una request, lo cual es util para trackear errores
   * o comportamientos en hilos de ejecucion.
   * 
   * Ya que este ID puede ser usado en cloudwatch, el cual es
   * otro servicio de AWS
   */
  const { awsRequestId } = context;

  return formatJSONResponse({
    message: `Hello ${name}, welcome to the exciting Serverless world!`,
    awsRequestId,
  });
};

export const main = findAll;
