//MODIFICACIONES SOBRE LA PÁGINA AGENDA CULTURAL

//FUNCION AGEND

const agend = async () => {
  let agenda = document.getElementById("agenda");
  const response = await fetch("../json/agend.json");
  const data = await response.json();
  data.forEach((agend) => {
    let container = document.createElement("tr");
    container.classList.add("table-dark");
    container.innerHTML = ` <th scope="row">${agend.day}</th> <td colspan="2" class="table-active">${agend.date}</td> <td>${agend.activity}</td>`;
    agenda.appendChild(container);
  });
};

agend();
