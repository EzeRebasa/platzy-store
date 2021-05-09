// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://platzi-store.herokuapp.com',

  // Se puede Configurar para pegarle a otro firebase para desarrollo
  firebase: {
    apiKey: "AIzaSyD9uXNmkaAsV4234xNC6yMfmnuFhKTuE3w",
    authDomain: "platzi-store-4bdb1.firebaseapp.com",
    projectId: "platzi-store-4bdb1",
    storageBucket: "platzi-store-4bdb1.appspot.com",
    messagingSenderId: "331264329948",
    appId: "1:331264329948:web:d041cc953cfbc298954c19"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
