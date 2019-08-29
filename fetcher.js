// takes in two command line arguements
// first one is URL
// second one is location to write file

const args = process.argv.slice(2);

const request = require('request');
const fs = require('fs');

request(args[0], (error, response, body) => {
  if (error) {
    console.log(`There was an error: ${error}`);
  } else if (response.statusCode < 200 || response.statusCode >= 300) {
    console.log(`There was a non 200 statusCode: ${response.statusCode}`);
    return;
  } else {
    fs.writeFile(`${args[1]}`, body, (err) => {
      if (err) {
        console.log("the file path was not valid");
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);
      }
    });
  }
});


