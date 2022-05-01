export class Cuenta {
  #cliente;
  #saldo;

  constructor(tipo, cliente, numero, agencia, saldo) {
    this.tipo = tipo;
    this.#cliente = cliente;
    this.numero = numero;
    this.agencia = agencia;
    this.#saldo = saldo;
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
    _retiroDeCuenta(valor,0);
  }
  
  _retiroDeCuenta(valor, comision) {
    valor = valor * (1 + comision / 100);
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
