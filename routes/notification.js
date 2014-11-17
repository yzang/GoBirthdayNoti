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
	console.log("Friends:"+Friends)
	if(DEVICES.length>0){
		console.log("device found")
		// console.log("Data:"+date.getDate()+" Month:"+date.getMonth())
		for (var i=0;i<FRIENDS.length;i++){
			console.log("I'm in friends, count:"+i)
			if(FRIENDS[i].remindOnBirthday&&FRIENDS[i].day==date.getDate()&&FRIENDS[i].month==(date.getMonth()+1)){
				if(SENDER.indexOf(FRIENDS[i].id)>-1){
					console.log("sended")
				}
				else{
					console.log("not sended, send now")
					SENDER.push(FRIENDS[i].id);
					var message = new gcm.Message();
					message.addData('title','GoBirthday');
					message.addData('message',FRIENDS[i].name+'\'s birthday is comming');
					message.addData('msgcnt','1');
					message.collapseKey = 'demo';
					message.delayWhileIdle = true;
					message.timeToLive = 3;
					sender.send(message, DEVICES, 3, function (result) {
					    console.log(result);
					});
				}
			}
			else if(FRIENDS[i].remindBeforeBirthday&&FRIENDS[i].day==(date.getDate()+1)&&FRIENDS[i].month==(date.getMonth()+1)){
				if(SENDED.indexOf(FRIENDS[i].id)>-1){
					console.log("sended")
				}
				else{
					console.log("not sended, send now")
					SENDED.push(FRIENDS[i].id);
					var message = new gcm.Message();
					message.addData('title','GoBirthday');
					message.addData('message',FRIENDS[i].name+'\'s birthday is comming');
					message.addData('msgcnt','1');
					message.collapseKey = 'demo';
					message.delayWhileIdle = true;
					message.timeToLive = 3;
					sender.send(message, DEVICES, 3, function (result) {
					    console.log(result);
					});
				}
			}
		}

	}


}

function startNofity(){
	sendNotification();
	setTimeout(startNofity,20000)
}

startNofity();
//setInterval(sendNotification,20000);

// sender.send(message, registrationIds, 3, function (result) {
//     console.log(result);
// });

