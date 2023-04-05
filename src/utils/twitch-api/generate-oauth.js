// import request from 'postman-request';


// export default async function generateOauth(url, clientID, clientSecret, callback) {

//     const options = {
//         uri: url,
//         json: true,
//         body:{
//             client_id: clientID,
//             client_secret: clientSecret,
//             grant_type: 'client_credentials'
//         }
//     };
//     request.post(options, (err, res, body) => {
//         if(err) {
//                 return console.log(err);
//             }
//             console.log("OAUTH QUERIED SUCCESSFULLY")
//         callback(res);
//         }
//         )
// };


export default async function generateOauth(url, clientID, clientSecret, callback) {

    const options = {
        uri: url,
        json: true,
        body:{
            client_id: clientID,
            client_secret: clientSecret,
            grant_type: 'client_credentials'
        }
    };
  
    const response = await fetch(options.url, {
      uri: options.url,
      method: "GET",
      json: options.json,
      body: options.body
    }
    )
    const result = await response.json()
    console.log(result)
  
  
  };