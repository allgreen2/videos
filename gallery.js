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

    console.log(fileName);
    console.log(fileItem);
}

function upload() {
    var reader = new FileReader();
    reader.onloadend = function (evt) {
        var blob = new Blob([evt.target.result], { type: "image/jpeg" });

        var name = document.getElementById("Name")
        var storageRef = firebase.storage().ref(name + '/' + file.name);
        console.warn(file); // Watch Screenshot
        var uploadTask = storageRef.put(blob);

    }

    reader.onerror = function (e) {
        console.log("Failed file read: " + e.toString());
    };
    reader.readAsArrayBuffer(file);



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
