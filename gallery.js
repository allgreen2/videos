// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBdckDLltWwUKCsWLHm-V2mZklrgoY9RVI",
    authDomain: "gallery-f091d.firebaseapp.com",
    projectId: "gallery-f091d",
    storageBucket: "gallery-f091d.appspot.com",
    messagingSenderId: "844175084149",
    appId: "1:844175084149:web:8bcd0e029568b9ddeb463c"
};


firebase.initializeApp(firebaseConfig);

var fileItem;

function getFile(e){
    fileItem = document.getElementById("file").files[0];

    console.log(fileItem.name);
    console.log(fileItem);
}

function upload() {

    let storageRef = firebase.storage().ref(fileItem.name);

    ref.put(fileItem).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        console.log(snapshot);
    });
}

/*
function upload() {
    let storageRef = firebase.storage().ref(fileItem.name);
    let uploadTask = storageRef.child(fileName).put(fileItem);

    uploadTask.on("state_change", (snapshot) => {
        console.log(snapshot);
        alert("SUCCESS")
    }, (error) => {
        console.log("Error is ", error);
        alert("ERROR")
    })
}
*/
