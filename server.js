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
  request(`http://careers.stackoverflow.com/jobs/feed?location=${query}`, function (error, response, body) {
    console.log(`Searching ${query}`);
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    let result = convert.xml2json(body, {compact: true, spaces: 4});
    res.send(result);
  });
});

/*const COLUMNS = [
  "carbohydrate_g",
  "protein_g",
  "fa_sat_g",
  "fa_mono_g",
  "fa_poly_g",
  "kcal",
  "description"
];
app.get("/api/food", (req, res) => {
  const param = req.query.q;
  if (!param) {
    res.json({
      error: "Missing required parameter `q`"
    });
    return;
  }
  // WARNING: Not for production use! The following statement
  // is not protected against SQL injections.
  const r = db.exec(
    `
    select ${COLUMNS.join(", ")} from entries
    where description like '%${param}%'
    limit 100
  `
  );
  if (r[0]) {
    res.json(
      r[0].values.map(entry => {
        const e = {};
        COLUMNS.forEach((c, idx) => {
          // combine fat columns
          if (c.match(/^fa_/)) {
            e.fat_g = e.fat_g || 0.0;
            e.fat_g = (parseFloat(e.fat_g, 10) +
              parseFloat(entry[idx], 10)).toFixed(2);
          } else {
            e[c] = entry[idx];
          }
        });
        return e;
      })
    );
  } else {
    res.json([]);
  }
});*/

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});