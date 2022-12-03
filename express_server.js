const { Template } = require("ejs");
const express = require("express");
const { url } = require("inspector");
const app = express();
const PORT = 8080; // default port 8080

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


function generateRandomString() {
  let randomString = ''
 const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789'
  for (let x = 0; x < 7; x++){
    randomString = Math.floor(Math.random() * char.length)
  }
  return randomString
}

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};
app.post('/urls/:id/delete', (req, res) => {
  delete urlDatabase[req.params.id];
    res.redirect('/urls');
  })


app.get("/urls/new", (req, res) => {
  res.render('urls_new')
})

app.post('/urls', (req, res) => {
  const randomShort = generateRandomString();
  urlDatabase[randomShort] = req.body.longURL;
  res.redirect('/urls/' + String(randomShort));
});

app.get('/u/:id', (req, res) => {
  const longURL = req.body.longURL
  res.redirect(longURL)
})

app.get("/urls/:id", (req, res) => {
  const templateVars = { id: req.params.id, longURL: urlDatabase[req.params.id]}
  res.render("urls_show", templateVars);
});

app.get("/", (req, res) => {
  res.redirect('/urls')
});

app.get('/urls.json', (req, res) => {
  res.json(urlDatabase)
})
app.get('/urls', (req, res) => {
  const templatevars = {urls: urlDatabase}
  res.render('urls_index', templatevars )
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});