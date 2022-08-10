let btnSave = document.getElementById("btnSave");
btnSave.addEventListener("click", saveStudent);
let student = new Student();
let inscription = new Inscriptions;
let id = 1;
let add = true;
let idSeleccionado = null;


function saveStudent(){
    let studentName = document.getElementById("name").value;
    let studentSurname = document.getElementById("surname").value;
    let studentDNI = document.getElementById("dni").value;
    let studentAge = document.getElementById("age").value;
    let studentCurse = document.getElementById("curse").value;


    if(studentName == "" || studentSurname == "" || studentCurse == "" || studentDNI == ""){
        alert("Hay campos obligatorios vacios")
        return false;
    }

    if(add == true){
        let newStudent = new Student();

        newStudent.setId(id);
        newStudent.setName(studentName);
        newStudent.setSurname(studentSurname);
        newStudent.setDNI(studentDNI);
        newStudent.setAge(studentAge);
        newStudent.setCurse(studentCurse);
        id = id + 1;

        inscription.createStudent(newStudent)
        updateList();
        //se llama a la funcion clear para borrar lo que hay en los campos
        clear();

    }else{

        // usar setter en los dos casos (update & create)
        let selected = inscription.getInscriptionById(idSeleccionado);
        selected.name = studentName;
        selected.surname = studentSurname;
        selected.DNI = studentDNI;
        selected.age = studentAge;
        selected.curse = studentCurse;
        inscription.updateInscription(selected,idSeleccionado);

        updateList();

        clear();
    }
};

//la funcion modifica la lista, pero aca encontramos una dificultad, la funcion update modifica y crea 
function updateList(){
    let bodyTable = document.getElementById("tbody");
    let listaActualizada = inscription.getInscriptions();
    let contenidoDeLaTabla = '';
    for (let index = 0; index < listaActualizada.length; index++) {
        const inscripto = listaActualizada[index];
        contenidoDeLaTabla += `
        <tr>
            <th scope="row">${inscripto.getName()}</th>
            <td>${inscripto.getSurname()}</td>
            <td>${inscripto.getDNI()}</td>
            <td>${inscripto.getAge()}</td>
            <td>${inscripto.getCurse()}</td>
                <button class="btn btn-warning" onclick="getById(${inscripto.getId()})">
                    Modificar
                </button>
                <button class="btn btn-danger" onclick="getById(${inscripto.getId()})">
                    Eliminar
                </button>
        </tr>
        `;
    }
    bodyTable.innerHTML = contenidoDeLaTabla;
}
//hice la funcion para que funcione el boton, pero no me elimina los datos de la fila, sino que me premite modificarlos
function deleteInscription(id){
    inscripto.deleteInscription(id);   
    updateList();
}
function clear() {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("curse").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("age").value = "";

}


function getById(id) {
    let selected = inscription.getInscriptionById(id);
    document.getElementById("name").value = selected.getName();
    document.getElementById("surname").value = selected.getSurname();
    document.getElementById("dni").value = selected.getDNI();
    document.getElementById("age").value = selected.getAge();
    document.getElementById("curse").value = selected.getCurse();

    // deshabilito el modo agregar
    add = false;

    // guardo el id del registro
    idSeleccionado = id;

}
