 
var Sended=require('../models/sended')
var Friends=require('../models/friend')
var Devices=require('../models/device')
var gcm = require('node-gcm');
var message = new gcm.Message();
var sender = new gcm.Sender('AIzaSyBi9ryCfCAoG-1w8uhyo0L_vIA4_fbazUk');

//var sender=new gcm.Sender('AIzaSyDzgtR66yu2QhKK692VDEyzex2H-Q9ufq4');
var registrationIds = []; 
// At least one token is required - each app will register a different token
//registrationIds.push('APA91bG42DGVzyS8v2x-lBzntnW-70WOAGibHTRLyazS72gJfZvtzplsW5mpRr1Ix-6GWvjxdEH3AWtqNUuE24yEFD7EkXjB6Te3TWBq79gRJ7SpQonqo9rh6iaoFICipl0dvdnbjsqpqr3uZRqBqseDMXHS0_eFOw');
 


function sendNotification(){
	var date=new Date();
	if(Devices.length>=0){
		for (var i=0;i<Friends.length;i++){
			if(Friends[i].day==date.getDate()&&Friends[i].month==(date.getMonth()+1)){
				if(Sended.indexOf(Friends[i].id)>-1){
					console.log("sended")
				}
				else{
					console.log("not sended, send now")
					Sended.push(Friends[i].id);
					var message = new gcm.Message();
					message.addData('title','GoBirthday');
					message.addData('message',Friends[i].name+'\'s birthday is comming');
					message.addData('msgcnt','1');
					message.collapseKey = 'demo';
					message.delayWhileIdle = true;
					message.timeToLive = 3;
					sender.send(message, Devices, 3, function (result) {
					    console.log(result);
					});
				}
			}
		}

	}


}
setInterval(sendNotification,30000)

// sender.send(message, registrationIds, 3, function (result) {
//     console.log(result);
// });

