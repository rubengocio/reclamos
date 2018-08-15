export class Usuario{
  id?: number;
  nombre?: string;
  apellido?: string;
  email?: string;
  password?: string;
  repetir_password?: string;
  token?: string;
  constructor(values: Object = {}) {
    if(values['id'] != null){
      this.id=values['id'];
    }
    if(values['first_name'] != null){
      this.nombre = values['first_name'];
    }
    if(values['last_name'] != null){
      this.apellido = values['last_name'];
    }
    if(values['email']){
      this.email = values['email'];
    }
  }
}
