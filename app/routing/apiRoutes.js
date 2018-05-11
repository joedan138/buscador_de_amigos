var amigos = require('../data/amigos.js');

module.exports = function (app) {

    app.get("/api/amigos", function (req, res) {
        res.json(amigos);
    });

    app.post('/api/amigos', function (req, res) {
        var difference = 40;
        var matchName = '';
        var matchPhoto = '';

        amigos.forEach(function(friend) {
        var matchedScoresArray = [];
        var totalDifference = 40;

        function add(total, num) {
            return total + num;
        }
        for (var i = 0; i < friend.scores.length; i++) {
            matchedScoresArray.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friend.scores[i])));

        }
        totalDifference = matchedScoresArray.reduce(add, 0);
        if (totalDifference < difference) {
        difference = totalDifference;
        matchName = friend.name;
        matchPhoto = friend.photo;
    }
});
res.json({
    name: matchName,
    photo: matchPhoto
});
// This adds the new users sent data object to amigos.js
amigos.push(req.body);
});
}
