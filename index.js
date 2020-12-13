'use strict';


const express = require("express");
const app = express();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('');

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

// News APIを利用してトップニュースを取得する
app.get("/data", (req, res) => {
  newsapi.v2.topHeadlines({
    country: 'jp',
    category: 'technology',
    // q: 'mac',
    pageSize: 5
  }).then(news => res.send(news));
});
app.get("/data2", (req, res) => {
  newsapi.v2.everything({
    language: 'jp',
    // category: 'technology',
    q: 'ネコ',
    pageSize: 5
  }).then(news => res.send(news));
});
app.get("/data3", (req, res) => {
  newsapi.v2.everything({
    language: 'jp',
    // category: 'technology',
    q: 'sony',
    pageSize: 5
  }).then(news => res.send(news));
});

// newsapi.v2.topHeadlines({
//   category: 'technology',
//   country: 'jp'   //対象の国名
//   // country: 【国名】,
//   // category: 【カテゴリ】,business,entertainment,general,health,science,sports,technology
//   // sources: 【ソース元】,
//   // q: 【キーワード】,
//   // pageSize: 【出力結果の数】,
//   // page: 【ページ数】

// }).then(news => {
//   news['articles'].forEach(item => console.log(item.title));
// })


app.listen(3000, () => console.log('listening on port ' + 3000));



