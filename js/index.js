tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
const clientes = [];
const horarios = ["Desayuno","Almuerzo","Once","Cena"];
let horario = document.querySelector("#horario-select");

for(let i=0; i<horarios.length; ++i){
    const option = document.createElement('option');
    option.value=horarios[i];
    option.text=horarios[i];
    horario.appendChild(option);
}

  
const cargarTabla = ()=>{
    let tbody = document.querySelector("#tabla-tbody");
    tbody.innerHTML = "";
    for(let i=0; i < clientes.length; ++i){
      let p = clientes[i];
      let tr = document.createElement("tr");
      let tdnombre = document.createElement("td");
      tdnombre.innerText = p.nombre ;
      let tdhorario = document.createElement("td");
      tdhorario.innerText = p.horario
      let tdvalor = document.createElement("td")
      tdvalor.innerText = p.valor;
      let tddescripcion = document.createElement("td");
      tddescripcion.innerHTML = p.descripcion;
      tr.appendChild(tdnombre);
      tr.appendChild(tdhorario);
      tr.appendChild(tdvalor);
      tr.appendChild(tddescripcion);
      tbody.appendChild(tr);
    }
  
  };





document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre  = document.querySelector("#nombre-txt").value;
    let descripcion = tinymce.get("descripcion-txt").getContent();
    let horario = document.querySelector("#horario-select").value;
    let valor = document.querySelector("#valor").value;

    if (horario=="Desayuno" && valor<1000){
       Swal.fire("Monto insuficiente")
       return
    }
    else if (horario=="Desayuno" && valor > 10000){
        Swal.fire("Monto excedido")
        return
    }
    if (horario=="Almuerzo" && valor<10000){
        Swal.fire("Monto insuficiente")
        return
    }
    else if (horario=="Almuerzo" && valor > 20000){
        Swal.fire("Monto excedido")
        return
    }
    if (horario=="Once" && valor<5000){
       Swal.fire("Monto insuficiente")
       return
    }
    else if (horario=="Once" && valor > 15000){
       Swal.fire("Monto excedido")
       return
    }
    if (horario=="Cena" && valor<15000){
         Swal.fire("Monto insuficiente")
         return
    }
    


    let cliente ={};
    cliente.nombre = nombre;
    cliente.horario = horario;
    cliente.valor = valor;
    cliente.descripcion = descripcion;

    clientes.push(cliente);
    cargarTabla();
    Swal.fire("Exito!", "success");
} );

