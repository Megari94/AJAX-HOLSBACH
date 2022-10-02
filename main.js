//MANIPULACION DE DOM --------Tarjetas medicos---------

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
                 <a href="formulario.html" type="submit" class="reserva" target="_blank">Reservar</a>
              </div>
          </div>
          `;
  });
  document.getElementById("card-doctores").innerHTML = html;
  let reservar = document.getElementById("card-doctores");
  reservar.onclick = () => {
    console.log("Click");
  };
}
traerDoctores();

//PERSONAL DE CLINICA //FIND//

fetch("datos.json")
  .then((res) => res.json())
  .then((datos) => {
    let drDispo = datos.find((e) => e.especialidad == "Clinico");
    const arrayClinic = [];
    arrayClinic.push(drDispo);
    let html = "";
    arrayClinic.forEach((clinic) => {
      html += `
      <div class = "personal-clinica">
          <p>Personal de clinica Actual</p>              
            <h3>${clinic.nombre}</h3>                       
            <p class="card-text">${clinic.especialidad}</p>                             
        </div>                 
        `;
    });
    document.getElementById("noticias").innerHTML = html;
  });

//PERSONAL QUE TRABAJE CON OBRA SOCIAL //FILTER//

fetch("datos.json")
  .then((res) => res.json())
  .then((datos) => {
    let prep = datos.filter((e) => e.prepaga == "SI");
    let html = '<p class = "personal-pre1">Personal con Prepaga Actual</p>';
    prep.forEach((pre) => {
      html += `       
      <div class = "personal-pre">              
            <h3 class="title">${pre.nombre}</h3>   
            <p class="card-text">${pre.especialidad}</p>              
      </div>
         
             `;
    });
    document.getElementById("noticias2").innerHTML = html;
  });