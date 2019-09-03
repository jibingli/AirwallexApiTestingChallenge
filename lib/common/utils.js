
import { readFileSync } from 'fs';
import { resolve } from "path";


// parse json test data (Data-Driven)
var getCaseData=function(name){
    const data = readFileSync(resolve(__dirname, "../../"+name), 'utf8');
    const jsonData = JSON.parse(data);
    return jsonData;
}

//  TODO  parse csv test data (Data-Driven)

module.exports= {
    getCaseData
}