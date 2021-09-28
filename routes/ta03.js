// //TA03 PLACEHOLDER
// const express = require('express');
// const router = express.Router();

// const fs  = require('fs');

// const https = require('https');
// let url = "https://byui-cse.github.io/cse341-course/lesson03/items.json";

// https.get(url, (res) => {
//   let body = "";

//   res.on("data", (chunk) => {
//     body += chunk;
//   });

//  res.on("end", () => {
//    try {let json = JSON.parse(body);
//     res.render('pages/ta03', {

//     });
//    console.log(body);

//  } catch (error) {
//    console.error(error.message);
//  };
// });
// }).on("error", (error) => {
//   console.error(error.message);
// });

// router.get('/', (req, res, next) => {
//   res.render('pages/ta03', {
//     title: 'Team Activity 03',
//     path: '/ta03', // For pug, EJS
//     activeTA03: true, // For HBS
//     contentCSS: true, // For HBS
//   });
// });

// module.exports = router;
