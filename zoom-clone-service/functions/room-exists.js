exports.handler = function(context, event, callback) {

    // get client 

    // const client = context.getTwilioClient();

    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    const apiKey = process.env.API_KEY;
    const apiSecret = process.env.API_SECRET;

    const client = require('twilio')(accountSid, authToken);

    const roomId = event.roomId; 

    const response = new Twilio.Response();

    const headers = {
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Methods":"GET, PUT, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":"Content-Type",
      "Content-Type":"application/json",
    };
  
    response.setHeaders(headers);  

    client.video.v1.rooms('sswsw').fetch().then( (room) =>{
        
        response.setBody({
            roomExists: false,
        });

    })

    return callback(response);
  };