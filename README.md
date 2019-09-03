## AirwallexServiceTesting


AirwallexServiceTesting is an automation framework for api testing, 
now it support http protocol, and will support rpc protocol in the future.

### Introduction

Project Tree:
```json
.
├── Dockerfile                  //integration with docker 
├── README.md
├── apis                        // all api definitions folder 
│   └── bank.js
├── config                      // demo or production... configuration
│   ├── config.js
│   ├── default.json
│   ├── demo.json
│   └── preview.json
├── docs                        // docs for project 
├── index.js
├── lib                         
│   ├── common                  // utils for testing
│   │   └── utils.js
│   ├── driver                  // http or rpc protocol request library
│   │   └── httpdriver.js       // driver for http requests
│   └── template                // template to support different input, json yaml har or swagger
├── mochawesome-report          // testing report folder
│   ├── assets
│   ├── mochawesome.html         // html report 
│   └── mochawesome.json
├── package-lock.json
├── package.json                // package for project
├── service                     // all services for e2e testcases
│   └── userservice.js
└── test                        // tests for service
    ├── bank.test.js
    ├── data                    // data-driven test data
    │   └── customersBankInfoData.json
    └── mocha.opt               // mocha option configuration
```
* Mainly framework used: 
    * [Mocha](https://github.com/mochajs/mocha/blob/master/README.md) Simple, flexible, fun JavaScript test framework for Node.js & The Browser, it is used for collecting tests and assertion.
    * [supertest](https://github.com/visionmedia/supertest/blob/master/README.md) a high-level abstraction for testing HTTP.
    * [node-config](https://github.com/lorenwest/node-config/blob/master/README.md) make the endpoint url configurable
    * [mochawesome](https://github.com/adamgruber/mochawesome/blob/master/README.md) A Gorgeous HTML/CSS Reporter for Mocha.js




### Basic Usage
#### How to config for different environment
config the hostname and any other configuration, database eg. for your env.

Sample: 
demo env
```json
{
    "host":"http://demo.airwallex.com:30001"
}
```
pre env
```json
{
    "host":"http://preview.airwallex.com:30001"
}
```
#### How to write test cases
1. Create service to be tested.

sample:
```Javascript
class UserService extends HttpDriver{
    //set hostname
    getHost(){
        return hostname;
    }

}
```
2. Create api definitions for service.

Sample:
```Javascript
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
```

3. Write testcases with mocha framework.

Sample:
```Javascript
describe("Customers Info Tests", function () {

    describe("collect customers bank info tests",function(){
        //data-driven
        customersInfoData.forEach(test => {
            it("post /bank should be " + test.name, function (done) {
                collectCustomerBankInfo(test.body).expect(test.expect.status_code, test.expect.body, done)
            });
        })
    })

}) 
```

#### How to run
* Run with command
```
npm install
```
command for pre environment
```
npm run pre
```

Or use this command for demo environment
```
npm run demo
```

After testing, there are a html report under folder ./mochawesome-report


*  Run with docker
```
docker build -t test/apitesting .
docker run --name apitesting test/apitesting -d
```



### Advanced Usage
#### How to control tests
1. Skip some tests.

Sample:
```Javascript
describe('Array', function() {
  describe.skip('#indexOf()', function() {
    // ...
  });
});
```
If data-driven, user enable parameter:
```json
  {
        "name":"success when LOCAL US with valid data without optional",
        "enable":true,                                      // if true , this test will be run
        "body":{
            "payment_method": "LOCAL",
            "bank_country_code": "US",
            "account_name": "AN12345",
            "account_number": "a(2ABC.1",
            "aba": "123456789"
        },
        "expect":{
            "status_code":200,
            "body":{
                "success": "Bank details saved"
            }
        }
    }
```

2. Retry tests
```Javascript
describe('retries', function() {
  // Retry all tests in this suite up to 4 times
  this.retries(4);

  beforeEach(function() {
    browser.get('http://www.yahoo.com');
  });

  it('should succeed on the 3rd try', function() {
    // Specify this test to only retry up to 2 times
    this.retries(2);
    expect($('.foo').isDisplayed()).to.eventually.be.true;
  });
});
```
3.  data-diven.

Sample:
```Javascript
describe('add()', function() {
  var tests = [
    {args: [1, 2], expected: 3},
    {args: [1, 2, 3], expected: 6},
    {args: [1, 2, 3, 4], expected: 10}
  ];

  tests.forEach(function(test) {
    it('correctly adds ' + test.args.length + ' args', function() {
      var res = add.apply(null, test.args);
      assert.equal(res, test.expected);
    });
  });
});
```
More details: [mocha framework](https://github.com/mochajs/mocha/blob/master/README.md) ,


#### How to encrypt request
For http protocol, you can extend HttpDriver and implement the encrpt method 

#### How to set common headers
For http protocol, you can extend HttpDriver and implement the getHeader method 

### How to intergrate with Jenkins
1. Config code from github
2. run command
```
npm run start
```

Also you can run with docker in Jenkins.



### More powerfull function will be released in next version...

