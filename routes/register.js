app=require('../app')
var Device=require('../models/device')

app.post('/api/registerDevice',function(req,res){
  var regId = req.body.regId;
  if(DEVICES.indexOf(regId)>-1){

  }
  else{
  	DEVICES.push(regId)
  }
  
  res.end();

})

app.get('/api/getDevices',function(req,res){
  
    res.json(DEVICES);

})