 
var Sended=require('../models/sended')
var Friends=require('../models/friend')
var gcm = require('node-gcm');
var message = new gcm.Message();
var sender = new gcm.Sender('AIzaSyBi9ryCfCAoG-1w8uhyo0L_vIA4_fbazUk');
//var sender=new gcm.Sender('AIzaSyDzgtR66yu2QhKK692VDEyzex2H-Q9ufq4');
var registrationIds = []; 
// At least one token is required - each app will register a different token
registrationIds.push('APA91bHiq8o6ySr_A2ylKMSSBVlCz3LRB95stQzA-pJhsXGQ3U8sXuKQxtJM2ONqEs8hHFO7sg0tXcZTLqHH09yIPKre-SkwbdswQ3J-9WuokxrwXNNpPIelpsNdfJDq8LjYEQHj8xrSEAxeC7kXbWYkFsTjc34oOQ');
 



function sendNotification(){
	var date=new Date();
	for (var i=0;i<Friends.length;i++){
		if(Friends[i].day==date.getDate()&&Friends[i].month==date.getMonth()+1){
			if(Friends[i].id in Sended){

			}
			else{
				Sended.push(Friends[i].id);
				var message = new gcm.Message();
				message.addData('title','GoBirthday');
				message.addData('message',Friends[i].name+' birthday is comming');
				message.addData('msgcnt','1');
				message.collapseKey = 'demo';
				message.delayWhileIdle = true;
				message.timeToLive = 3;
				sender.send(message, registrationIds, 3, function (result) {
				    console.log(result);
				});
			}
		}
	}

}
setInterval(sendNotification,30000)

// sender.send(message, registrationIds, 3, function (result) {
//     console.log(result);
// });

