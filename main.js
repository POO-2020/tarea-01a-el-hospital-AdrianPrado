import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"

class Main{

    probarAño(){
        let fecha1 = new Fecha(11,2,2021)
        console.log(fecha1.getAños())
    }

    probarMeses(){
        let fecha1 = new Fecha(19,2,2030)
        console.log(fecha1.getMeses())
    }

    probarSemanas(){
        let fecha1 = new Fecha(10,7,2023)
        console.log(fecha1.getSemanas())
    }

    probarDias(){
        let fecha1 = new Fecha(29,10,2022)
        console.log(fecha1.getDias())
    }

    probarFecha(){
        let fecha1 = new Fecha(19,5,2025)
        console.log(fecha1.getFecha())
    }

    probarDiaFecha(){
        let fecha1 = new Fecha(22,5,2020)
        console.log(fecha1.getDiaFecha())
    }

    probarTiempo() {
        let hora1 = new Tiempo(7, 50, "am")
        let hora2 = new Tiempo(8, 23, "pm")

        console.log(hora1.getFormato12())
        console.log(hora2.getFormato24())

    }

    probarNombre() {
        this.nombre = new Nombre("Adrian", "Mendez", "Prado")
        console.log(this.nombre.getNombreCompleto())
        console.log(this.nombre.getApellidoNombre())
        console.log(this.nombre.getIniciales())
    }
    
    probarPaciente() {
        this.paciente = new Paciente(this.nombre, new Fecha(22, 5, 2001), "3121115653")
        console.log(this.paciente.getPerfil())
    }

    probarDoctor() {
        this.doctor = new Doctor("Cedula: 8754", "Neurologo", "Juan Perez", "3129283717")
        console.log(this.doctor.getPerfil())
    }

    probarCita() {
        let cita1 = new Cita(new Fecha(29,2,2020), new Tiempo(8,30,"pm"), new Doctor("8754", "Neurologo", new Nombre("Juan", "Perez"), 3129283717), new Paciente(new Nombre("Adrian", "Mendez", "Prado"), new Fecha(22,5,2001), 3121115653))
        console.log(cita1.getPerfil())
    }
}

let app = new Main()
app.probarAño()
app.probarMeses()
app.probarSemanas()
app.probarDias()
app.probarFecha()
app.probarDiaFecha()
app.probarTiempo()
app.probarNombre()
app.probarPaciente()
app.probarDoctor()
app.probarCita()