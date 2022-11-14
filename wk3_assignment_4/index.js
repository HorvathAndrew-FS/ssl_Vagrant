const http = require('http'); //change var to const, corrected http spelling

const myName = function(){  //corrected spelling of function, camel case for the variable name and changed var to const
  return "Here is my IP Address"; //changed from a console.log to return a string as it seems strange to console.log a console.log
}

function callHttpBin() {    //corrected spelling HttpBin and cap Bin for correct camel case
  return new Promise((resolve, reject) => { //change from variable to outright return a new promise
    http.get(
     'http://httpbin.org/ip',
     function(response) {
      let str=""; //changed var to let
      response.setEncoding('utf8');
      response.on('data', function(data){
      str += data;
     });

     response.on('end', function() {
      const result = JSON.parse(str); //changed var to const
      const myIps = result.origin; //added variable declaration and camel case for name
      resolve(myIps); //added myIps variable to the response and closing semi-colon
     });
     }
    );
});

// let result = await promise;  removed this as the resolve handles the passing of the data
// result;
}
async function executeAsyncTask(){ //added async
  const valueA = await callHttpBin(); //fixed function name to match declaration
  const valueB = myName(); //fixed variable name to match declaration
  console.log(valueB + " " + valueA); //added closing semi-colon
} //added missing closing bracket

executeAsyncTask(); //executing the function
// Output Here is my IP address 149.24.160.1, 149.24.160.1