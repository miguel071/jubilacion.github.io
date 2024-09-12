function calcularJubilacion(fechaCumple, sueldoBase, contribuciones) {
    const hoy = new Date();
    const fechaCumple60 = new Date(fechaCumple);

    // Define los rangos y las contribuciones requeridas
    const contribucionesRango = [
        { inicio: new Date('1900-01-01'), fin: new Date('2010-12-31'), contribuciones: 180 },
        { inicio: new Date('2011-01-01'), fin: new Date('2012-12-31'), contribuciones: 192 },
        { inicio: new Date('2013-01-01'), fin: new Date('2013-05-30'), contribuciones: 204 },
        { inicio: new Date('2013-06-01'), fin: new Date('2013-12-31'), contribuciones: 216 },
        { inicio: new Date('2014-01-01'), fin: new Date('2014-05-30'), contribuciones: 228 },
        { inicio: new Date('2014-06-01'), fin: hoy, contribuciones: 240 }
    ];

    let contribucionesNecesarias = 0;
    for (const rango of contribucionesRango) {
        if (fechaCumple60 >= rango.inicio && fechaCumple60 <= rango.fin) {
            contribucionesNecesarias = rango.contribuciones;
            break;
        }
    }

    if (contribuciones >= contribucionesNecesarias) {
        let jubilacion = sueldoBase * 0.70;
        jubilacion = Math.min(jubilacion, 7200);
        return `La jubilación es: Q${jubilacion.toFixed(2)}`;
    } else {
        return `Número de contribuciones insuficientes. Se requieren ${contribucionesNecesarias} contribuciones, pero solo tiene ${contribuciones}.`;
    }
}

function mostrarResultado() {
    const params = new URLSearchParams(window.location.search);
    const nombres = params.get('nombres');
    const apellidos = params.get('apellidos');
    const fechaCumple = params.get('fechaCumple');
    const sueldoBase = parseFloat(params.get('sueldoBase'));
    const contribuciones = parseInt(params.get('contribuciones'), 10);

    if (!nombres || !apellidos || !fechaCumple || isNaN(sueldoBase) || isNaN(contribuciones)) {
        document.getElementById('resultado').innerText = 'Error al procesar los datos.';
        return;
    }

    const mensaje = calcularJubilacion(fechaCumple, sueldoBase, contribuciones);
    document.getElementById('resultado').innerText = mensaje;
}

function irAIngresoDatos() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', mostrarResultado);
