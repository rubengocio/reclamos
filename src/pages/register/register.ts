import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";

import {Usuario} from "../../clases/usuario";
import {UsuarioService} from "../../services/usuarios";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  private usuario: Usuario;
  msjError: any = {};
  error: boolean = false;

  constructor(
    public usuarioService: UsuarioService,
    public nav: NavController) {
      this.usuario = new Usuario();
  }

  // register and go to home page
  register() {
    this.usuarioService.register(this.usuario)
      .then(data => {
          this.usuarioService.getByLogin(this.usuario.email, this.usuario.password)
            .then(res => {
              this.nav.setRoot(HomePage);
            });
      })
      .catch(err => {
        this.msjError = JSON.parse(err.error);
        this.error = true;
      });
  }

  quitarErrores(){
    this.error = false;
  }

  isValid(){
    if(this.usuario.nombre == null){
      return false;
    }
    if(this.usuario.apellido == null){
      return false;
    }
    if(this.usuario.email == null){
      return false;
    }
    if(this.usuario.password == null){
      return false;
    }
    if(this.usuario.repetir_password == null){
      return false;
    }
    if(this.usuario.password != this.usuario.repetir_password){
      return false;
    }
    console.log('true');
    return true;
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
