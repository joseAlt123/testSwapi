const AWS = require("aws-sdk");

class DynamoTestDb {

  static async saveData(dynamoReq) {
   console.log("");
   console.log(":::saveData :::"+JSON.stringify(dynamoReq));
   console.log("");

   return new Promise((resolve) => {
    try {
      var params = {
        TableName: 'TestSampleDB',
        Item:{
            "id": dynamoReq.id,
            "nombre": dynamoReq.nombre,
            "modelo": dynamoReq.modelo,
            "manufactura": dynamoReq.manufactura,
            "costo_credito": dynamoReq.costo_credito,
            "longitud": dynamoReq.longitud,
            "maxima_velocidad": dynamoReq.maxima_velocidad,
            "pasajeros": dynamoReq.pasajeros,
            "carga_capacidad": dynamoReq.carga_capacidad,
            "clase_vehiculo": dynamoReq.clase_vehiculo
          }
      };

      var ddb = new AWS.DynamoDB.DocumentClient (); 
      ddb.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            resolve(JSON.stringify(err, null, 2) || ' ERROR ADD DYNAMO');
        } else {
            resolve("OK");
        }
      });
    } catch (error) {
      console.error(error);
    }
   });
  }
}

module.exports = DynamoTestDb;