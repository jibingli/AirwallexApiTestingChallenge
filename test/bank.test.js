
import { getCaseData } from "../lib/common/utils";
//APIS
import { collectCustomerBankInfo } from '../apis/bank';

//Test Data Prepare
var customersInfoData = getCaseData('/test/data/customersBankInfoData.json');

describe("Customers Info Tests", function () {

    describe("collect customers bank info tests",function(){
        customersInfoData.forEach(test => {
            if(test.enable){
                it("post /bank should be " + test.name, function (done) {
                    collectCustomerBankInfo(test.body).expect(test.expect.status_code, test.expect.body, done)
                });
            }
        })
    })

}) 