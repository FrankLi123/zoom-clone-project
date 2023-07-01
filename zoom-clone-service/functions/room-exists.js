exports.handler = function(context, event, callback) {

    // get client 

    // const client = context.getTwilioClient();

    


    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    const apiKey = process.env.API_KEY;
    const apiSecret = process.env.API_SECRET;

    const client = require('twilio')(accountSid, authToken);


    client.serverless.v1.services('ZS0f67da671c402a7e641482af16fce0b9')
    .update({uiEditable: true})
    .then(service => console.log(service.friendlyName));

    const roomId = event.roomId; 

    const response = new Twilio.Response();

    const headers = {
      "Access-Control-Allow-Origin":"http://localhost:3000",
      "Access-Control-Allow-Methods":"GET, PUT, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":"Content-Type",
      "Content-Type":"application/json",
    };
  
    response.setHeaders(headers);  

    client.video.v1.rooms('test-roomRM2f79dc5e394eaecbf2993a5e28a8cbfc').fetch().then( (room) =>{
        
        response.setBody({
            roomExists: false,
        });

    })

    return callback(null, response);
  };