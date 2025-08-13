// Constantes para mejorar la legibilidad y facilitar futuras actualizaciones
const PRODUCCION_SOLAR_COLOMBIA_2021_TWH = 58.19; // Producción de energía solar en TWh
const MENSAJE_ERROR_VACIO = 'Por favor, ingresa un valor de consumo.';
const MENSAJE_ERROR_INVALIDO = 'Por favor, ingresa un número válido y positivo.';

function resultado() {
    const valorKwh = document.getElementById("kwh").value;

    // Validación más robusta:
    // 1. Verifica si el campo está vacío.
    // 2. Verifica si el valor es un número válido y positivo.
    if (valorKwh === "") {
        mostrarAlertaError(MENSAJE_ERROR_VACIO);
        return; // Detiene la ejecución si hay un error
    }

    const consumoKwh = parseFloat(valorKwh);

    if (isNaN(consumoKwh) || consumoKwh <= 0) {
        mostrarAlertaError(MENSAJE_ERROR_INVALIDO);
        limpia(); // Limpia el campo después de mostrar el error
        return;
    }

    const consumoTwh = convierte_twh(consumoKwh);
    const porcentaje = ((consumoTwh / PRODUCCION_SOLAR_COLOMBIA_2021_TWH) * 100).toFixed(4);

    const mensajeExito = `
        <div style="text-align: center;">
            <p>Su consumo promedio mensual fue de <strong>${consumoKwh} kwh</strong>.</p>
            <p>Esto es equivalente al <strong>${porcentaje}%</strong> de la energía solar total producida en Colombia en el año 2021.</p>
        </div>
    `;

    Swal.fire({
        title: 'Cálculo exitoso',
        html: mensajeExito,
        icon: 'success',
        confirmButtonText: '¡Entendido!'
    });

    limpia();
}

function convierte_twh(dato) {
    // La fórmula para convertir kwh a TWh es:
    // (dato en kwh / 1,000,000,000) * 12 meses
    // Tu código ya lo hace, pero la división por 1000 y multiplicación por 12 no es una conversión directa.
    // TWh = (kWh * 12) / 1,000,000,000
    // Si la idea es mostrar el consumo anual en TWh, la fórmula sería:
    return (dato * 12) / 1000000000;
}

function limpia() {
    document.getElementById("kwh").value = "";
}

function mostrarAlertaError(mensaje) {
    Swal.fire({
        title: '¡Error!',
        text: mensaje,
        icon: 'error',
        confirmButtonText: 'Cerrar'
    });
}