class Paciente {
    constructor(Nombre, Apellido, Dia, Orden, telefono, doctor) {
      this.Nombre = Nombre;
      this.Apellido = Apellido;
      this.Dia = Dia;
      this.Orden = Orden;
      this.telefono = telefono;
      this.doctor = doctor;
    }
  }
let arrayFormulario = [];

//LOCALSTORAGE Y OPTIMIZACION 

localStorage.getItem("arrayFormulario")
  ? (arrayFormulario = JSON.parse(localStorage.getItem("arrayFormulario")))
  : localStorage.setItem("arrayFormulario", JSON.stringify(arrayFormulario));
formRegistro.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let Nombre = document.getElementById("nombres").value;
    let Apellido = document.getElementById("apellidos").value;
    let Dia = document.getElementById("dia").value;
    let Orden = document.getElementById("orden").value;
    let telefono = document.getElementById("telefono").value;    
    const formulario = new Paciente(
      Nombre,
      Apellido,
      Dia,
      Orden,
      telefono,
      
    );
    arrayFormulario.push(formulario);
    localStorage.setItem("arrayFormulario", JSON.stringify(arrayFormulario));
    formRegistro.reset();
    Swal.fire(
      "Turno Registrado",
      `Hola ${Nombre}! Has registrado tu turno con exito.`
    );
  });
  
  const verTurno = document.getElementById("verTurno");
  const turnos = document.getElementById("turnos");
  verTurno.addEventListener("click", () => {
    turnos.innerHTML = "";
    const tarjetaTurno = JSON.parse(localStorage.getItem("arrayFormulario"));
    tarjetaTurno.forEach((elementoTurno) => {
      Swal.fire(
        `${elementoTurno.Nombre} ${elementoTurno.Apellido}`,
        `Turno el dia ${elementoTurno.Dia} a las ${elementoTurno.Orden}`        
      );
      
    });
  }); 

