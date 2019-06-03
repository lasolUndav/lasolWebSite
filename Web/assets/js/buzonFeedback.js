function setup(){
    var configuration = getConfigFirebase();
    firebase.initializeApp(configuration);
    console.log ("Firebase inicializado");
}

function getConfigFirebase(){
    var config = {
        apiKey: "AIzaSyAp0vc-Cs3Q3OTUS8Z3baQpRRXV1ZH4dY8",
        authDomain: "lasolweb-dev.firebaseapp.com",
        databaseURL: "https://lasolweb-dev.firebaseio.com",
        projectId: "lasolweb-dev",
        storageBucket: "lasolweb-dev.appspot.com",
        messagingSenderId: "159002353128",
        appId: "1:159002353128:web:aa8be027c910d840"
    };
    return config;
}



