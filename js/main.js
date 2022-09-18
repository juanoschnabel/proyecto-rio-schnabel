//MODIFICACIONES SOBRE LA PÁGINA AGENDA CULTURAL
let programacion = [
  { day: "viernes", date: "1/1/22", activity: "teatro" },
  { day: "sabado", date: "2/1/22", activity: "noche de salsa" },
  { day: "domingo", date: "3/1/22", activity: "música en vivo" },
  { day: "viernes", date: "8/1/22", activity: "noche de humor" },
  { day: "sabado", date: "9/1/22", activity: "cata de vinos" },
  { day: "domingo", date: "10/1/22", activity: "impro de teatro" },
  { day: "viernes", date: "15/1/22", activity: "música celta" },
  { day: "sabado", date: "16/1/22", activity: "milonga" },
  { day: "domingo", date: "17/1/22", activity: "antidomingo" },
];
let agenda = document.getElementById("agenda");
programacion.forEach((agend) => {
  let container = document.createElement("tr");
  container.classList.add("table-dark");
  container.innerHTML = ` <th scope="row">${agend.day}</th> <td colspan="2" class="table-active">${agend.date}</td> <td>${agend.activity}</td>`;
  agenda.appendChild(container);
});

// MODIFICACIONES SOBRE LA PÁGINA RESERVAS
let divReserva = document.getElementById("div-reserva");
let text = "<p> Elegí tu lugar preferido para pasar una gran noche!! </p>";
let p = document.createElement("p");
p.innerHTML = text;
divReserva.appendChild(p);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const name = document.getElementById("name").value;
//   const phone = document.getElementById("phone").value;
//   const mail = document.getElementById("mail").value;
//   const date = document.getElementById("date").value;
//   const hour = document.getElementById("hour").value;
//   const persons = document.getElementById("persons").value;
//   const indoor = document.getElementById("adentro").value;
//   //   const outdoor = document.getElementById("afuera");
//   const firstFloor = document.getElementById("planta-baja").value;
//   //   const secondFloor = document.getElementById("planta-alta");
//   console.log(indoor);
//   let floor;
//   let site;
//   const reservation = {
//     name,
//     phone,
//     mail,
//     date,
//     hour,
//     persons,
//     floor,
//     site,
//   };
//   console.log(reservation);
//   alert(
//     `Usted, ${reservation.name}, hizo una reserva para ${reservation.persons} personas, el día ${reservation.date} a las ${reservation.hour} horas, ${reservation.floor}, en la ${reservation.site}. \nLos esperamos!!`
//   );
//   form.reset();
// });
