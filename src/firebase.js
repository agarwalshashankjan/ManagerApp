import fb from 'firebase';
export const firebase = !fb.apps.length
  ? fb.initializeApp({
      apiKey: 'AIzaSyC7e9MhA4QYJI4p0CFoRHHQCq40_-h7TAk',
      authDomain: 'manager-8baee.firebaseapp.com',
      databaseURL: 'https://manager-8baee.firebaseio.com',
      projectId: 'manager-8baee',
      storageBucket: 'manager-8baee.appspot.com',
      messagingSenderId: '563034757752',
      appId: '1:563034757752:web:4e0755eda862cee9abeb8d',
    })
  : fb.app();
