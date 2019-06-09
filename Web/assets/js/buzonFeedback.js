function setup(){
    var configuration = getConfigFirebase();
    firebase.initializeApp(configuration);
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

function sendFeedback(){
    var rootPassword = "feedbackSeminarios";
    var feedbackPassword = firebase.database().ref().child(rootPassword).push().key;
    var feedback = getFeedback();
    var updates = {};
    updates[`/${rootPassword}/${feedbackPassword}`] = feedback;
    return firebase.database().ref().update(updates);
}

function getFeedback(){
    var object = {
        commentary: "comentario",
        score: "10"
    };
    return object;
 }