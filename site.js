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
      fechaCreacion: new Date(),
      check: false,
      fechaTachado: null,
      velocidad: null,
    };

    //vaciar lista y input
    tareas.innerHTML = "";
    texto.value = "";

    //agrega elemento a array
    arrayTareas.push(tarea);

    //vuelve a cargar la lista al html
    arrayTareas.map((t) => {
      if (t.check == true) {
        tareas.innerHTML += `
        <li class="tarea">
            <input type="checkbox" class="checkbox" id=${
              t.id
            } checked> <h5 id="check${t.id}"> ${
          t.texto
        } (${t.fechaCreacion.toISOString()} / ${t.fechaTachado.toISOString()}) </h5> 
        </li>
      `;
        document.getElementById("check" + t.id).style =
          "text-decoration:line-through;";
        arrayTareas[t.id].check = true;
      } else {
        tareas.innerHTML += `
        <li class="tarea">
            <input type="checkbox" class="checkbox" id=${t.id}> <h5 id="check${
          t.id
        }"> ${t.texto} (${t.fechaCreacion.toISOString()}) </h5> 
        </li>
      `;
        console.log(t.texto);
        document.getElementById("check" + t.id).style = "text-decoration:none;";
        arrayTareas[t.id].check = false;
      }
    });

    tareas.innerHTML += `
      <button onclick="rapida()" class="velocidad"> Mas Veloz </button>
      <img src="imgs/cars.png" id="rayo">
    `;

    //agrega el eventlistener a cada checkbox
    arrayTareas.map((t) => {
      const checkbox = document.getElementById(t.id);

      checkbox.addEventListener("change", (e) => {
        if (e.target.checked) {
          document.getElementById("check" + t.id).style =
            "text-decoration:line-through;";

          t.fechaTachado = new Date();

          document.getElementById("check" + t.id).innerHTML = `${
            t.texto
          } (${t.fechaCreacion.toISOString()} / ${t.fechaTachado.toISOString()})`;

          arrayTareas[t.id].check = true;
        } else {
          document.getElementById("check" + t.id).style =
            "text-decoration:none;";

          document.getElementById("check" + t.id).innerHTML = `${
            t.texto
          } (${t.fechaCreacion.toISOString()})`;

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

function rapida() {
  fechaMenor = 999999999999;
  textoMenor = "";
  arrayTareas.map((t) => {
    if (t.fechaTachado) {
      let dif = (t.fechaTachado / 1000) - (t.fechaCreacion / 1000);
      console.log(dif);
      if (dif < fechaMenor) {
        fechaMenor = dif;
        textoMenor = t.texto;
      }
    }
  });

  alert(
    `El ganador de la copa piston fue: ${textoMenor} con un tiempo de ${fechaMenor} segundos`
  );
}
