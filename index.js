const express = require("express");
const { resourceUsage } = require("process");
const stringcheker = require("./stringcheker");
const app = express();
const gitAxios = require("./githubAPI");
var GitHub = require('github-api');
const { json } = require("express");
const port = process.env.PORT || 8080;
app.use("/assets",express.static(`${__dirname/'public'}`));
// Middleware section
app.param("githubUserName", (req, res, next, value) => {
  const githubUserName = value;
  if (stringcheker.checkStringIfHasSpacesOrNumbers(githubUserName)) {
    // res.send(400, 'Invalid github username');
    res.status(400).send("Invalid github username");
  } else {
    next();
  }
});
app.param("repoName", (req, res, next, value) => {
  const repoName = value;
  if (stringcheker.checkStringIfHasSpacesOrNumbers(repoName)) {
    // res.send(400, 'Invalid repo name');
    res.status(400).send("Invalid repo name");
  } else {
    next();
  }
});

//Routing section
app.get("/api/v1/githubUser/:githubUserName/avatar", (req, res) => {
  let words = req.url.split('/')[4];
  let obj;
  gitAxios.getUserByName(words).then(userObj=> {obj = userObj;
    let path;
    // console.log(obj); console.log(obj.data.avatar_url);
    try{
    if(obj.data.avatar_url!=null)
      path=obj.data.avatar_url;
      }
      catch(err){
        path="https://avatars.githubusercontent.com/u/80040318?v=4";
      }
      
    res.send(`<!DOCTYPE html>
                <html>
                <head></head>
                <body>
                    <img src=${path}>
                </body>
                </html>`);
  })
});

app.get("/api/v1/githubUser/:githubUserName/repo/:repoName", (req, res) => {
  res.send(200, "OK");
});

app.get(
  "/api/v1/githubUser/:githubUserName/repo/:repoName/contributers",
  (req, res) => {
    res.send(200, "OK");
  }
);

app.all("*", (req, res) => {
  res.send(404, "Page not found");
});

app.listen(port, () => console.log(`express server listening on port ${port}`));