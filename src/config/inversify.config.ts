import 'reflect-metadata';
import { Container } from "inversify";
import { UsersRepository } from "src/users/entity/user.repository";
import { UserService } from "src/users/services/user.service";

/**
 * En este archivo es donde definimos la configuracion para la
 * libreria inversify.
 * 
 * Esta libreria nos proporciona de algunos decoradores para
 * trabajar con inyeccion de dependencias.
 * 
 * Aqui estamos declarando las clases que podran ser inyectadas.
 * Estas clases tambien estaran marcadas con el decorador
 * @injectable
 */
const container = new Container();
/**
 * Las clases se registran en el container. Para registrar una
 * clase usamos el metodo .bind, este recibe la clase que se va
 * registrar tanto en su parametro, como en su generico.
 * 
 * El metodo .to define que se va a retorna cuando se inyecte la
 * clase
 */
container.bind<UserService>(UserService).to(UserService);
container.bind<UsersRepository>('USER_REPO').to(UsersRepository);

export { container };