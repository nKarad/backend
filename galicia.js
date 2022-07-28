let cuentaPesos = 0.00

function deposito(monto) {
    cuentaPesos = cuentaPesos+monto;
    
}

function extraccion(monto) {
    cuentaPesos = cuentaPesos-monto;
    
}

//Test función

console.log ("su saldo es", cuentaPesos)

deposito (1000.00)

console.log ("su nuevo saldo es", cuentaPesos
)

extraccion (400.00)
console.log ("su nuevo saldo es", cuentaPesos
)
