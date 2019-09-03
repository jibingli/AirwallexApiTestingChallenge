
## Test Report
 Click [Test Report](/mochawesome-report/mochawesome.html) for detailed results.

## Issues

* should be success when LOCAL CN with valid data without optional

request body is 
```json
{
    "payment_method": "LOCAL",
    "bank_country_code": "CN",
    "account_name": "James li",
    "account_number": "QWEqwe123456"
}
```
but actual result is 
```json
{
    "status_code":400,
    "body":{
        "error": "Length of account_number should be between 7 and 11 when bank_country_code is 'US'"
    }
}
```


* should be success when CN and account_number length 20

request body is
```json
{
    "payment_method": "LOCAL",
    "bank_country_code": "CN",
    "account_name": "James li",
    "account_number": "qwert98765!@#)/POIUY"
}
```
but actual result is 

```json
{
    "status_code":400,
    "body":{
        "error": "Length of account_number should be between 7 and 11 when bank_country_code is 'US'"
    }
}
```

* should be success when SWIFT CN

request body is
```json
{
    "payment_method": "SWIFT",
    "bank_country_code": "CN",
    "account_name": "James li",
    "account_number": "QWEqwe123456",
    "swift_code":"ICBKCNBJ123"
 }
```

but actual result is 
```json
{
    "status_code":400,
    "body":{
        "error": "Length of account_number should be between 7 and 11 when bank_country_code is 'US'"
    }
}
```

* should be failure when US but no aba 
 
 request body is 
 ```json
{
    "payment_method": "LOCAL",
    "bank_country_code": "US",
    "account_name": "AN12345",
    "account_number": "a(2ABC.1"
}
```
but actual result is 
```json
{
    "status_code":200,
    "body":{
        "success": "Bank details saved"
    }
}
```

* should be message Length of account_number should be between 1 and 17 when bank_country_code is 'US'  when US account_number length 18

request body is
```json
{
    "payment_method": "LOCAL",
    "bank_country_code": "US",
    "account_name": "AN1123",
    "account_number": "1234567890qwertyui",
    "aba": "123456789"
}
```
but actual result is 
```json
{
    "status_code":400,
    "body":{
        "error": "Length of account_number should be between 7 and 11 when bank_country_code is 'US'"
    }
}
```

* should be failure when CN and account_number length 7

request body is
```json
{
    "payment_method": "LOCAL",
    "bank_country_code": "CN",
    "account_name": "James li",
    "account_number": "123456t"
}
```
but actual result is 
```json
{
    "status_code":200,
    "body":{
        "success": "Bank details saved"
    }
}
```

* should be return Length of account_number should be between 8 and 20 when bank_country_code is 'CN'  when CN and account_number  length 21

request body is 
```json
{
    "payment_method": "LOCAL",
    "bank_country_code": "CN",
    "account_name": "James li",
    "account_number": "1234567890qwertyuiop1"
}
```
but actual result is 
```json
{
    "status_code":400,
    "body":{
        "error": "Length of account_number should be between 7 and 11 when bank_country_code is 'US'"
    }
}
```

* message Length of account_number should be between 6 and 9 when bank_country_code is 'AU' when AU and account_number length 5

request body is 
```json
{
    "payment_method": "LOCAL",
    "bank_country_code": "AU",
    "account_name": "AN12345",
    "account_number": "12345",
    "bsb":"bsbbsb"
}
```
but actual result is 
```json
{
    "status_code":400,
    "body":{
        "error": "Length of account_number should be between 7 and 11 when bank_country_code is 'US'"
    }
}
```

* message Length of account_number should be between 6 and 9 when bank_country_code is 'AU' when AU and account_number length 10

request body is 
```json
{
    "payment_method": "LOCAL",
    "bank_country_code": "AU",
    "account_name": "AN12345",
    "account_number": "1234567890",
    "bsb":"bsbbsb"
}
```
but actual result is 
```json
{
    "status_code":400,
    "body":{
        "error": "Length of account_number should be between 7 and 11 when bank_country_code is 'US'"
    }
}
```

* should be message Length of 'bsb' should be 6 when AU and bsb is ''

request body is 
```json
{
    "payment_method": "LOCAL",
    "bank_country_code": "AU",
    "account_name": "AN12345",
    "account_number": "123OPI00",
    "bsb":""
}
```
but actual result is 
```json
{
    "status_code":400,
    "body":{
        "error": "'bsb' is required when bank country code is 'AU'"
    }
}
```

* should be failure when US and aba is ''
request body is 
```json
{
    "payment_method": "SWIFT",
    "bank_country_code": "US",
    "account_name": "James li",
    "account_number": "QWEqwe123456",
    "swift_code":"ICBKUSBJ",
    "aba": ""
}
```
but actual result is 
```json
{
    "status_code":400,
    "body":{
        "success": "Bank details saved"
    }
}
```