// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAqinKXra6i70A3XoIDVKC8VKk8lRSnNVE",
    authDomain: "photorosterfiaa.firebaseapp.com",
    projectId: "photorosterfiaa",
    storageBucket: "photorosterfiaa.appspot.com",
    messagingSenderId: "626832165676",
    appId: "1:626832165676:web:4e55909660e4f67eeb7a89"
};


firebase.initializeApp(firebaseConfig);

var fileItem;
var userName;

function getFile(e){
    fileItem = document.getElementById("file").files[0];
    userName = document.getElementById("name").value;

    console.log(fileItem);
}

function upload() {
    let storageRef = firebase.storage().ref(fileItem.name);
    let uploadTask = storageRef.child(userName).put(fileItem);

    uploadTask.on("state_changed", (snapshot) => {
        console.log(snapshot);
        if (snapshot.totalBytes == snapshot.bytesTransferred) {
            alert('Upload Completed')
        }
    }, (error) => {
        console.log("Error is ", error);
        alert('Please make sure name is valid')
    })
}