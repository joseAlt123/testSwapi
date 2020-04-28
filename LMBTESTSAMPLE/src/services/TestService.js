const DynamoTestDB = require("../db/DynamoTestDB");
const SwapiDB = require("../db/SwapiDB");
const DynamoReq = require("../models/DynamoReq");
let moment = require('moment');

class TestService {
  
  static async testData(payload) {
    console.log("");
    console.log("SERVICE: testData:");
    console.log("");
    var fechaActual = moment();
    let fechaActualFormato = fechaActual.format('YYYYMMDD');
    let horaActualFormato = moment.utc().subtract('hours', 5).format('HHmmss');
    let response = null;

    let dynamoReq = new DynamoReq();

    //Obtencion de data de vehiculos
    dynamoReq = await SwapiDB.obtenerData(payload);

    if (dynamoReq){
      dynamoReq.id = fechaActualFormato + horaActualFormato;
      //Registro de vehiculo en dynamo
      response = await DynamoTestDB.saveDataTrace(dynamoReq);
    }

    return response;
  }
  
  static async buildResponse(payload, accion) {
    let alert = accion;
    let resdata = payload;
    let rescode;

    const obj = {
      type: alert,
      code: rescode,
      data: resdata
    };

    const response = {
      statusCode: 200,
      body: JSON.stringify(obj),
      headers: {

      }
    };

    return response;
  }  
  
  static async buildErrorResponse(event, error) {
    const obj = {
      type: "error",
      code: 101,
      data: null/*error*/
    };
  
    const response = {
      statusCode: error.statusCode || error.httpCode,
      body: JSON.stringify(obj),
      headers: {
       
      }
    };
	
    return response;
  }    

}

module.exports = TestService;