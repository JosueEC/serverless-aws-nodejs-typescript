import { inject, injectable } from "inversify";
import { UsersRepository } from "../entity/user.repository";
import { findAllMock } from "../mock/find.all.mock";

/**
 * Podemos usar inyeccion de dependencias aun si en estar en NestJS,
 * aqui estamos inyectando nuestra clase Repository sin necesidad de
 * usar el decorador @InjectRepository
 * 
 * Esto implica que cuando inyectemos esta clase service, sera como
 * la creacion de una instancia, la cual nos pedira que en el
 * constructor sea inyectada la clase repository. Esto es la forma
 * de inyectar dependencias sin decoradores.
 * 
 * * typeof findAllMock
 * Asi mismo, podemos usar esta forma de tipado, ya que aun no
 * contamos con clases Entity para poder tipar estas funciones
 */
@injectable()
export class UserService {
    constructor(
        @inject('USER_REPO')
        private readonly userRepository: UsersRepository
    ) {}

    public findAll(): typeof findAllMock {
        return this.userRepository.findAllMock();
    }

    public findById(id: string): typeof findAllMock[0] {
        return this.userRepository.findByIdMock(id);
    }
}