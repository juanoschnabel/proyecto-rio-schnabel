// MODIFICACIONES SOBRE LA PÁGINA RESERVAS
let divReserva = document.getElementById("div-reserva");
let text = "<p> Elegí tu lugar preferido para pasar una gran noche!! </p>";
let p = document.createElement("p");
p.innerHTML = text;
divReserva.appendChild(p);

//VARIABLES FORM
const reservForm = document.getElementById("form");
let reservas = [];
let reserva = {};

reservForm.addEventListener("submit", (e) => {
  e.preventDefault();
  generarReserva();
  agregarReserva(reservas);
  reservaStorage(reservas);
  document.getElementById("form").reset();
});
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("reserva")) {
    reservas = recuperarReserva();
    agregarReserva(reservas);
  }
});

const floor = (arriba, abajo) => {
  const floor = arriba.checked == true ? arriba.value : abajo.value;
  return floor;
};
const space = (adentro, afuera) => {
  const space = adentro.checked == true ? adentro.value : afuera.value;
  return space;
};
const contadorDeCaracteres = (number) => {
  return number.toString().length;
};
const validacionNombre = (nombre) => {
  const validacionNombre = !/^([a-zA-ZñÑáéíóúÁÉÍÓÚ])+$/i.test(nombre)
    ? false
    : true;
  return validacionNombre;
};
const validacionFecha = (date) => {
  const hoy = new Date();
  const fecha = new Date(date);
  const validacionFecha = fecha < hoy ? false : true;
  return validacionFecha;
};
const validacion = ({
  nombre,
  telefono,
  mail,
  dia,
  hora,
  personas,
  piso,
  espacio,
}) => {
  if (
    nombre &&
    telefono &&
    mail &&
    dia &&
    hora &&
    personas &&
    piso &&
    espacio != ""
  ) {
    if (personas > 0 && personas < 30) {
      if (!isNaN(telefono) && contadorDeCaracteres(telefono) == 10) {
        if (validacionFecha(dia) === true) {
          if (
            isNaN(nombre) &&
            contadorDeCaracteres(nombre) > 3 &&
            contadorDeCaracteres(nombre) <= 20 &&
            validacionNombre(nombre) === true
          ) {
            alert(
              `Usted, ${nombre}, hizo una reserva para ${personas} personas, el día ${dia} a las ${hora} horas, en el salón que se encuentra en ${piso}, en el sector de ${espacio}.\nLos datos de contacto registrados son:\nNúmero de teléfono:${telefono}\nEmail:${mail} \nLos esperamos!!`
            );
            reservas.push(reserva);
          } else {
            alert(
              "Ingrese un nombre válido que tenga entre 4 y 20 caracteres y que solo contenga letras"
            );
          }
        } else {
          alert("Ingrese una fecha válida");
        }
      } else {
        alert("Ingrese un teléfono válido");
      }
    } else {
      alert("La reserva admite un mínimo de 1 y un máximo de 30 personas");
    }
  } else {
    alert(
      "Para realizar la reserva correctamente debe completa todos los campos"
    );
  }
};
const generarReserva = () => {
  //ELEMENTOS DEL FORM
  const nombre = document.getElementById("name").value.toLowerCase();
  const telefono = Number(document.getElementById("phone").value);
  const mail = document.getElementById("mail").value;
  const dia = document.getElementById("date").value;
  const hora = document.getElementById("hour").value;
  const personas = Number(document.getElementById("persons").value);
  //CHECK RADIOS
  const arriba = document.getElementById("planta-alta");
  const abajo = document.getElementById("planta-baja");
  const adentro = document.getElementById("adentro");
  const afuera = document.getElementById("afuera");
  const piso = floor(arriba, abajo);
  const espacio = space(adentro, afuera);
  reserva = {
    nombre,
    telefono,
    mail,
    dia,
    hora,
    personas,
    piso,
    espacio,
  };
  validacion(reserva);
};

const agregarReserva = (reservas) => {
  const reservasCreadas = document.getElementById("reservasCreadas");
  const div = document.createElement("div");
  reservasCreadas.innerHTML = "";
  reservas.forEach((reserva) => {
    div.innerHTML += `
    <div class="card text-center mb-4 formato-tabla">
        <div class="card-body ms-2 fs-5 formato-DOM">
            <strong>Nombre</strong>: ${reserva.nombre} -
            <strong>Día</strong>: ${reserva.dia}
            <strong>Hora</strong>: ${reserva.hora}
            <strong>Cantidad de personas</strong>: ${reserva.personas}<br>
            <strong>Piso</strong>: ${reserva.piso}
            <strong>Lugar</strong>: ${reserva.espacio}
            <strong> Teléfono:</strong> ${reserva.telefono}<strong> <br>Mail:</strong> ${reserva.mail}<br>
            <button href="#" class="btn btn-danger" id="${reserva.nombre}" name="delete" value="${reserva.nombre}">Cancelar Reserva</button>
        </div>
    </div>
`;
    reservasCreadas.appendChild(div);
  });
  reservasCreadas.addEventListener("click", (e) => {
    deleteReserva(e.target.value);
  });
};
const deleteReserva = (nombre) => {
  reservas.forEach((reserva, index) => {
    reserva.nombre === nombre && reservas.splice(index, 1);
  });
  agregarReserva(reservas);
  reservaStorage(reservas);
};
const reservaStorage = (reservas) => {
  localStorage.setItem("reserva", JSON.stringify(reservas));
};
const recuperarReserva = () => {
  const reservasStorage = JSON.parse(localStorage.getItem("reserva"));
  return reservasStorage;
};
