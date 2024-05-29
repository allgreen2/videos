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

var fileText = document.querySelector(".fileText");
var fileItem;
var fileName;

function getFile(e){
    fileItem = e.target.files[0];
    fileName = fileItem.name;
}

function upload() {

    let storageRef = firebase.storage().ref("images/" + fileName);
    let uploadTask = storageRef.put(fileItem);

    uploadTask.on("state_change", (snapshot) => {
        console.log(snapshot);
        alert("SUCCESS")
    }, (error) => {
        console.log("Error is ", error);
        alert("ERROR")
    })
}