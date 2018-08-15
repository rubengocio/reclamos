import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Reclamo} from "../../clases/reclamo";
import {Camera, CameraOptions} from '@ionic-native/camera';
import {UsuarioService} from "../../services/usuarios";
import {Usuario} from "../../clases/usuario";
import {DireccionPage} from "../direccion/direccion";

/**
 * Generated class for the DescripcionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-descripcion',
  templateUrl: 'descripcion.html',
})
export class DescripcionPage {
  public base64Image: string;
  public reclamo: Reclamo;
  private currentUser: Usuario;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private userService: UsuarioService,

  ) {
      this.reclamo = this.navParams.data;
      console.log(this.reclamo);
      this.currentUser = {id:0};
  }

  tomarFoto(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
      targetWidth: 300,
      targetHeight: 250
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     console.log(err);
    });
  }

  continuar(){
    this.reclamo.imagen = this.base64Image;
    this.reclamo.usuario = this.userService.currentUser.id;
    //this.reclamoService.save(this.reclamo);
    //this.navCtrl.setRoot(HomePage);
    this.navCtrl.push(DireccionPage, this.reclamo);
  }

}
