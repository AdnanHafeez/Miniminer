const https = require("https");

const URL = "https://hackattic.com/challenges/mini_miner/problem?access_token=8c0b646e8707f78b"

var minerProcess = function(response){
  let difficulty = response.difficulty;
  let nonce = response.block.nonce;
  let data = response.block.data;
}


try {
https.get(URL, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    //console.log(`Receiving Response = ${data}`);
    body += data;
  });
  res.on("end", () => {
    //console.log(`Body = ${body}`);
    body = JSON.parse(body);
    //Pass the object to our function for processing
    minerProcess(body);
  });
});
}
catch(e)
{
  console.log(`Error:${e}`);
}
