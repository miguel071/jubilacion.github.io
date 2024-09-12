function enviarDatos() {
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const fechaCumple = document.getElementById('fechaCumple').value;
    const sueldoBase = parseFloat(document.getElementById('sueldo').value);
    const contribuciones = parseInt(document.getElementById('contribuciones').value, 10);

    if (!nombres || !apellidos || !fechaCumple || isNaN(sueldoBase) || isNaN(contribuciones)) {
        alert('Por favor, complete todos los campos correctamente.');
        return;
    }

    const queryParams = new URLSearchParams({
        nombres,
        apellidos,
        fechaCumple,
        sueldoBase,
        contribuciones
    }).toString();

    window.location.href = `result.html?${queryParams}`;
}
