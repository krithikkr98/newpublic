var AWS = require("aws-sdk");

let dynamo = new AWS.DynamoDB.DocumentClient();



let userId = "user11Test11"
let remove = function () {

    if(!userId){
        console.log("user::parameter_missing::bad_request")
    }

    var params = {
        TableName: "user",
        Key: {
            "user_id": userId
        }
    };
    dynamo.delete(params, function (err, data) {

        if (err) {
            console.log("user::delete::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("user::delete::success");
        }
    });
}

remove();
