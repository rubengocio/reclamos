import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {TripService} from "../services/trip-service";
import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";

import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {LocalWeatherPage} from "../pages/local-weather/local-weather";
import {CategoriasPage} from "../pages/categorias/categorias";
import {SubcategoriasPage} from "../pages/subcategorias/subcategorias";
import {DescripcionPage} from "../pages/descripcion/descripcion";
import {Camera} from '@ionic-native/camera';
import {DireccionPage} from "../pages/direccion/direccion";
import {DetalleReclamoPage} from "../pages/detalle-reclamo/detalle-reclamo";

// import services
import {CategoriaService} from "../services/categorias";
import {SubcategoriaService} from "../services/subcategorias";
import {ReclamoService} from "../services/reclamos";
import {UsuarioService} from "../services/usuarios";

import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';



// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    CategoriasPage,
    SubcategoriasPage,
    DescripcionPage,
    DireccionPage,
    DetalleReclamoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    CategoriasPage,
    SubcategoriasPage,
    DescripcionPage,
    DireccionPage,
    DetalleReclamoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    TripService,
    WeatherProvider,
    CategoriaService,
    SubcategoriaService,
    ReclamoService,
    UsuarioService,
    Camera,
    GoogleMaps,
    Geolocation
  ]
})

export class AppModule {
}
