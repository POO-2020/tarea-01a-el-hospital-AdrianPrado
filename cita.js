import Nombre from "./nombre.js"
import Paciente from "./paciente.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Doctor from "./doctor.js"

export default class Cita {
/**
 * @param {Fecha} fecha fecha de la cita
 * @param {Tiempo} hora hora de la cita
 * @param {Doctor} doctor nombre del doctor de la cita
 * @param {Paciente} paciente nombre del paciente
 */
    constructor(fecha, hora, doctor, paciente){
        this.fecha = fecha
        this.hora = hora
        this.doctor = doctor
        this.paciente = paciente
    }

    getPerfil(){
        return `${this.fecha.getFecha()}, ${this.hora.getFormato24()}, Dr. ${this.doctor.nombre.apellidoPaterno}, ${this.paciente.nombre.getNombreCompleto()}`
    }
}