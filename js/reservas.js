// MODIFICACIONES SOBRE LA PÁGINA RESERVAS
let divReserva = document.getElementById("div-reserva");
let text = "<p> Elegí tu lugar preferido para pasar una gran noche!! </p>";
let p = document.createElement("p");
p.innerHTML = text;
divReserva.appendChild(p);

//VARIABLES FORM
const reservForm = document.getElementById("form");
let reservas = [];

reservForm.addEventListener("submit", (e) => {
  e.preventDefault();
  generarReserva();
  agregarReserva(reservas);
  reservaStorage(reservas);
});
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("reserva")) {
    reservas = recuperarReserva();
    agregarReserva(reservas);
  }
});

function floor(arriba, abajo) {
  if (arriba.checked == true) {
    return arriba.value;
  } else {
    return abajo.value;
  }
}
function space(adentro, afuera) {
  if (adentro.checked == true) {
    return adentro.value;
  } else {
    return afuera.value;
  }
}
function validacionTelefono(number) {
  return number.toString().length;
}
function validacionFecha(date) {
  const hoy = new Date();
  const fecha = new Date(date);
  if (fecha < hoy) {
    return false;
  } else {
    return true;
  }
}
function generarReserva() {
  //ELEMENTOS DEL FORM
  const nombre = document.getElementById("name").value;
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
  const reserva = {
    nombre,
    telefono,
    mail,
    dia,
    hora,
    personas,
    piso,
    espacio,
  };
  if (
    reserva.nombre != "" &&
    reserva.telefono != "" &&
    reserva.mail != "" &&
    reserva.dia != "" &&
    reserva.hora != "" &&
    reserva.personas != "" &&
    reserva.piso != "" &&
    reserva.espacio != ""
  ) {
    if (reserva.personas > 0 && reserva.personas < 30) {
      if (!isNaN(reserva.telefono) && validacionTelefono(telefono) == 10) {
        if (validacionFecha(dia) === true) {
          if (isNaN(reserva.nombre)) {
            alert(
              `Usted, ${reserva.nombre}, hizo una reserva para ${reserva.personas} personas, el día ${reserva.dia} a las ${reserva.hora} horas, en el salón que se encuentra en ${reserva.piso}, en el sector de ${reserva.espacio}.\nLos datos de contacto registrados son:\nNúmero de teléfono:${reserva.telefono}\nEmail:${reserva.mail} \nLos esperamos!!`
            );
            reservas.push(reserva);
          } else {
            alert("Ingrese un nombre válido");
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
}

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
            <strong> Teléfono:</strong> ${reserva.telefono}<strong> Mail:</strong> ${reserva.mail}<br>
            <button href="#" class="btn btn-danger" id="${reserva.nombre}" name="delete" value="${reserva.nombre}">Cancelar Reserva</button>
        </div>
    </div>
`;
    reservasCreadas.appendChild(div);
  });
  document.getElementById("form").reset();
  reservasCreadas.addEventListener("click", (e) => {
    deleteReserva(e.target.value);
  });
};
const deleteReserva = (nombre) => {
  reservas.forEach((reserva, index) => {
    if (reserva.nombre === nombre) {
      reservas.splice(index, 1);
    }
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
