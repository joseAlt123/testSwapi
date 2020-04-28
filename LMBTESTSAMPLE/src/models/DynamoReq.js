class DynamoReq {

    constructor({
        id = undefined,
        nombre = undefined,
        modelo = undefined,
        manufactura = undefined,
        costo_credito = undefined,
        longitud = undefined,
        maxima_velocidad = undefined,
        pasajeros = undefined,
        carga_capacidad = undefined,
        clase_vehiculo = undefined
    }) {
        this.id = id;
        this.nombre = nombre;
        this.modelo = modelo;
        this.manufactura = manufactura;
        this.costo_credito = costo_credito;
        this.longitud = longitud;
        this.maxima_velocidad = maxima_velocidad;
        this.pasajeros = pasajeros;
        this.carga_capacidad = carga_capacidad;
        this.clase_vehiculo = clase_vehiculo;
    }
}

module.exports = DynamoReq;