const express = require("express");
const bodyParser = require("body-parser");
const readXlsxFile = require("read-excel-file/node");
const helmet = require("helmet");

const app = express();

const port = process.env.PORT || 5000;
app.use(helmet());
app.disable("x-powered-by");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const loadData = async (sheet) => {
  const data = [];
  const rows = await readXlsxFile("./spreadsheets/spread-sheet.xlsx", {
    sheet,
  });
  if (rows) {
    rows.forEach((row) => {
      let rowsTable = {
        headline: row[0],
        subHeadline: row[1],
        mobilUrl: row[2],
        desktopUrl: row[3],
        title: row[4],
        description: row[5],
      };
      data.push(rowsTable);
    });
  }
  return data;
};

app.get("/homepage/spreadsheet", async (req, res) => {
  const data = await loadData(1);
  res.json(data);
});

app.get("/portfolio/spreadsheet", async (req, res) => {
  const data = await loadData(2);
  res.json(data);
});

app.get("/about/spreadsheet", async (req, res) => {
  const data = await loadData(3);
  res.json(data);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
