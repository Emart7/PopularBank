export class Empleado {
  #nombre;
  #dni;
  #salario;
  #password;

  constructor(nombre, dni,salario) {
    this.#nombre = nombre;
    this.#dni = dni;
    this.#salario = salario;
    this.#password = '';
  }

  autenticable(password){
      return password == this.#password;
  }

  asignarContrasena(password){
      this.#password = password;
  }

  verBonificacion(){
    return this.#salario;
  }

  _verBonificacion(bono){
    return this.#salario + (this.#salario*bono/100);
  }
}
