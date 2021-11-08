var firebaseConfig = {
    apiKey: "AIzaSyDTzktfNGLUIPMYTeQhO_HE0O3cu0NSIvA",
    authDomain: "kwitte-af713.firebaseapp.com",
    databaseURL: "https://kwitte-af713-default-rtdb.firebaseio.com",
    projectId: "kwitte-af713",
    storageBucket: "kwitte-af713.appspot.com",
    messagingSenderId: "543836300767",
    appId: "1:543836300767:web:6b631c575c43e2e8cf906a"
  };

  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value = "";
}
