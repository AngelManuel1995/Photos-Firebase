// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCa5EE_FX0l-kbsN4YFQXaM8rlT-oZvHlg',
    authDomain: 'photos-firebase.firebaseapp.com',
    databaseURL: 'https://photos-firebase.firebaseio.com',
    projectId: 'photos-firebase',
    storageBucket: 'photos-firebase.appspot.com',
    messagingSenderId: '866660179032'
  }
};
