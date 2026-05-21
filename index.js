require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const githubData = {
  "login": "junaidr04",
  "id": 164465375,
  "node_id": "U_kgDOCc2K3w",
  "avatar_url": "https://avatars.githubusercontent.com/u/164465375?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/junaidr04",
  "html_url": "https://github.com/junaidr04",
  "followers_url": "https://api.github.com/users/junaidr04/followers",
  "following_url": "https://api.github.com/users/junaidr04/following{/other_user}",
  "gists_url": "https://api.github.com/users/junaidr04/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/junaidr04/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/junaidr04/subscriptions",
  "organizations_url": "https://api.github.com/users/junaidr04/orgs",
  "repos_url": "https://api.github.com/users/junaidr04/repos",
  "events_url": "https://api.github.com/users/junaidr04/events{/privacy}",
  "received_events_url": "https://api.github.com/users/junaidr04/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Junaid Bin Jahangir",
  "company": null,
  "blog": "",
  "location": "bangladesh",
  "email": null,
  "hireable": null,
  "bio": "C++ | Data Structures & Algorithms | OOP | DBMS | OS | CN | System Design",
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 4,
  "following": 4,
  "created_at": "2024-03-22T05:47:47Z",
  "updated_at": "2026-03-14T20:23:23Z"
};

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/login', (req, res) => {
  res.send('<h1>Please Login this Page</h1>');
});

app.get('/github', (req, res) => {
  res.json(githubData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});