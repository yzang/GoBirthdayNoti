 
var Friends=require('../models/friend')
var gcm = require('node-gcm');
var message = new gcm.Message();
var sender = new gcm.Sender('AIzaSyBi9ryCfCAoG-1w8uhyo0L_vIA4_fbazUk');
//var sender=new gcm.Sender('AIzaSyDzgtR66yu2QhKK692VDEyzex2H-Q9ufq4');
var registrationIds = []; 
// At least one token is required - each app will register a different token
registrationIds.push('APA91bHiq8o6ySr_A2ylKMSSBVlCz3LRB95stQzA-pJhsXGQ3U8sXuKQxtJM2ONqEs8hHFO7sg0tXcZTLqHH09yIPKre-SkwbdswQ3J-9WuokxrwXNNpPIelpsNdfJDq8LjYEQHj8xrSEAxeC7kXbWYkFsTjc34oOQ');
 

message.addData('title','My Game');
message.addData('message','Your turn!!!!');
message.addData('msgcnt','1');
message.collapseKey = 'demo';
message.delayWhileIdle = true;
message.timeToLive = 3;

function sendNotification(){
	console.log('send'+JSON.stringify(Friends))
}
setInterval(sendNotification,5000)

// sender.send(message, registrationIds, 3, function (result) {
//     console.log(result);
// });

