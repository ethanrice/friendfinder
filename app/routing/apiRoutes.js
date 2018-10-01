var friendInfo = require('../data/friends.js');
var path = require('path');

var totalDifference = 0;

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    app.post('api/friends', function(req, res){
        var match = {
            name:"",
            image:"",
            matchDiffernce: 1000
        };
        var friendData = req.body;
        var friendName = friendData.name;
        var friendImage = friendData.image;
        var friendPoints = friendData.points;
        var totalDifference = 0;

        for(var i = 0; i < [friends].length-1; i++){
            console.log(friends[i].name);
            totalDifference = 0;

            for(var x = 0; x < 10; x++){
                totalDifference += Math.abs(parseInt(friendPoints[x]) - parseInt(friends[i].points[x]));
                if (totalDifference <= match.difference){
                    match.name = friends[i].name;
                    match.image = friends[i].image;
                    match.difference = totalDifference;
                }
            }
        }

        friends.push(friendData);
        res.json(match);
    })
};