const VALOR_TICKET = 200;

// Objeto con expresiones para validacion
const expresiones = {
    apeynom: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,                                   // Letras, espacios, letras con acento
    correo: /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    cantidad: /^[1-9]\d*$/                                              // De 1 a 10 numeros
}

/* Lo uso para verificar que esten todos cargados */
const campos = {
    nombre: false,
    apellido: false,
    correo: false,
    cantidad: false
}

const inputs = document.querySelectorAll("#form input");

const validarform = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.apeynom, e.target, "nombre");
        break;
        case "apellido":
            validarCampo(expresiones.apeynom, e.target, "apellido");
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, "correo");
        break;
        case "cantidad":
            validarCampo(expresiones.cantidad, e.target, "cantidad");
        break;
    }
}

const validarCampo = (expresion, input, campo) =>{
    if( expresion.test(input.value) ){
        document.getElementById(`${campo}__feedback`).innerHTML = "";
        document.getElementById(`${campo}`).classList.remove("is-invalid");
        document.getElementById(`${campo}__feedback`).classList.remove("invalid-feedback");
        document.getElementById(`${campo}`).classList.add("is-valid");
        campos[campo] = true;
    }else{
        document.getElementById(`${campo}__feedback`).innerHTML = "Valor invalido";
        document.getElementById(`${campo}__feedback`).classList.add("invalid-feedback");
        document.getElementById(`${campo}`).classList.add("is-invalid"); 
        campos[campo] = false;
    }
}

inputs.forEach( (input) => {
    input.addEventListener("keyup", validarform);
    input.addEventListener("blur", validarform);
});

const btnEnviar = document.getElementById("btn-enviar");

btnEnviar.addEventListener(
    "click", 
    (e)=>{
        const aPagar = document.getElementById("aPagar");
        const categoria = document.getElementById("categoria").value;
        const cantidad = document.getElementById("cantidad").value;
        if (campos.nombre && campos.apellido && campos.correo && campos.cantidad){
           const monto = VALOR_TICKET * cantidad * (1 - categoria/100);
           aPagar.innerText = "Total a Pagar: $ " + monto.toFixed(2);
        }else{
            aPagar.innerText = "Debe completar todos los campos";
        }
      
    });

const btnBorrar = document.getElementById("btn-borrar");

btnBorrar.addEventListener(
    "click", 
    () => {
        campos["nombre"] = false;
        campos["apellido"] = false;
        campos["correo"] = false;
        campos["cantidad"] = false;

        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("cantidad").value = "";
        document.getElementById("categoria").value = 0;
        document.getElementById("categoria").text = "Publico General";
        document.getElementById("aPagar").innerText = "Total a Pagar: $";
        document.querySelectorAll(".feedback").forEach( (feedback) => {
            feedback.innerHTML = "";
            feedback.classList.remove("invalid-feedback");
            feedback.classList.remove("valid-feedback");
        });

        document.querySelectorAll("#form input").forEach( (input) => {
            input.classList.remove("is-valid");
            input.classList.remove("is-invalid");
        });
    });