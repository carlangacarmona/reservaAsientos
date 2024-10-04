// Variables generales y agrega evento
document.getElementById('botonCalcular').addEventListener('click', function() {
    let tipoAsiento = document.getElementById('tipoAsiento').value;
    let cantidadAsiento = parseInt(document.getElementById('cantidadAsiento').value);
    let precioPorAsiento = 0;
    let precioTotal = 0;

    // Validar que la cantidad de asientos sea mayor a 0
    while (cantidadAsiento <= 0) {
        alert('Por favor, ingrese una cantidad positiva de asientos.');
        cantidadAsiento = parseInt(prompt('Cantidad de asientos:'));
    }

    // Asignar precio según el tipo de asiento usando switch case
    switch (tipoAsiento) {
        case 'normal':
            precioPorAsiento = 5000;
            break;
        case 'preferencial':
            precioPorAsiento = 9000;
            break;
        case 'vip':
            precioPorAsiento = 13000;
            break;
        default:
            alert('Tipo de asiento no válido.');
            return; // Termina la ejecución si el tipo de asiento es inválido
    }

    // Calcular el precio total sin descuento
    precioTotal = precioPorAsiento * cantidadAsiento;

    // Aplicar descuento si corresponde
    if (cantidadAsiento >= 5) {
        precioTotal *= 0.9; // Aplicar un 10% de descuento
    }

    // Mostrar el resultado en la página
    document.getElementById('resultado').textContent = `El precio total por ${cantidadAsiento} asientos de tipo ${tipoAsiento} es: $${precioTotal.toFixed(0)}`;
});
