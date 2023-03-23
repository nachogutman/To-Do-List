const tareas = document.getElementById('tareas');
var arrayTareas = [];

function agregar(){
    let texto = document.getElementById('texto');
    const tarea = {
        id: arrayTareas.length,
        texto: texto.value,
        fechaCreacion: Date.now(),
    }

    tareas.innerHTML += `
        <li>
            <input type="checkbox" class="tarea" id=${tarea.id}> <h5 id=${tarea.texto}> ${texto.value} </h5> 
        </li>
    `;

    arrayTareas.push(tarea);
    texto.value = '';

    arrayTareas.map( tarea => {
        let checkbox = document.getElementById(tarea.id);
        checkbox.addEventListener('change', e => {

            if(e.target.checked){
                document.getElementById(tarea.texto).style = "text-decoration:line-through;";  
            } else {
                document.getElementById(tarea.texto).style = "text-decoration:none;";  
            }
        
        });
    });
}




