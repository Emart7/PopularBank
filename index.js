//Importacion de clases
import { CuentaCorriente } from "./CuentaCorriente.js";
import { Cliente } from "./Cliente.js";
//Se crea el package.json con el comando 'npm init' desde cmd.

const cliente1 = new Cliente('Juan','12345678','12345678-9');
const cliente2 = new Cliente('Andres','123456789','12345678-2');

const cuentaCorriente1 = new CuentaCorriente(cliente1, '1', '001');
const cuentaCorriente2 = new CuentaCorriente(cliente2,'2','002');

console.log(cuentaCorriente1.getCliente);
console.log(cuentaCorriente2.getCliente);

//Cuentas en cero
let saldoJuan = cuentaCorriente1.verSaldo();
let saldoAndres = cuentaCorriente2.verSaldo();
console.log(cliente1.nombreCliente + ', tu saldo actual es: ' + saldoJuan);
console.log(cliente2.nombreCliente + ', tu saldo actual es: ' + saldoAndres);
console.log(cliente1.nombreCliente + ', tu saldo actual es: ' + saldoJuan);

//Ingresa dinero en las cuentas
saldoJuan = cuentaCorriente1.depositoEnCuenta(3000);
console.log(cliente1.nombreCliente + ', tu saldo actual es: ' + saldoJuan);
cuentaCorriente1.tranferirAOtrasCuentas(500, cuentaCorriente2);
console.log(cliente2.nombreCliente + ', tu saldo actual es: ' + saldoAndres);
saldoJuan = cuentaCorriente1.verSaldo();
console.log(cliente1.nombreCliente + ', tu saldo actual es: ' + saldoJuan);

console.log('Existen ' + CuentaCorriente.cantidadCuentas + ' cuentas corrientes registradas.');