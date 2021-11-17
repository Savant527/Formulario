
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', e =>{
    e.preventDefault();
    const nombre = formulario['nombre'].value;
    const apellido = formulario['apellido'].value;
    const tipoDoc = formulario['tipoDocumento'].value;
    const documento = formulario['documento'].value;
    const correo = formulario['correo'].value;
    const observaciones = formulario['observaciones'].value;
    
    console.log(nombre, apellido, tipoDoc, documento, correo, observaciones);
})