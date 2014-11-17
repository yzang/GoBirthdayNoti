app=require('../app')
var Friend = require('../models/friend');

app.post('/api/syncFriends',function(req,res){
	console.log("sync called")
  var friends = req.body.friends;
  var remindOnBirthday=req.body.remindOnBirthday;
  var remindBeforeBirthday=req.body.remindBeforeBirthday
  for (var friend in friends){
  	var elem={id:friend.id,name:friend.name,day:friend.day,month:friend.month,year:friend.year,remindOnBirthday:remindOnBirthday,remindBeforeBirthday:remindBeforeBirthday};
	Friend.push(elem)
  }

})

app.get('/api/getFriends',function(req,res){
  
    res.json(Friend);

})