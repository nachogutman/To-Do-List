const tareas = document.getElementById("lista");
var arrayTareas = [];

function agregar() {
  let texto = document.getElementById("texto");
  if (texto.value == "") {
    alert("Tu tarea es no hacer nada?");
  } else {
    //crea elemento
    const tarea = {
      id: arrayTareas.length,
      texto: texto.value,
      fechaCreacion: new Date().toISOString(),
      check: false,
      fechaTachado: null,
      velocidad: null
    };

    //vaciar lista y input
    tareas.innerHTML = "";
    texto.value = "";

    //agrega elemento a array
    arrayTareas.push(tarea);

    //vuelve a cargar la lista al html
    arrayTareas.map((t) => {
      if (t.check == true) {
        arrayTareas[t.id].fechaTachado = new Date().toISOString();
        tareas.innerHTML += `
        <li class="tarea">
            <input type="checkbox" class="checkbox" id=${t.id} checked> <h5 id="check${t.id}"> ${t.texto} Fecha de Creacion: ${t.fechaCreacion} Fecha de Finalizacion: ${t.fechaTachado}</h5> 
        </li>
      `;
        document.getElementById("check" + t.id).style =
          "text-decoration:line-through;";
        arrayTareas[t.id].check = true;
      } else {
        tareas.innerHTML += `
        <li class="tarea">
            <input type="checkbox" class="checkbox" id=${t.id}> <h5 id="check${t.id}"> ${t.texto} Fecha de Creacion: ${t.fechaCreacion} </h5> 
        </li>
      `;
        console.log(t.texto);
        document.getElementById("check" + t.id).style = "text-decoration:none;";
        arrayTareas[t.id].check = false;
      }
    });

    tareas.innerHTML += `
      <button onclick="rapida()" class="velocidad"> Mas Veloz </button>
    `;

    //agrega el eventlistener a cada checkbox
    arrayTareas.map((t) => {
      const checkbox = document.getElementById(t.id);

      checkbox.addEventListener("change", (e) => {
        if (e.target.checked) {
          document.getElementById("check" + t.id).style =
            "text-decoration:line-through;";

          t.fechaTachado = new Date().toISOString();

          document.getElementById(
            "check" + t.id
          ).innerHTML += `Fecha de Finalizacion: ${t.fechaTachado}`;

          arrayTareas[t.id].velocidad = t.fechaCreacion - t.fechaTachado;

          arrayTareas[t.id].check = true;
        } else {
          document.getElementById("check" + t.id).style =
            "text-decoration:none;";

          arrayTareas[t.id].check = false;
        }
      });
    });
  }
}

function eliminar() {
  tareas.innerHTML = "";
  arrayTareas = [];
}

function rapida(){
  fechaMenor = 999999999999;
  nombreMenor = "";
  arrayTareas.map(t => {
    
  });
}
