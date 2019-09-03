
import { HttpDriver } from "../lib/driver/httpdriver";
import { hostname } from "../config/config";

/**
 * this is real userservice extends HttpDriver
 */
class UserService extends HttpDriver{

    getHost(){
        return hostname;
    }

}

module.exports={
    UserService
}