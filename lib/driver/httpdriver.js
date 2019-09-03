
import supertest from 'supertest';
/**
 * this is driver for http request
 * 
 */
class HttpDriver{
    /**
     * get hostname for http requests
     */
    getHost(){
        throw new Error("pls provide hostname!");
    };

    /**  
     * TODO common headers setting
     */
    getHeader(){};

    /**
     * TODO encrypt request data 
     */
    encryptRequest(){};


    /**
     * parse request object and send http 
     * 
     * @param {*} reqObj 
     */
    send(reqObj) {
        var path=reqObj.path,
        method=reqObj.method,
        header=reqObj.header,
        params=reqObj.params,
        form=reqObj.form,
        body=reqObj.body;

        var host=this.getHost();
        var request=supertest(host);

        //TODO define other request methods
        switch(method.toUpperCase()){
            case 'POST':
                request=request.post(path);
                break;
            case 'GET':
                request=request.get(path);
                break;
            default:
                throw new Error("invalid method!")
        }
        //set header 
        if(header && JSON.stringify(header)!=='{}'){
                request=request.set(header);
        }

        // send request then return response
        let response=null;
        if(body && JSON.stringify(body)!=='{}'){
            response=request.send(body);
        }
        //TODO  parse params and form format requests
        
        
        if(response == null){
            throw new Error("error response, pls check!");
        }
        return response;
    }
}

module.exports={
    HttpDriver
}

