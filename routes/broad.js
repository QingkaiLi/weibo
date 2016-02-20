'use strict'

var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

const PAGE_SIZE = 8;

function generateArray(sourceArr) {
    let num = Math.floor(Math.random()*sourceArr.length);
    let arr = [];
    for (let i =0; i < num; i ++) {
        arr.push(sourceArr[Math.floor(Math.random()*sourceArr.length)])
    }
    return arr;
}
function generatePics() {
    let count = Math.floor(Math.random()*9);
    let pics = [];
    for (let i=0; i < count; i ++) {
        pics.push("weibo_content"+(Math.floor(Math.random()*19) +1)+".jpg");
    }

    return generateArray(pics, 9);
}
router.get('/list/:page', function(req, res, next) {
    setTimeout(function(){
        var page = req.params.page || 1;
        fs.readFile( path.join(__dirname,'/api/broadList.json'),
            function(err, dt) {
                var data = JSON.parse(dt);
                var titles = data.titles,
                    topics = data.topics,
                    contents = data.contents;
                var results = [];
                for (var i =0; i < PAGE_SIZE; i++) {
                    results.push({
                        id: Math.floor(Math.random()* 100),
                        title: titles[Math.floor(Math.random()*titles.length)],
                        topics: Math.random() > 0.5? generateArray(topics): [],
                        content: contents[Math.floor(Math.random()*contents.length)],
                        images: generatePics(),
                        createTime: ((page - 1)* PAGE_SIZE + i) +'小时前',
                        likes: Math.floor(Math.random() * 100),
                        comments: Math.floor(Math.random() * 100),
                        forwards: Math.floor(Math.random() * 100),
                        followed: Math.random() > 0.5,
                        like: Math.random() > 0.5
                    })
                }
                //results = results.slice(0,2)
                res.setHeader('Content-Type', 'application/json');
                res.send(results);
            });
    }, 1000);
});
router.get('/get/:id', function(req, res, next) {
    setTimeout(function(){
        fs.readFile( path.join(__dirname,'/api/broadList.json'),
            function(err, dt) {
                var data = JSON.parse(dt);
                var titles = data.titles,
                    topics = data.topics,
                    contents = data.contents;
                var result = {
                    id: Math.floor(Math.random()* 100),
                    title: titles[Math.floor(Math.random()*titles.length)],
                    topics: Math.random() > 0.5? generateArray(topics): [],
                    content: contents[Math.floor(Math.random()*contents.length)],
                    images: generatePics(),
                    likes: Math.floor(Math.random() * 100),
                    comments: Math.floor(Math.random() * 100),
                    forwards: Math.floor(Math.random() * 100)
                }

                res.setHeader('Content-Type', 'application/json');
                res.send(result);
            });
    }, 1000);
});
router.get('/:id/forward/:page', function(req, res, next) {
    setTimeout(function(){
        var page = req.params.page || 1;
        fs.readFile( path.join(__dirname,'/api/broadList.json'),
            function(err, dt) {
                var data = JSON.parse(dt);
                var titles = data.titles,
                    topics = data.topics,
                    contents = data.contents;
                var results = [];
                for (var i =0; i < PAGE_SIZE; i++) {
                    results.push({
                        id: Math.floor(Math.random()* 100),
                        title: titles[Math.floor(Math.random()*titles.length)],
                        createTime: ((page - 1)* PAGE_SIZE + i) +'小时前',
                        topics: Math.random() > 0.5? generateArray(topics): [],
                        content: contents[Math.floor(Math.random()*contents.length)]
                    })
                }
                res.setHeader('Content-Type', 'application/json');
                res.send(results);
            });
    }, 1000);
});
router.get('/:id/comment/:page', function(req, res, next) {
    setTimeout(function(){
        var page = req.params.page || 1;
        fs.readFile( path.join(__dirname,'/api/broadList.json'),
            function(err, dt) {
                var data = JSON.parse(dt);
                var titles = data.titles,
                    topics = data.topics,
                    contents = data.contents;
                var results = [];
                for (var i =0; i < PAGE_SIZE; i++) {
                    results.push({
                        id: Math.floor(Math.random()* 100),
                        title: titles[Math.floor(Math.random()*titles.length)],
                        createTime: ((page - 1)* PAGE_SIZE + i) +'小时前',
                        topics: Math.random() > 0.5? generateArray(topics): [],
                        content: contents[Math.floor(Math.random()*contents.length)]
                    })
                }
                res.setHeader('Content-Type', 'application/json');
                res.send(results);
            });
    }, 1000);
});



module.exports = router;
