export class Cuenta {
  #cliente;
  #saldo;

  constructor(cliente, numero, agencia, saldo) {
    if (this.constructor == Cuenta){
      throw new Error('No se puede instanciar la clase Cuenta');
    }
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

  get cantidadCuentas() {
    return this.cantidadCuentas;
  }

  depositoEnCuenta(valor) {
    if (valor > 0) this.#saldo += valor;
    return this.#saldo;
  }

  retiroDeCuenta(valor) {
    //Metodo abstracto
    throw new Error('Debe implementar el metodo retiroDeCuenta en su clase.');
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