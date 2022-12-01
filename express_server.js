const { Template } = require("ejs");
const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

app.set('view engine', 'ejs');

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get('/urls.json', (req, res) => {
  res.json(urlDatabase)
})
app.get('/urls', (req, res) => {
  const templatevars = {urls: urlDatabase}
  res.render('urls_index', templatevars )
})

app.get('/hello', (req, res) => {
  res.send('<html><body> HELLO <b>WORLDS</b></body></html>\n')
})
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});