app=require('../app')
var Friend = require('../models/friend');
var Sended = require('../models/sended');

app.post('/api/syncFriends',function(req,res){
  var friends = req.body.friends;
  var remindOnBirthday=req.body.remindOnBirthday;
  var remindBeforeBirthday=req.body.remindBeforeBirthday
  Friend=[];
  for (var i=0;i<friends.length;i++){
  	 var elem={"id":friends[i].id,"name":friends[i].name,"day":friends[i].day,"month":friends[i].month,"year":friends[i].year,"remindOnBirthday":remindOnBirthday,"remindBeforeBirthday":remindBeforeBirthday};
	   Friend.push(elem)
  }
  res.end();

})

app.get('/api/getFriends',function(req,res){
  
    res.json(Friend);

})

app.get('/api/getSended',function(req,res){
  
    res.json(Sended);

})

app.post('api/deleteFriend',function(req,res){
  var id=req.body.friendId;
  var index=Sended.indexOf(id)
  if(index>-1){
    Sended.splice(index,1)
  }

})