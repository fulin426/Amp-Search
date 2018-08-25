const express = require("express");
const fs = require("fs");
const sqlite = require("sql.js");
const request = require('request')
const convert = require('xml-js')

const filebuffer = fs.readFileSync("db/usda-nnd.sqlite3");

const db = new sqlite.Database(filebuffer);

const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

/*req.params.location

1 - make a request from the backend (npm package for making requests) npmjs.com called request

2 - convert the xml to json

3 - res.send the json*/

app.get("/api/search/:location", (req, res) => {
  let query = req.params.location;
  let options = {
    proxy: process.env.QUOTAGAURDSTATIC_URL || "http://740pu5fb5kh617:z75ybVo0WvbPPN66UwPOO2N9zQ@us-east-static-01.quotaguard.com:9293",
    url: `http://careers.stackoverflow.com/jobs/feed?location=${query}`,
    headers: {
      'User-Agent': 'node.js'
    }
  };
  request(options, function (error, response, body) {
    console.log(`Searching ${query}`);
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    let result = convert.xml2json(body, {compact: true, spaces: 4});
    res.send(result);
  });
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});