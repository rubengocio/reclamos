export interface ApplicationConfig {
  baseUrlEndPint: string;
  baseUrlMedia: string;
}

export const CONFIG : ApplicationConfig = {
  //baseUrlEndPint: 'http://rgocio.pythonanywhere.com',
  //baseUrlMedia: 'http://rgocio.pythonanywhere.com'
  baseUrlEndPint: 'http://192.168.1.7:8000/v1',
  baseUrlMedia: 'http://192.168.1.7:8000'
};
