import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";
import {UsuarioService} from "../../services/usuarios";
import {Usuario} from "../../clases/usuario";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  registerCredentials = { email: '', password: '' };
  error: boolean = false;
  msjError: string = '';

  constructor(
      public nav: NavController,
      public forgotCtrl: AlertController,
      public menu: MenuController,
      public toastCtrl: ToastController,
      public usuarioService: UsuarioService,
    ) {
    this.menu.swipeEnable(false);
  }

  isValid(){
    if(this.registerCredentials.email != '' && this.registerCredentials.password != ''){
      return true;
    }
    return false;
  }

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }


  ngOnInit(){
    if(this.usuarioService.getCurrentUser() != null){
      this.nav.setRoot(HomePage);
    }
  }

  emailFocusFunction(){
    this.error = false;
  }

  passwordFocusFunction(){
    this.error = false;
  }


  // login and go to home page
  login() {
    let usuario: Usuario = null;

    this.usuarioService.getByLogin(this.registerCredentials.email, this.registerCredentials.password)
        .then(data => {
          this.nav.setRoot(HomePage);
        })
        .catch(error =>{
          this.error = true;
          this.msjError = "El usuario o la contraseña ingresada son incorrectos";
        });
  }

  anonimo() {
    this.usuarioService.anonimo();
    this.nav.setRoot(HomePage);
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
