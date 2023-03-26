import request from 'postman-request';


export default function generateOauth(url, clientID, clientSecret, callback) {

    const options = {
        uri: url,
        json: true,
        body:{
            client_id: clientID,
            client_secret: clientSecret,
            grant_type: 'client_credentials'
        }
    };
    request.post(options, (err, res, body) => {
        if(err) {
                return console.log(err);
            }
        callback(res);
        }
    )
};