const DynamoReq = require("../models/DynamoReq");
const request = require("request-promise")

class SwapiDB {

  static async obtenerData() {
   console.log("");
   console.log(":::obtenerData :::");
   console.log("");

   let RUTA = process.env.URL_SWAPI; 

   let result = new DynamoReq();

   request({
    uri: RUTA,
    json: true,
    }).then(vehiculos => {
      vehiculos.forEach(vehiculo => {
            result.nombre = vehiculo.name;
            result.modelo = vehiculo.model;
            result.manufactura = vehiculo.manufacturer;
            result.costo_credito = vehiculo.cost_in_credits;
            result.longitud = vehiculo.length;
            result.maxima_velocidad = vehiculo.max_atmosphering_speed;
            result.pasajeros = vehiculo.passengers;
            result.carga_capacidad = vehiculo.cargo_capacity;
            result.clase_vehiculo = vehiculo.vehicle_class;
        })
    });

    return result;
  }
}

module.exports = SwapiDB;