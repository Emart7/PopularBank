export class Autenticacion {
  static login(usuario, password) {
    if ("autenticable" in usuario && usuario.autenticable instanceof Function) {
      return usuario.autenticable(password);
    } else return false;
  }
}
