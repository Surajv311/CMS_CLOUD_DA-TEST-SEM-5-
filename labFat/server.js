const express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: true }));
let arr = [];

app.post("/", function (req, res) {
  var start = Number(req.body.n1); // n1 is the name of our first input in <form> tag
  var end = Number(req.body.n2); // n2 is the name of our second input in <form> tag

  for (let i = start; i <= end; i++) {
    let x = i.toString().length; // number to string
    let sum = 0;
    let temp = i;
    while (temp > 0) {
      // logic to add the cube of digits...
      let r = temp % 10;
      sum += r ** x;
      temp = parseInt(temp / 10);
    }
    if (sum == i) {
      console.log(i);
      arr.push(i);
    }
  }

  res.send("the list of armstrong numbers are: " + arr); // displaying the result
  //NOTE : res.send is used to send a single response.
  //To send a file we would have to use res.sendFile
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/armstrong.html");
});
app.listen(3000, function () {
  console.log("port created");
});
