/*   class Horarios {
    constructor(dia, nombre, especialidad, prepaga, img) {
      this.dia = dia;
      this.nombre = nombre;
      this.especialidad = especialidad;
      this.prepaga = prepaga;
      this.img = img;
    }
  }  */
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

//TABLA DE DOCTORES

/*   let lunes = new Horarios(
      "Lunes",
      "Dr. Lautaro Gimenez",
      "Clinico",
      "SI",
      "https://img.freepik.com/foto-gratis/doctor-brazos-cruzados-sobre-fondo-blanco_1368-5790.jpg?w=2000"
    );
    let martes = new Horarios(
      "Martes",
      "Lic. Agustín Palacios",
      "Nutricionista",
      "NO",
      "https://bosworthinstitute.com/wp-content/uploads/2020/07/Nutricionista-bosworth-carrera.png"
    );
    let martes2 = new Horarios(
      "Martes",
      "Lic. Maria Cordoba",
      "Nutricionista",
      "NO",
      "https://nutricionistahuelva.es/ficheros/servicios/psiconutricion_C_4.jpg"
    );
    let mier = new Horarios(
      "Miercoles",
      "Dra. Rocio Matozo",
      "Pediatra",
      "SI",
      "https://ximenamargain.com/wp-content/uploads/2021/07/DOCTORA-XIMENA-LINKS-PEDIATRA.jpg"
    );
    let vier = new Horarios(
      "Viernes",
      "Dr. Gregorio Muñoz",
      "Cardiologia",
      "NO",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8a-31MUy64qk80BIpp8cpv8q273vQFMIkXBdWmnNU96bXD1fKfG5vYW82Nf-kRMq1VM&usqp=CAU"
    );
    
    const dr = [];
    
    dr.push(lunes);
    dr.push(martes);
    dr.push(martes2);
    dr.push(mier);
    dr.push(vier);  */

//MANIPULACION DE DOM

async function traerDoctores() {
  let res = await fetch("datos.json");
  let json = await res.json();

  console.log(json);
  let html = "";
  json.forEach((tarjetaDr) => {
    html += `
          <div class="card" >
              <h3 class="title" align="center">${tarjetaDr.nombre}</h3>
              <img class="card-img-top" style= "height: 7rem;" src=${tarjetaDr.img}>
              <div class="card-body">            
                
                
                <p class="card-text">${tarjetaDr.especialidad}</p>
                
               
              </div>
          `;
  });
  document.getElementById("card-doctores").innerHTML = html;
}
traerDoctores();

// LOCAL STORAGE
let arrayFormulario = [];

//OPTIMIZANDO

localStorage.getItem("arrayFormulario") ?
  (arrayFormulario = JSON.parse(localStorage.getItem("arrayFormulario"))) :
  localStorage.setItem("arrayFormulario", JSON.stringify(arrayFormulario));

//TABLA DE TURNOS
//USO DE EVENTOS

formRegistro.addEventListener("submit", (e) => {
  e.preventDefault();

  let Nombre = document.getElementById("nombres").value;
  let Apellido = document.getElementById("apellidos").value;
  let Dia = document.getElementById("dia").value;
  let Orden = document.getElementById("orden").value;
  let telefono = document.getElementById("telefono").value;
  let doctor = document.getElementById("doctor").value;
  const formulario = new Paciente(
    Nombre,
    Apellido,
    Dia,
    Orden,
    telefono,
    doctor
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
      `Turno el dia ${elementoTurno.Dia} a las ${elementoTurno.Orden}, con el doctor: ${elementoTurno.doctor}`
    );
    /* turnos.innerHTML += `
             <div align="center">
                 <p><b>${elementoTurno.Nombre} ${elementoTurno.Apellido}, turno el dia ${elementoTurno.Dia}, a las ${elementoTurno.Orden}, con el doctor: ${elementoTurno.doctor} </b></p>                            
                              
                               
              </div>
             `; */
  });
});

//DOCTOR DISPONIBLE EN CLINICA

/* async function findEspecialidad() {
  let res = await fetch("datos.json");
  let json = await res.json();

  let drDispo = json.find((e) => e.especialidad == "Clinico");

  const arrayClinico = [];
  arrayClinico.push(drDispo);
  console.log(arrayClinico);

  let html = "";

  arrayClinico.forEach((clinic) => {
    html += `<div class = "personal-clinica">
          <p>Personal de clinica Actual:</p>
                
            <h3>${clinic.nombre}</h3>                       
            <p class="card-text">${clinic.especialidad}</p>
            <p class="card-text">Prepaga: ${clinic.prepaga}</p>
                  
        </div>
                 
        `;
  });
  console.log(html);
  document.getElementById("noticias").innerHTML = html;
}
findEspecialidad(); */

fetch("datos.json")
  .then((res) => res.json())

  .then((datos) => {

    let drDispo = datos.find((e) => e.especialidad == "Clinico");
    console.log(drDispo)
    const arrayClinic = [];

    arrayClinic.push(drDispo);

    console.log(arrayClinic);
    let html = "";

    arrayClinic.forEach((clinic) => {
      html += `<div class = "personal-clinica">
          <p>Personal de clinica Actual</p>
          <img class="card-img-top" style= "width: 7rem;" src=${clinic.img}>    
            <h3>${clinic.nombre}</h3>                       
            <p class="card-text">${clinic.especialidad}</p>
            <p class="card-text">Prepaga: ${clinic.prepaga}</p>
                  
        </div>
                 
        `;
    });
    console.log(html);
    document.getElementById("noticias").innerHTML = html;
  })

//PERSONAL QUE TRABAJE CON OBRA SOCIAL

 fetch("datos.json")
  .then((res) => res.json())

  .then((datos) => {

    let prep = datos.filter((e) => e.prepaga == "SI");
    console.log(prep);

    let html = '<p class = "personal-pre1">Personal con Prepaga Actual</p>';

    prep.forEach((pre) => {
      html += `
       
      <div class = "personal-pre">                
        <div class="card" style="width: 13rem;">
        <img class="card-img-top" style= "height: 7rem;" src=${pre.img}>
            <h3 class="title" align="center">${pre.nombre}</h3>      
            <div class="card-body">         
                <p class="card-text">${pre.especialidad}</p>       
            </div>          
          
      </div>
         
             `;
    });
    document.getElementById("noticias2").innerHTML = html;
  }) 