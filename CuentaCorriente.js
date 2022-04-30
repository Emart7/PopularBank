import { Cliente } from "./Cliente.js";

export class CuentaCorriente {
  #cliente;
  #numero;
  #agencia;
  #saldo;
  static cantidadCuentas = 0;

  constructor(cliente, numero, agencia) {
    this.setCliente = cliente;
    this.#numero = numero;
    this.#agencia = agencia;
    this.#saldo = 0;
    CuentaCorriente.cantidadCuentas++;
  }

  set setCliente(valor) {
    if (valor instanceof Cliente) this.#cliente = valor;
  }

  get getCliente() {
    return this.#cliente;
  }

  set numero(valor) {
    this.#numero = valor;
  }

  get numero() {
    return this.#numero;
  }

  set agencia(valor) {
    this.#agencia = valor;
  }

  get agencia() {
    return this.#agencia;
  }

  get saldo() {
    return this.#saldo;
  }

  get cantidadCuentas() {
    return this.cantidadCuentas;
  }

  depositoEnCuenta(valor) {
    if (valor > 0) this.#saldo += valor;
    return this.#saldo;
  }

  retiroDeCuenta(valor) {
    if (valor <= this.#saldo) this.#saldo -= valor;
    return this.#saldo;
  }

  verSaldo() {
    return this.#saldo;
  }

  tranferirAOtrasCuentas(valor, cuentaDestino) {
    this.retiroDeCuenta(valor);
    cuentaDestino.depositoEnCuenta(valor);
  }
}
