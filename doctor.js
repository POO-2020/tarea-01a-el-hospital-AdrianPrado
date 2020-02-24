export default class Doctor {

    constructor(cedula, especialidad, nombre, telefono) {
        this.cedula = cedula
        this.especialidad = especialidad
        this.nombre = nombre
        this.telefono = telefono
    }

    getPerfil() {
        return `${this.cedula}, ${this.especialidad}, ${this.nombre}, ${this.telefono}`
    }
}