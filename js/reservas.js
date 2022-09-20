// MODIFICACIONES SOBRE LA PÁGINA RESERVAS
let divReserva = document.getElementById("div-reserva");
let text = "<p> Elegí tu lugar preferido para pasar una gran noche!! </p>";
let p = document.createElement("p");
p.innerHTML = text;
divReserva.appendChild(p);
//EVENTO SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const mail = document.getElementById("mail").value;
  const date = document.getElementById("date").value;
  const hour = document.getElementById("hour").value;
  const persons = Number(document.getElementById("persons").value);

  //CHECKRADIOS
  let up = document.getElementById("planta-alta");
  let down = document.getElementById("planta-baja");
  let floor;
  if (up.checked == true) {
    floor = `${up.value}`;
  } else {
    floor = `${down.value}`;
  }
  let indoor = document.getElementById("adentro");
  let outdoor = document.getElementById("afuera");
  let space;
  if (indoor.checked == true) {
    space = `${indoor.value}`;
  } else {
    space = `${outdoor.value}`;
  }
  const reservation = {
    name,
    phone,
    mail,
    date,
    hour,
    persons,
    floor,
    space,
  };
  alert(
    `Usted, ${reservation.name}, hizo una reserva para ${reservation.persons} personas, el día ${reservation.date} a las ${reservation.hour} horas, en el salón que se encuentra en ${reservation.floor}, en el sector de ${reservation.space}.\nLos datos de contacto registrados son:\nNúmero de teléfono:${reservation.phone}\nEmail:${reservation.mail} \nLos esperamos!!`
  );

  const reservationJson = JSON.stringify(reservation);
  localStorage.setItem("reservation", reservationJson);
  const reservationJS = JSON.parse(reservationJson);
  console.log(reservationJS);
  form.reset();
});
