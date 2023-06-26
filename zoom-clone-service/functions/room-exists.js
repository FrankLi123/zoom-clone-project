exports.handler = function(context, event, callback) {

    // get client 

    const client = context.getTwilioClient();

    const roomId = event.roomId; // ??? ??? 

    const response = new Twilio.Response();

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    };
  
    response.setHeaders(headers);
  

    // check whether a room exists
    client.video.rooms(roomId).fetch().then( (room) =>{

    
        
        response.setBody({
            roomExists: false,
            room,
        });

        return callback(null, response);

    })
  
    return callback(null, response);
  };

  // Testing Github repo recording