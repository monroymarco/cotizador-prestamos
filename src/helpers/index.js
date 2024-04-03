const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return formatter.format(valor);
}

const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    //mientras mayor es la cantidad, menor es el interes
    if( cantidad <= 1000 ) {
        total = cantidad * 1.1;
    } else if( cantidad > 1000 && cantidad < 5000 ) {
        total = cantidad * 1.08;
    } else if ( cantidad > 5000 && cantidad < 10000 ) {
        total = cantidad * 1.05;
    } else {
        total = cantidad * 1.2;
    }

    // Plazo: Mientras mas plazo mayor sera el ineteres
    if ( plazo === 6 ) {
        total *= 1.1;
    } else if ( plazo === 12 ) {
        total *= 1.15;
    } else {
        total *= 1.20;
    }
    return total;
}

export {
    formatearDinero,
    calcularTotalPagar
}