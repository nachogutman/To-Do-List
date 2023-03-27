const tareas = document.getElementById("tareas");
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

  //vacia lista
  tareas.innerHTML = "";

  //agrega elemento a array
  arrayTareas.push(tarea);
  
  arrayTareas.map((t) => {
    if (t.check == true) {
      tareas.innerHTML += `
        <li>
            <input type="checkbox" class="tarea" id=${t.id} checked> <h5 id=${t.texto}> ${t.texto} </h5> 
        </li>
      `;
      document.getElementById(t.texto).style = "text-decoration:line-through;";
    } else {
      tareas.innerHTML += `
        <li>
            <input type="checkbox" class="tarea" id=${t.id}> <h5 id=${t.texto}> ${t.texto} </h5> 
        </li>
      `;
    }
    
    let checkbox = document.getElementById(tarea.id);
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        document.getElementById(tarea.texto).style =
          "text-decoration:line-through;";
        arrayTareas[tarea.id].check = true;

      } else {
        document.getElementById(tarea.texto).style = "text-decoration:none;";
      }
    });
  });

}
