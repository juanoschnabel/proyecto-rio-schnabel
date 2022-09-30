//MODIFICACIONES SOBRE LA PÁGINA AGENDA CULTURAL
let programacion1 = [
  { day: "viernes", date: "1/1/22", activity: "teatro" },
  { day: "sabado", date: "2/1/22", activity: "noche de salsa" },
  { day: "domingo", date: "3/1/22", activity: "música en vivo" },
  { day: "viernes", date: "8/1/22", activity: "noche de humor" },
];
let programacion2 = [
  { day: "sabado", date: "9/1/22", activity: "cata de vinos" },
  { day: "domingo", date: "10/1/22", activity: "impro de teatro" },
  { day: "viernes", date: "15/1/22", activity: "música celta" },
  { day: "sabado", date: "16/1/22", activity: "milonga" },
  { day: "domingo", date: "17/1/22", activity: "antidomingo" },
];
const programacion = [...programacion1, ...programacion2];
//JSON
const programacionJson = JSON.stringify(programacion);
localStorage.setItem("programacion", programacionJson);
const programacionJS = JSON.parse(programacionJson);
console.log(programacionJS);
//FUNCION AGEND
function agend() {
  let agenda = document.getElementById("agenda");
  programacion.forEach((agend) => {
    let container = document.createElement("tr");
    container.classList.add("table-dark");
    container.innerHTML = ` <th scope="row">${agend.day}</th> <td colspan="2" class="table-active">${agend.date}</td> <td>${agend.activity}</td>`;
    agenda.appendChild(container);
  });
}

agend();
