const express = require('express');
const app = express();
const port = process.env.PORT || 8080;


app.get('/api/v1/githubUser/:githubUserName/avatar', (req, res) => {
    res.send(200, 'OK');
});

app.get('/api/v1/githubUser/:githubUserName/repo/:repoName', (req, res) => {
    res.send(200, 'OK');
});

app.get('/api/v1/githubUser/:githubUserName/repo/:repoName/contributers', (req, res) => {
    res.send(200, 'OK');
});

app.all('*', (req, res) => {
    res.send(404, 'Page not found');
});


app.listen(port, () => console.log(`express server listening on port ${port}`));