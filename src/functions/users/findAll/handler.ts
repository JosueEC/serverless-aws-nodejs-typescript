import { formatJSONResponse } from '@libs/api-gateway';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { container } from 'src/config/inversify.config';
// import { UsersRepository } from 'src/users/entity/user.repository';
import { UserService } from 'src/users/services/user.service';

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
/**
 * Recuerda que tenemos 2 formas de exportacion, una que
 * cuando son varios archivos a exportar, y otra cuando
 * es uno solo.
 * 
 * Este es el caso de un solo archivo, por ende podemos
 * exportar directamente la declaracion de la funcion.
 */
export const main = async (event: APIGatewayProxyEvent, context: Context) => {
  try {
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
    /**
     * Esta es la forma de inyectar dependencias sin el uso de
     * decoradores. Aqui estamos creando una instancia de la clase
     * UserService, la cual espera la clase Repository en su
     * constructor. De esta forma podemos acceder a los metodos del
     * UserService.
     */
    // const userService = new UserService(new UsersRepository);
    /**
     * Y esta es la forma en la que inyectamos dependencias usando
     * la libreria inversify, previamente debimos haver definido
     * la configuracion del container.
     */
    const userService = container.get(UserService);

    return formatJSONResponse({
      awsRequestId,
      message: `Hello ${name}, welcome to the exciting Serverless world!`,
      result: userService.findAll(),
    });
  } catch (error) {
    /**
     * Haciendo uso de un try catch, es como podemos capturar y
     * notificar los errores al cliente
     */
    return formatJSONResponse({
      error: error.message,
    });
  }
};
