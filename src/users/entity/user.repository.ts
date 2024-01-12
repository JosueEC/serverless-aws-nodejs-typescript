import { injectable } from "inversify";
import { findAllMock } from "../mock/find.all.mock";

@injectable()
export class UsersRepository {
    /**
     * Esta es otra forma de tipar en TypeScript, basicamente la
     * palabra reservada typeof nos devuelve el tipo, el cual, en
     * este caso seria similar a crear un type, interface o clase,
     * pero sin necesidad de hacerlo.
     */
    public findAllMock(): typeof findAllMock {
        return findAllMock;
    }

    /**
     * * +userId
     * Transforma la cadena en un valor numerico para que este pueda
     * ser evaluado contra el id
     */
    public findByIdMock(userId: string): typeof findAllMock[0] {
        return findAllMock.find(({ id }) => id === +userId);
    }
}