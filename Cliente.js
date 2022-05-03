export class Cliente {
  nombreCliente;
  dniCliente;
  rutCliente;
  #password;

  constructor(nombreCliente, dniCliente, rutCliente) {
    this.nombreCliente = nombreCliente;
    this.dniCliente = dniCliente;
    this.rutCliente = rutCliente;
    this.#password = '';
  }

  get getPassword() {
    return this.#password;
  }

  asignarContrasena(password) {
    this.#password = password;
  }

  autenticable(password){
    return true;
}
}
