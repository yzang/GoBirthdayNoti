app=require('../app')
var Device=require('../models/device')

app.post('/api/registerDevice',function(req,res){
  var regId = req.body.regId;
  if(regId in Device){

  }
  else{
  	Device.push(regId)
  }
  res.end();

})

app.get('/api/getDevices',function(req,res){
  
    res.json(Device);

})