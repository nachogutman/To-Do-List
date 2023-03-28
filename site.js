const tareas = document.getElementById("lista");
var arrayTareas = [];

function agregar() {
  //crea elemento
  let texto = document.getElementById("texto");
  const tarea = {
    id: arrayTareas.length,
    texto: texto.value,
    fechaCreacion: Date.now(),
    check: false,
  };

  //vaciar lista y input
  tareas.innerHTML = "";
  texto.value = "";

  //agrega elemento a array
  arrayTareas.push(tarea);

  arrayTareas.map((t) => {
    if (t.check == true) {
      tareas.innerHTML += `
        <li class="tarea">
            <input type="checkbox" class="checkbox" id=${t.id} checked> <h5 id=${t.texto}> ${t.texto} </h5> 
        </li>
      `;
      document.getElementById(t.texto).style = "text-decoration:line-through;";
      arrayTareas[t.id].check = true;
    } else {
      tareas.innerHTML += `
        <li class="tarea">
            <input type="checkbox" class="checkbox" id=${t.id}> <h5 id=${t.texto}> ${t.texto} </h5> 
        </li>
      `;
      document.getElementById(t.texto).style = "text-decoration:none;";
      arrayTareas[t.id].check = false;
    }
  });


  arrayTareas.map(t => {
    const checkbox = document.getElementById(t.id);
    console.log(t.id);
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        document.getElementById(t.texto).style = "text-decoration:line-through;";
        arrayTareas[t.id].check = true;
      } else {
        document.getElementById(t.texto).style = "text-decoration:none;";
        arrayTareas[t.id].check = false;
      }
    });
  });
}
