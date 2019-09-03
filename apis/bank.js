
import {UserService} from '../service/userservice'

// init userservice
var userservice=new UserService();

// api: post /bank
var collectCustomerBankInfo = function (body){
    var reqObj={
        path:'/bank',
        method:'post',
        body:body,
        header:{
            'Accept':'application/json'
        }
    }
    var response =userservice.send(reqObj);
    return response;
}

module.exports= {
    collectCustomerBankInfo
};