import * as firebase from 'firebase';
var firebaseConfig = {
	apiKey: 'AIzaSyA1qYGVsXxvg0aAfA4dxJkd6grJuP6UqSU',
	authDomain: 'student-information-syst-ef1f.firebaseapp.com',
	databaseURL: 'https://student-information-syst-ef1f.firebaseio.com',
	projectId: 'student-information-syst-ef1f',
	storageBucket: 'student-information-syst-ef1f.appspot.com',
	messagingSenderId: '8260712109',
	appId: '1:8260712109:web:018f0931366a70cc66b824',
	measurementId: 'G-ZE0FZ6W9ZC'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const fbApp = {
	root: firebase,
	db: firebase.database(),
	auth: firebase.auth(),
	storage:firebase.storage(),
};

export default fbApp;
